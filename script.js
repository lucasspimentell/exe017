function calcular() {

    var num1 = document.getElementById("txtnum");
    var resu = document.getElementById("tabu");

    if (num1.value == "") {
        alert("insira um número")
    }

    var numero = Number(num1.value);

    var cont = 0

    resu.innerHTML = "";//limpa o conteúdo anterior 

    while (cont<=10) {

        var resultado = numero*cont

        let valor = document.createElement("option");
        valor.text = `${numero}x${cont}=${resultado}`
        valor.value = cont;
        resu.appendChild(valor);
        

        cont++


    }



}