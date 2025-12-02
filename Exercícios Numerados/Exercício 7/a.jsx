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
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Digite algo aqui' />
                <p>Você digitou: {texto}</p>
            </div>
        </>
    )
}


export default App