import css from './SectionTitle.module.css';
export const SectionTitle = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};
