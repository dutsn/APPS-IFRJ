function App() {
    return <Func />
}


function CartaoPessoa({ nome, idade, profissao }) {
    return (
        <div className='pess-cart'>
            <h2>{nome}</h2>
            <p><strong>Idade:</strong> {idade} anos</p>
            <p><strong>Profissão:</strong> {profissao}</p>
        </div>
    )
}


function Func() {
    return (
        <div className="menu-grid">
            <CartaoPessoa nome="Dutao" idade={17} profissao="Estudante" />
            <CartaoPessoa nome="Carlos" idade={41} profissao="Mecânico" />
            <CartaoPessoa nome="Victor" idade={21} profissao="Professor" />
        </div>
    )
}


export default App
