import './App.css';
import React, { useState } from "react";




function AdicionarLista() {


    const [Lista, setLista] = useState([]);
    const [Task, setTask] = useState('');


    const adicionarTask = () => {
        if (Task.trim()) {
            setLista([...Lista, Task]);
            setTask('');
        };
    };


    return (
        <div>
            <input
                type="text"
                value={Task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Que tarefa deseja adicionar?'
            /><div>
                <button onClick={adicionarTask}>Adicionar Tarefa</button>
            </div>
            <ul style={{ backgroundColor: 'black', padding: '2px' }}>
                {Lista.map((Task, index) => (
                    <li key={index}>{Task}</li>
                ))}
            </ul>
        </div>
    );
};


export default AdicionarLista;
