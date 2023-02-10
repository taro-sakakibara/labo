// import style from './top.module.scss';
import { Typography } from '@/components/global/Typography';
import style from './index.module.scss';

export const Container = () => {
  return (
    <section className={style.wrapper}>
      <Typography.h1 marginBottom>大垣探検マップ</Typography.h1>
      <div className={style.container}></div>
    </section>
  );
};
