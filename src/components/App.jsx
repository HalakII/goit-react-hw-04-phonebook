import { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
// import contactNumbers from '../data/contacts.json';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { SectionSubtitle } from './SectionSubtitle/SectionSubtitle';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const newContact = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(newContact);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  createNewContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactExists) {
      NotificationManager.info(`${data.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = deleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
      };
    });
  };

  handleChangeFilter = event => {
    const value = event.currentTarget.value.toLowerCase();
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div className={css.wrapper}>
        <NotificationContainer />
        <SectionTitle title="Phonebook" />
        <ContactForm onSubmit={this.createNewContact} />
        <SectionSubtitle subtitle="Contacts" />
        <ContactsFilter
          value={this.state.filter}
          onFilterChange={this.handleChangeFilter}
        />
        <ContactsList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
