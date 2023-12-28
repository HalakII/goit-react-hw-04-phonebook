import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import css from './ContactsList.module.css';
export const ContactsList = ({ filteredContacts, onDeleteContact }) => {
  console.log(filteredContacts.id);
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
