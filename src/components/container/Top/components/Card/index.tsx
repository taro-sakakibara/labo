import style from './index.module.scss';
import { Typography } from '@/components/global/Typography';

export interface Props {
  body: string;
  title: string;
  href?: string;
}

interface WrapperProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <>
      {props.href ? (
        <a className={`${props.className} ${style.done}`} href={props.href}>
          {props.children}
        </a>
      ) : (
        <div className={`${props.className} ${style.wip}`}>{props.children}</div>
      )}
    </>
  );
};

export const Card: React.FC<Props> = (props) => {
  return (
    <Wrapper className={style.link_card} href={props.href}>
      <div className={style.link}>
        <h2 className={style.heading}>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <Typography.p>{props.body}</Typography.p>
      </div>
    </Wrapper>
  );
};
