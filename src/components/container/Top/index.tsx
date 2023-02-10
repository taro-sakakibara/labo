// import style from './top.module.scss';
import { Card } from './components/Card';
import { Typography } from '@/components/global/Typography';
import style from './index.module.scss';

export const Container = () => {
  return (
    <section className={style.wrapper}>
      <Typography.h1 marginBottom>TS研究所</Typography.h1>
      <Typography.h2>やりたいこと</Typography.h2>
      <div className={style.container}>
        <Card title="React Hook Formを使えるか試してみる" body="astroが実務で使えるか、テストするのだ。まじめだ。" />
        <Card
          title="大垣探検マップを作る"
          body="Google Mapを使って、大垣市内で行ったところをチェックする一覧地図を作りつつ、レビュー記事みたいなのをリンクできたら最高"
        />
        <Card
          title="webコンポーネントを試す"
          body="webコンポーネントを使って、コンポーネントを作ってみる。どういう感じになるのかな。"
        />
        <Card title="ファビコンを作る" body="頑張ってファビコンを作ってみる。" />
      </div>
    </section>
  );
};
