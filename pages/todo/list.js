import { useQuery } from 'react-query';
import React, { useState } from 'react';

// fetch data
const todo = async () => {
    const [tasks, setTasks] = useState([]);
    
    const response = await fetch('https://dummyjson.com/todos');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
 };

function ListDisplay(){
    const { isLoading, isError, data } = useQuery('data', todo);

    if (isLloading){
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error</h1>
    }

    return (
        <div>
            <ul>
            {tasks.map(task => (
                    <li className="list-group-item" key={task.id}>{task.title}</li>
                ))}
            </ul>
            <button className="btn btn-sm btn-warning ml-2" onClick={deleteData}></button>
        </div>
    );
};

//delete 
async function deleteData() {
    try {
        const res = await fetch('https://dummyjson.com/todos/1', {
            method: 'DELETE',
        }).then(res => res.json()).then(console.log);
        alert('Data deleted successfully!');
      } catch (error) {
        console.error('Error deleting data:', error);
      }
};

export default ListDisplay;

