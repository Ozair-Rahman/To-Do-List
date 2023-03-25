'use client'; // Use React Client Side Components to Use useEffect & useState

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
  ,[]);

  return (
    <main>
      <h1>To Do List</h1>
      <div className="renderToDos">
        {toDos.map((item, key) => {
          return (
            <div key={key}>
              <input type="radio" />
              <h2>{item.ToDo}</h2>
              <button onClick={() => axios.delete(`http://localhost:5000/delToDo/${item._id}`)}>Delete</button>
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
