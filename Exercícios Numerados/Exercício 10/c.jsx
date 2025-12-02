import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'


function App() {
    return <Conversor />
}


function Conversor() {
    const [n1, setN1] = useState(0)
    const [inicio, setInicio] = useState('real')
    const [destino, setDestino] = useState('dolar')
    const [resultado, setResultado] = useState('')


    const taxas = {
        real: { dolar: 0.25, euro: 0.2, real: 1 },
        dolar: { real: 4, euro: 0.8, dolar: 1 },
        euro: { real: 5, dolar: 1.2, euro: 1 },
    }


    const Calcular = () => {
        const taxa = taxas[inicio][destino]
        const cal = n1 * taxa


        setResultado(`Resultado: ${cal.toFixed(2)} ${destino.toUpperCase()}`)
    }


    return (
        <div>
            <h3>Preenche aí:</h3>


            <p>Tipo da moeda atual:</p>
            <select value={inicio} onChange={(e) => setInicio(e.target.value)}>
                <option value="real">Real</option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
            </select>


            <p>Quantidade da moeda atual:</p>
            <input
                type="number"
                onChange={(e) => setN1(Number(e.target.value))}
                value={n1}
                placeholder="valor"
            />


            <p>Converter para a moeda:</p>
            <select value={destino} onChange={(e) => setDestino(e.target.value)}>
                <option value="real">Real</option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
            </select>


            <p>
                <button onClick={Calcular}>- calcular transição -</button>
            </p>


            <h2 id="result">{resultado || 'Resultado:'}</h2>
        </div>
    )
}


export default App