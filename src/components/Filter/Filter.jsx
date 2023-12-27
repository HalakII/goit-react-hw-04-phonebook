import css from './Filter.module.css';

export const ContactsFilter = ({ value, onFilterChange }) => {
  return (
    <div className={css.wrapperFilter}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};
