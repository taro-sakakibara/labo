import style from './index.module.scss';

type TypeP = {
  children: React.ReactNode;
  marginBottom?: boolean;
};

type TypeH = {
  children: React.ReactNode;
  marginBottom?: boolean;
};

const p: React.FC<TypeP> = (props) => {
  return <p className={`${style.p} ${props.marginBottom ? style.margin_bottom : ''}`}>{props.children}</p>;
};
const h1: React.FC<TypeH> = (props) => {
  return <h1 className={`${style.h1} ${props.marginBottom ? style.margin_bottom : ''}`}>{props.children}</h1>;
};
const h2: React.FC<TypeH> = (props) => {
  return <h2 className={`${style.h2} ${props.marginBottom ? style.margin_bottom : ''}`}>{props.children}</h2>;
};
const h3: React.FC<TypeH> = (props) => {
  return <h3 className={`${style.h3} ${props.marginBottom ? style.margin_bottom : ''}`}>{props.children}</h3>;
};
const h4: React.FC<TypeH> = (props) => {
  return <h4 className={`${style.h4} ${props.marginBottom ? style.margin_bottom : ''}`}>{props.children}</h4>;
};

export const Typography = {
  p,
  h1,
  h2,
  h3,
  h4,
};
