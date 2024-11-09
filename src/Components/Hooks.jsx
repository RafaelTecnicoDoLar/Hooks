function Hooks() {
    let n1 = 22;
    let n2 = 13;
    let resultadosoma = n1 + n2;
    let resultadosubtracao = n1 - n2;
    let resultadomultiplicacao = n1 * n2;
    let resultadodivisao = n1 / n2;
    let resultadomodulo = n1 % n2;
    let resultadopotencia = n1 ** n2;

    return (
        <div>
            <p>
                O resultado da soma de {n1} + {n2} é = {resultadosoma}
            </p>

            <p>
                O resultado da subtração de {n1} - {n2} é = {resultadosubtracao}
            </p>

            <p>
                O resultado da multiplicação de {n1} * {n2} é = {resultadomultiplicacao}
            </p>

            <p>
                O resultado da divisão de {n1} / {n2} é = {resultadodivisao}
            </p>

            <p>
                O resultado do modulo de {n1} % {n2} é = {resultadomodulo}
            </p>

            <p>
                O resultado da potencia de {n1} ** {n2} é = {resultadopotencia}
            </p>

        </div>

    );
}
export default Hooks;