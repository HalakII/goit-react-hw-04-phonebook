import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import css from './ContactsList.module.css';
export const ContactsList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
