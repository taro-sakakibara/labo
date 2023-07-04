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
        <Card
          title="NestedCssを使えるか試してみる"
          body="astroが実務で使えるか、テストするのだ。まじめだ。"
          href="/nested-css/"
        />
        <Card
          title="React Hook Formを使えるか試してみる"
          body="astroが実務で使えるか、テストするのだ。まじめだ。"
          href="/test-react-hook-form/"
        />
        <Card
          title="大垣探検マップを作る"
          body="Google Mapを使って、大垣市内で行ったところをチェックする一覧地図を作りつつ、レビュー記事みたいなのをリンクできたら最高"
          href="/oogaki-expedition-map/"
        />
        <Card
          title="webコンポーネントを試す"
          body="webコンポーネントを使って、コンポーネントを作ってみる。どういう感じになるのかな。"
        />
        <Card title="ファビコンを作る" body="頑張ってファビコンを作ってみる。" />
        <Card title="view transition apiを試してみる" body="" href="/test-view-transition-api/" />
        <Card title="safariのpush通知機能を試してみたい" body="" />
        <Card title="Renovationを導入する" body="" />
        <Card title="plopの設定をする" body="" />
        <Card title="カードにdoneのスタイルを追加する" body="" />
        <Card title="カードにリンクをつける" body="" />
      </div>
    </section>
  );
};
