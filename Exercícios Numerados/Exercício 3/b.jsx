

function ComidasFavoritas() {
    const comidas = ['Lasanha', 'Strogonoff', 'Churrasco (especialmente coração de galinha)', 'Feijoada']


    return (
        <div>
            <h2>Minhas comidas favoritas:</h2>
            <ol>
                {comidas.map((comida, index) => (<li key={index}> {comida} </li>))}
            </ol>
        </div>
    )
}


export default ComidasFavoritas
