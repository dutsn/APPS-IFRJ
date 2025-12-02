import { useState } from 'react'
import './App.css'




function App() {
    return <AlterarCor />
}
function AlterarCor() {
    const [cor, setCor] = useState("white")


    const mudarCor = (novaCor) => {
        setCor(novaCor)
        document.body.style.background = novaCor
    }


    return (
        <div>
            <h2>Alterar cor</h2>
            <button onClick={() => mudarCor("lightblue")} >Azul</button>
            <button onClick={() => mudarCor("lightgreen")} >Verde</button>
            <button onClick={() => mudarCor("lightcoral")} >Coral</button>
            <button onClick={() => mudarCor("white")} >Branco</button>
        </div>
    )


}


export default App