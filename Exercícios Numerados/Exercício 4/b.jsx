function App() {
    return <Func />
}


function CartaoLivro({ titulo, autor, genero, ano }) {
    return (
        <div className='livro-cart'>
            <h2>{nome}</h2>
            <p><strong>Título:</strong> {titulo} </p>
            <p><strong>Autor:</strong> {autor} </p>
            <p><strong>Gênero:</strong> {genero} </p>
            <p><strong>Ano de Publicação:</strong> {ano} </p>
        </div>
    )
}


function Func() {
    return (
        <div className="cart-grid">
            <CartaoLivro titulo="A fantástica fábrica de brigadeiro" autor="Daiane dos Santos" genero="terror" ano={1941} />
            <CartaoLivro titulo="Como fazer uma cirurgia caseira de remoção do fêmur" autor="Leonardo Pereira" genero="autoajuda, romance" ano={2007} />
            <CartaoLivro titulo="O príncipe e a rã" autor="Osório Explocinturão Hextech de Almeida Guimarães" genero="darkromance, suspense" ano={1864} />
        </div>
    )
}


export default App
