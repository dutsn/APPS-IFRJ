import React, { useState } from 'react';

function Contador() {
    return <Func />
}
function Func() {
    const [count, setCount] = useState(0)


    return (
        <>
            <h2>Contador: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </>
    )
}


export default Contador