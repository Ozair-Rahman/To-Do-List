'use client'; // Use React Client Side Components to Use useEffect & useState

import './globals.css';

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  // States
  const [toDos, setToDos] = useState<string[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  // Render ToDos on Initial Render
  useEffect(() => {
    axios.get('http://localhost:5000/getToDo')
    .then((response) => setToDos(response.data));
  }
  ,);

  return (
    <main className='test3'>
      <h1>To Do List</h1>
      <div className="renderToDos">
        {toDos.map((item, key) => {
          return (
            <div key={key} className='test4'>
              <input type="radio" className='test2' onChange={() => axios.delete(`http://localhost:5000/delToDo/${item._id}`)} />
              <p className="test">{item.ToDo}</p>
              <br />
            </div>
          )
        })}
      </div>
      <div className="createToDo">
        <input type="text" placeholder="New To Do..." onChange={(e) => setNewToDo(e.target.value)} />
        <button onClick={() => axios.post('http://localhost:5000/createToDo', { ToDo: newToDo })}>Submit</button>
      </div>
    </main>
  )
}
