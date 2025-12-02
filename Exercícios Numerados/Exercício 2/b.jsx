export default function MyApp() {
    let nome = prompt("Qual é o seu nome?");
    return (
        <div>
            <Func username={nome} />
        </div>
    );
}


function Func({ username }) {
    return <h1> Bem vindo de volta, {username} </h1>;
}
