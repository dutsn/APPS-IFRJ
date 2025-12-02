import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { Linter } from 'eslint'


function App() {
    return <InputTempoReal />
}
function InputTempoReal() {
    const [texto, setTexto] = useState("")
    const [vali, setVali] = useState("")


    return (
        <>
            <div>
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}
                    placeholder='Digite algo' />


                <Validade texto={texto} fun={setVali} />
                <h2>Você digitou: {texto}, ele é: {vali}</h2>


            </div>
        </>
    )
}
function Validade({ texto, fun }) {
    if (texto.length >= 3) { fun("válido") }
    else { fun("inválido") }
}


export default App