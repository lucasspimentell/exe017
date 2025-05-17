function calcular() {

    var num1 = document.getElementById("txtnum");
    var resu = document.getElementById("tabu");

    if (num1.value == "") {
        alert("insira um número")
    }

    var numero = Number(num1.value);

    var cont = 1

    resu.innerHTML = "";//limpa o conteúdo anterior 

    while (cont<=10) {

        var resultado = numero*cont
//adicionando elementos dentro do select list do html via java script

        let valor = document.createElement("option");

        valor.text = `${numero}x${cont}=${resultado}`;

        valor.value = `tab${cont}`;//para saber qual foi o item selecionado (tem mais sentido para outras linguages )

        resu.appendChild(valor); //adicionar um elemento filho que vai se valor
        

        cont++


    }



}