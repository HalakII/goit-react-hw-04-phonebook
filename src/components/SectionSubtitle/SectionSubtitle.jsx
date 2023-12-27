import css from './SectionSubtitle.module.css';
export const SectionSubtitle = ({ subtitle, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.subtitle}>{subtitle}</h1>
      {children}
    </section>
  );
};
