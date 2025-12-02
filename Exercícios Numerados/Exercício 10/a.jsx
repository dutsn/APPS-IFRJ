import { useState } from 'react'
import './App.css'




function App() {
    return <AlterarCor />
}
function AlterarCor() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)




    const Calcular = (opera) => {


        let cal


        switch (opera) {
            case "soma": cal = Number(n1) + Number(n2); break;
            case "sub": cal = Number(n1) - Number(n2); break;
            case "mult": cal = Number(n1) * Number(n2); break;
            case "div": cal = Number(n1) / Number(n2); break;
        }


        document.getElementById("result").innerText = `Resultado: ${cal}`
    }


    return (
        <div>
            <input type="number" onChange={(e) => setN1(e.target.value)} value={n1} />


            <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} />


            <button onClick={() => Calcular("soma")} >- Somar -</button>
            <button onClick={() => Calcular("sub")} >- Subtrair -</button>
            <button onClick={() => Calcular("mult")} >- Multiplicar -</button>
            <button onClick={() => Calcular("div")} >- Dividir -</button>


            <h2 id='result'>Resultado: </h2>
        </div>
    )


}


export default App