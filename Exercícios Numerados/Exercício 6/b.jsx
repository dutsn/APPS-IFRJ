function App() {
    return <Func />
}
function Func() {
    const [mostrar, setMostrar] = useState(true)


    return (
        <>
            {mostrar && <img src="https://mineracaosustentavel.org.br/wp-content/uploads/2023/06/Gold-ouro.jpg" alt="muito ouro" />}


            <p><button onClick={() => setMostrar(!mostrar)}>{mostrar ? "Esconder gif" : "Mostrar gif"}</button></p>


        </>
    )
}


export default App