let button = document.getElementById("btn_calcular");
button.addEventListener("click", function(){
    
    
    let base = parseInt(document.getElementById("valor_base").value);

    let transporte = parseInt(document.getElementById("valor_transporte").value);

    let alimentacao = parseInt(document.getElementById("valor_alimentacao").value);

    let receitas = document.getElementById("valor_receita");

    function calcular_receitas(){
        receitas.value = base + transporte + alimentacao;
    }

    calcular_receitas();
    

    let automovel = parseInt(document.getElementById("valor_automovel").value);

    let faltas = parseInt(document.getElementById("faltas").value);

    let descontos = document.getElementById("valor_descontos");

    function calcular_despesas(){
        descontos.value = automovel + faltas;
    }

    calcular_despesas();

    let total = document.getElementById("valor_total");

    function calcular_total() {
        total.value = receitas.value - descontos.value;
    }

    calcular_total();

    salvar_financas(
    {
        base: base,
        transporte: transporte,
        alimentacao: alimentacao,
        receitas: receitas.value,
        automovel: automovel,
        faltas: faltas,
        descontos: descontos.value,
        total: total.value
    })

})

function salvar_financas(data)
{
    localStorage.setItem("finanças", JSON.stringify(data));
}

function clicarBotao()
{
   document.getElementById("btn_calcular").click();
}
