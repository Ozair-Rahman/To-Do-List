import axios from "axios";
import { useState, useEffect } from "react";

export default function EditToDo() {

    const [editToDo, setEditToDo] = useState<string>("");
    const [ToDo, setToDo] = useState<string[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getToDo')
        .then((response) => setToDo(response.data));
    },[]);

    return(
        <div>
            <input type="text" placeholder="Edit To Do..." onChange={(e) => setEditToDo(e.target.value)} />
            <button onClick={() => {
                ToDo.map(() => )
            }}>Submit Changes</button>
        </div>
    )
}