import { Typography } from '@/components/global/Typography';
import style from './index.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormItems } from './components/Form';

interface Inputs {
  name: string;
  tel: number;
  email: number;
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
          <FormItems.Input register={register} placeholder="猫山 とら" label="name" errors={errors} />
          <FormItems.Input register={register} placeholder="222-2222-2222" label="tel" errors={errors} />
          <FormItems.Input register={register} placeholder="nekoyama@neko.co.jp" label="email" errors={errors} />
          <FormItems.Button />
        </form>
      </div>
    </section>
  );
};
