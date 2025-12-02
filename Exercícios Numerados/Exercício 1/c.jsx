export default function MyApp() {
    return (
        <div>
            <DataHora />
        </div>
    );
}


function DataHora() {
    const agora = new Date();
    const diasSemana = [
        "domingo",
        "segunda",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
    ];
    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ];
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
    return (
        <p>
            Hoje é dia {dia} do mês {mes} do ano de {ano}
        </p>
    );
}
