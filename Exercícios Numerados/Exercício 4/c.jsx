function App() {
    return <Func />
}

function Func() {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
        flexWrap: "wrap",
        width: "100%"
    }

    return (
        <div style={containerStyle}>
            <PrevisaoTempo temperatura={31} clima="ensolarado" cidade="Rio de Janeiro" umidade={50} />
            <PrevisaoTempo temperatura={20} clima="nublado" cidade="São Paulo" umidade={65} />
            <PrevisaoTempo temperatura={12} clima="nevando" cidade="Curitiba" umidade={65} />
        </div>
    )
}
function PrevisaoTempo({ temperatura, clima, cidade, umidade }) {

    const getIcone = (clima) => {
        const climas = {
            "ensolarado": "☀️ sol",
            "nublado": "☁️ nuvem",
            "chuvoso": "🌧️ nuvem chuvosa",
            "tempestuoso": "⛈️ nuvem tempestuosa",
            "nevando": "❄️ floco de neve",
        };
        return climas[clima.toLowerCase()] || "☁️";
    }

    const getCorTemperatura = (temp) => {
        if (temp < 15) return "#4a90e2";
        if (temp < 25) return "#f5a623";
        return "#d0021b"
    }

    return (
        <div style={{
            border: '2px solid #ddd', borderRadius: '15px', padding: '25px',
            textAlign: "center", background: "linear-gradient(123deg,#74b9ff, #0984e3)",
            color: "white", maxWidth: "200px", minWidth: "200px"
        }}>
            <h2 style={{ margin: "0 0 15px 0" }}>{cidade}</h2>
            <div style={{ fontSize: "60px", margin: "10px 0" }}>
                {getIcone(clima)}
            </div>
            <div style={{
                fontSize: "48px", fontWeight: "bold",
                color: getCorTemperatura(temperatura),
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}>
                {temperatura}°C
            </div>
            <p style={{ fontSize: "18px", margin: "10px 0" }}>{clima}</p>
            <p style={{ fontSize: "14px", opacity: 0.9 }}>Umidade: {umidade}%</p>
        </div>
    )
}