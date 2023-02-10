import style from './index.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>
          <a href="/">TS</a>
        </h1>
      </div>
    </header>
  );
};
