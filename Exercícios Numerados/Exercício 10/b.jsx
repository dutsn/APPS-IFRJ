import { useState } from 'react'
import './App.css'




function App() {
    return <AlterarCor />
}
function AlterarCor() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)




    const Calcular = () => {


        let cal = Number(n1) * Number(n2)


        document.getElementById("result").innerText = `Resultado: ${cal}`
    }


    return (
        <div>
            <h1>Calcular area</h1>
            <input type="number" onChange={(e) => setN1(e.target.value)} value={n1} placeholder='altura' />
            <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder='comprimeinto' />


            <button onClick={() => Calcular()} >- calcular area -</button>




            <h2 id='result'>Resultado: </h2>
        </div>
    )


}


export default App