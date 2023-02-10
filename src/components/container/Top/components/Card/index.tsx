import style from './index.module.scss';
import { Typography } from '@/components/global/Typography';

export interface Props {
  body: string;
  title: string;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <div className={style.link_card}>
      <div className={style.link}>
        <h2 className={style.heading}>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <Typography.p>{props.body}</Typography.p>
      </div>
    </div>
  );
};
