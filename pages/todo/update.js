import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({description: yup.string().required(),}).required();

const App = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({resolver: yupResolver(schema),});

  const onSubmitHandler= async (data) => await fetch('https://dummyjson.com/todos/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: false,
    }).then(res => res.json())
    .then(console.log)
  })

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h3>description</h3>
      <input {...register("description")} placeholder="description" type="description" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;