import { useState } from 'react'
import './App.css'




function App() {
    const [curtidas, setCurtidas] = useState(0)
    const [emoji, setEmoji] = useState("😐")




    const Curtir = () => {
        setCurtidas(curtidas + 1)
        setEmoji(curtidas < 3 ? "😐" : curtidas < 6 ? "🙂" : curtidas < 9 ? "😊" : curtidas < 12 ? "😁" : "🤩")
    };




    return (
        <>
            <button onClick={() => Curtir()}>boost happyness ({curtidas})</button>
            <p>your happyness: {emoji}</p>
        </>
    )
}


export default App