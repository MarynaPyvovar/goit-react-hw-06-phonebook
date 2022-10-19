import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css'

export const Phonebook = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    // const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? []});

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts])

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const contactAlreadyExists = (name, number) => {
    return contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.number === number);
    }

    const addContactToList = (name, number) => {
        if (contactAlreadyExists(name, number)) {
        return alert(`${name} ${number} is already in Phonebook`);
        }

        dispatch(addContact({name, number}))
    }

    return <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContactToList} />

        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList contacts={getFilteredContacts()} />
    </>
}