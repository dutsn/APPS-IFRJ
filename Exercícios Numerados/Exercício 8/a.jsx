import './App.css';
import React, { useState } from "react";




function AdicionarLista() {


    const [Lista, setLista] = useState([]);
    const [Item, setItem] = useState('');


    const adicionarItem = () => {
        if (Item.trim()) {
            setLista([...Lista, Item]);
            setItem('');
        };
    };


    return (
        <div>
            <input
                type="text"
                value={Item}
                onChange={(e) => setItem(e.target.value)}
                placeholder='Adicionar um item à lista'
            /><div>
                <button onClick={adicionarItem}>Adicionar Item</button>
            </div>
            <ul style={{ backgroundColor: 'black', padding: '2px' }}>
                {Lista.map((Item, index) => (
                    <li key={index}>{Item}</li>
                ))}
            </ul>
        </div>
    );
};


export default AdicionarLista;