import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { name: 'John', number: '896-65-56' },
    { name: 'Alice', number: '234-45-89' },
  ],
  reducers: {
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    addContact(state, action) {
      state.unshift({ id: nanoid(), ...action.payload });
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsdReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;

// Selector
export const getContacts = state => state.contacts;
