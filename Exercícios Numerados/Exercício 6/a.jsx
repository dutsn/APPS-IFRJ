import React, { useState } from 'react';

function MostrarEsconder() {
    return <Func />
}

function Func() {
    const [mostrar, setMostrar] = useState(true)

    return (
        <>
            {mostrar && <p>esse texto irá alternar entre aparecer ou não</p>}
            <p><button onClick={() => setMostrar(!mostrar)}>{mostrar ? "Hide" : "Show"}</button></p>
        </>
    )
}

export default MostrarEsconder