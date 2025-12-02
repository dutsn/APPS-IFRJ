import React, { useState } from 'react';

function MostrarEsconder() {
    const [mostrar, setMostrar] = useState(true);

    return (
        <div>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? 'Fechar Cofre 🔒' : 'Abrir Cofre 🔓'}
            </button>
            {mostrar && <ol>
                <li>Muito ouro</li>
                <li>Dinheiro</li>
                <li>Sergipe</li>
                <li>Giftcard do COD</li>
                <li>Ovo de Páscoa do Fluminense</li>
            </ol>}
        </div>
    );
}

export default MostrarEsconder;