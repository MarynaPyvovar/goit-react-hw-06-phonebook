import React from 'react';
import PropTypes from "prop-types";
import {ContactItem} from '../ContactItem/ContactItem';

export const ContactList = ({ contacts}) => {
    return <ul>
        {contacts.map(item =>
            <ContactItem key={item.id} data={item} />)
        }
    </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
}