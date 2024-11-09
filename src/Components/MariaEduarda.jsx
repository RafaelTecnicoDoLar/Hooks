import { useState } from "react";

function MariaEduarda() {

    const [numero1, setNumero1] = useState(1)
    const [numero2, setNumero2] = useState(1)

    const [conta, setConta] = useState(0)
    const [operador, setOperador] = useState()

    let n1;
    n1 = 1;

    let n2;
    n2 = 1;

    let Operador;

    function botaoNumero1() {
        setNumero1(n1 + numero1);
    }

    function botaoNumero2() {
        setNumero2(n2 + numero2);
    }

    function botaoAdicao() {
        setConta(numero1 + numero2);
        setOperador("+");
       
    }

    function botaoSubtracao() {
        setConta(numero1 - numero2);
        setOperador("-");
        
    }

    function botaoMultiplicacao() {
        setConta(numero1 * numero2);
        setOperador("*");
        
    }

    function botaoDivisao() {
        setConta(numero1 / numero2);
        setOperador("/");

    }

    return (
        <>
            <p>
                O resultado de {numero1} {operador} {numero2} = {conta}

            </p>
            <button className="Botao" onClick={botaoNumero1}>   N1 + 1 </button>
            <button className="Botao" onClick={botaoNumero2}>   N2 + 2 </button>

            <button className="Botao" onClick={botaoAdicao}>        +   </button>
            <button className="Botao" onClick={botaoSubtracao}>     -   </button>
            <button className="Botao" onClick={botaoMultiplicacao}> *   </button>
            <button className="Botao" onClick={botaoDivisao}>       /   </button>


        </>
    )
}
export default MariaEduarda