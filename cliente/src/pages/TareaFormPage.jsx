import { useForm } from 'react-hook-form';
import { createTarea } from '../api/TareaApi';

export function TareaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const res = await createTarea(data);
    console.log(res);
  })
   

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="title"
        {...register('title', { required: true })}
      />
      {errors.title && <span>Este campo es requerido</span>}

      <textarea
        rows="3"
        placeholder="description"
        {...register('description', { required: true })}
      ></textarea>
      {errors.description && <span>Este campo es requerido</span>}

      <button type="submit">Guardar</button>
    </form>
  );
}

//la funcion register,registrara inputs,textarea