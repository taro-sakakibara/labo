// import style from './top.module.scss';
import { Typography } from '@/components/global/Typography';
import style from './index.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  name: string;
  tel: number;
}

export const Container = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className={style.wrapper}>
      <Typography.h1 marginBottom>ReactHookFormを試してみる</Typography.h1>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('name')} />
          <input defaultValue={'000'} {...register('tel', { required: true })} />
          {errors.tel && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};
