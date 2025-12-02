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
    return (
        <>
            <div>
                <input type="text" value={texto} onChange={(e) => e.target.value.length <= 50 ? setTexto(e.target.value) : setTexto(texto)} placeholder='Digite algo aqui' />


                <h2>Você digitou: {texto}</h2>
                <h2>Tamanho: {texto.length}/50 </h2>
            </div>
        </>
    )
}




export default App