import { Typography } from '@/components/global/Typography';
import './style.css';

export const Container = () => {
  return (
    <section>
      <Typography.h1 marginBottom>NestedCss</Typography.h1>
      <div>
        <Typography.p>NestedCssを使ってみる</Typography.p>
      </div>
      <h2>始まり</h2>
      <div className="box">
        <p className="text">
          テストで色々ネストさせる<span className="text-red">例えばここは赤色の文字</span>
        </p>
      </div>
    </section>
  );
};
