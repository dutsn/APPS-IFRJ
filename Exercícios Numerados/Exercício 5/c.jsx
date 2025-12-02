function Contador() {
    return <Func />
}
function Func() {
    const [count, setCount] = useState(10)

    const getCor = (temp) => {
        if (temp > 30) return "red"
        if (temp < 0) return "blue"
        return "white"
    }
    return (
        <>
            <h2 style={{ color: getCor(count) }}>Temperatura: {count}°C</h2>
            <button onClick={() => setCount(count + 2)}>+2°C</button>
            <button onClick={() => setCount(count - 2)}>-2°C</button>
        </>
    )
}


export default Contador