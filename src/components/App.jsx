import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { SectionSubtitle } from './SectionSubtitle/SectionSubtitle';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './Filter/Filter';
import css from './App.module.css';

import {useEffect, useState} from 'react'

export const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
 

useEffect(()=>{localStorage.setItem('contacts', JSON.stringify(contacts))},[contacts])

  const createNewContact = data => {
    console.log(data);
    const newContact = {
      id: nanoid(),
      ...data
    };
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactExists) {
      NotificationManager.info(`${data.name} is already in contacts.`);
      return;
    }
    setContacts(prevStateContacts => [newContact, ...prevStateContacts])
  };

  const deleteContact = deleteId => {
    console.log(deleteId);
    setContacts(prevStateContacts => prevStateContacts.filter(contact => contact.id !== deleteId)
    )
  };


  const handleChangeFilter = event => {
    console.log(event);
    const value = event.currentTarget.value.toLowerCase();
    setFilter(value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <div className={css.wrapper}>
    <NotificationContainer />
    <SectionTitle title="Phonebook" />
    <ContactForm onSubmit={createNewContact} />
    <SectionSubtitle subtitle="Contacts" />
    <ContactsFilter
      value={filter}
      onFilterChange={handleChangeFilter}
    />
    <ContactsList
      filteredContacts={filterContacts()}
      onDeleteContact={deleteContact}
    />
  </div>
  )
}

