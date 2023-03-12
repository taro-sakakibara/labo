import { Typography } from '@/components/global/Typography';
import { useEffect } from 'react';
import style from './index.module.scss';

export const Container = () => {
  useEffect(() => {
    document.querySelectorAll('a[data-to]').forEach((a) => {
      a.addEventListener('click', (e: any) => {
        e.preventDefault();

        const to = e.currentTarget.dataset.to;

        // ページを切り替える
        document.startViewTransition(() => {
          document.querySelectorAll('[data-page]').forEach((page: any) => {
            page.hidden = to !== page.dataset.page;
          });
        });
      });
    });
  }, []);

  return (
    <section className={style.wrapper}>
      <Typography.h1 marginBottom>view transition apiを使ってみる!</Typography.h1>
      <div className={style.container}>
        <Typography.p>モーダルっぽいものを作ってみよう</Typography.p>
        <div className={`${style.page} ${style.top}`} data-page="top">
          <h1>Top page</h1>
          <ul>
            <li>
              <a href="#sub1" data-to="sub1">
                <img src="https://placekitten.com/400/400" width="64" height="64" />
                Sub page 1
              </a>
            </li>
            <li>
              <a href="#sub2" data-to="sub2">
                <img src="https://placekitten.com/300/300" width="64" height="64" />
                Sub page 2
              </a>
            </li>
          </ul>
        </div>

        <div className={`${style.page} ${style.sub1}`} data-page="sub1" hidden>
          <h2>Sub page 1</h2>
          <p>
            <img src="https://placekitten.com/400/400" width="300" height="300" />
          </p>
          <p>
            <a href="#top" data-to="top">
              Back
            </a>
          </p>
        </div>

        <div className={`${style.page} ${style.sub2}`} data-page="sub2" hidden>
          <h2>Sub page 2</h2>
          <p>
            <img src="https://placekitten.com/300/300" width="300" height="300" />
          </p>
          <p>
            <a href="#top" data-to="top">
              Back
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
