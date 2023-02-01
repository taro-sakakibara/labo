import style from "./card.module.scss";

export interface Props {
  title: string;
  body: string;
  href: string;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <li className={style.link_card}>
      <a className={style.link} href={props.href}>
        <h2 className={style.heading}>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </li>
  );
};
