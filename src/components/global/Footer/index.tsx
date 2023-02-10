import style from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <a href="/" className={style.title}>
          TS
        </a>
      </div>
    </footer>
  );
};
