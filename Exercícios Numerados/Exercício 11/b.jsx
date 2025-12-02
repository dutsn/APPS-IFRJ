import { useState } from 'react'
import './App.css'


function App() {
    const [dados, setDados] = useState({ nome: "", email: "", idade: 0 })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados({ ...dados, [name]: value })




        if (!(dados.email.includes("@")) || dados.idade < 18) {
            document.getElementById("frase").innerText = "Inválido"
        }
        else {
            document.getElementById("frase").innerText = "Válido"
        }
    }


    return (
        <>
            <fieldset>
                <legend>Forms:</legend>
                <form action="">
                    <span>Nome :</span>
                    <input type="text" placeholder='Digite aqui' name='nome' value={dados.nome} onChange={handleChange} /><br />
                    <span>Email :</span>
                    <input type="text" placeholder='Digite aqui' name='email' value={dados.email} onChange={handleChange} /> <br />
                    <span>Idade :</span>
                    <input type="number" placeholder='Digite aqui' name='idade' value={dados.idade} onChange={handleChange} />
                </form>
            </fieldset>




            <fieldset>
                <legend>Dados Preenchidos</legend>
                <span>Nome: {dados.nome}</span> <br />
                <span>Email: {dados.email}</span> <br />
                <span>Idade: {dados.idade}</span>


                <p><span id='frase'> </span></p>
            </fieldset>
        </>
    )
}






export default App