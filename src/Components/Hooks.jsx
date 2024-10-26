function Hooks() {
    let n1 = 17;
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
                O resultado da soma de 17 + 13 é = {resultadosoma}
            </p>

            <p>
                O resultado da subtração de 17 - 13 é = {resultadosubtracao}
            </p>

            <p>
                O resultado da multiplicação de 17 * 13 é = {resultadomultiplicacao}
            </p>

            <p>
                O resultado da divisão de 17 / 13 é = {resultadodivisao}
            </p>

            <p>
                O resultado do modulo de 17 % 13 é = {resultadomodulo}
            </p>

            <p>
                O resultado da potencia de 17 ** 13 é = {resultadopotencia}
            </p>

        </div>

    );
}
export default Hooks;