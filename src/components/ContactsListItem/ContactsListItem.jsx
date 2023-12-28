import css from './ContactsListItem.module.css';
import { MdDeleteForever, MdOutlineContactPhone } from 'react-icons/md';
export const ContactsListItem = ({ id, name, number, onDeleteContact }) => { console.log(name);
  console.log(number);
  console.log(id);
  return (
    <li className={css.item} key={id}>
      {<MdOutlineContactPhone className={css.iconTel} />}
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{number}</span>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        {<MdDeleteForever className={css.icon} />}
      </button>
    </li>
  );
};
