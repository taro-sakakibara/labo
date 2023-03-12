import style from './index.module.scss';
import type { UseFormRegister, FieldErrors, Path } from 'react-hook-form';

interface IFormValues {
  name: string;
  tel: number;
  email: number;
}

interface IInput {
  register: UseFormRegister<IFormValues>;
  placeholder: string;
  label: Path<IFormValues>;
  errors: FieldErrors;
}

const Input: React.FC<IInput> = (props) => {
  return (
    <div className={style.input_wrapper}>
      <label className={style.label} htmlFor={props.label}>
        お名前
      </label>
      <input
        className={style.input}
        {...props.register(props.label, { required: true })}
        placeholder={props.placeholder}
      />
      {props.errors[props.label] && <span>必須項目です</span>}
    </div>
  );
};

const Button: React.FC = () => {
  return (
    <button className={style.button} type="submit">
      送信
    </button>
  );
};

export const FormItems = {
  Input,
  Button,
};
