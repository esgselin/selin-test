import React,  { useState }  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  description: yup.string().required("description is a required field"),
});

function App(){
    const { 
      register, handleSubmit, formState= { errors }, 
   } = useForm<IFormInput>({ resolver: yupResolver(schema) });

   const  [newData, setNewData] = useState('');
   const onSubmit = async () => {
    try {
      await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: 'Use DummyJSON in the project',
          completed: false,
          userId: 5,
        })
      });
      alert('Data created successfully!');
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>create new to-do</h2>
            <input type="description" value={newData} onChange={(e) => setNewData(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default App;


/* 
.then(res => res.json())
.then(console.log);
  */