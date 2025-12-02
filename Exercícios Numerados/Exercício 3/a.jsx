function ListaHobbies() {
    const hobbies = ['Jogar videogames', 'Estudar história e línguas', 'Restaurar o Império Macedônio']


    return (
        <div>
            <h2>Meus Hobbies que pratico todo sábado:</h2>
            <ul>
                {hobbies.map((hobby, index) => (<li key={index}> {hobby} </li>))}
            </ul>
        </div>
    )
}


export default ListaHobbies
