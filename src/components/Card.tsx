import style from './card.module.scss';

export interface Props {
  body: string;
  title: string;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <li className={style.link_card}>
      <div className={style.link}>
        <h2 className={style.heading}>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </div>
    </li>
  );
};
