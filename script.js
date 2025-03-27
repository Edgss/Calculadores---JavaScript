function calcularIMC(){
    peso = Number(document.getElementById("peso").value)
    altura = Number(document.getElementById("altura").value)
    resultadoIMC = peso / (altura * altura)

    if(isNaN(resultadoIMC) || resultadoIMC <=0){
        document.getElementById("resultadoIMC").textContent = "Resultado inválido";
    }

    else if(resultadoIMC <= 18.5){document.getElementById("resultadoIMC").textContent = `${resultado.toFixed(2)} - Magreza`}

    else if(resultadoIMC  >= 25 && resultadoIMC <= 29.9){document.getElementById("resultadoIMC").textContent = `${resultado.toFixed(2)} - Sobrepeso`}

    else if(resultadoIMC >= 30 && resultadoIMC <= 39.9){document.getElementById("resultadoIMC").textContent = `${resultado.toFixed(2)} - Obesidade`}

    else if(resultadoIMC >= 40){document.getElementById("resultadoIMC").textContent = `${resultado.toFixed(2)} - Obesidade grave`}

    else{document.getElementById("resultadoIMC").textContent = `${resultado.toFixed(2)} - Normal`}
}

function calcularDesconto(){
    desconto = Number(document.getElementById("desconto").value)
    produto = Number(document.getElementById("valor").value)
    resultadoDesconto = produto * (desconto / 100)
    resultadoTotal = produto - resultadoDesconto

    document.getElementById("resultadoDesconto").textContent = `Desconto: ${resultadoDesconto.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`

    document.getElementById("resultadoTotal").textContent = `Valor final: ${resultadoTotal.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`
}

function calcularMedia(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    n3 = Number(document.getElementById("n3").value)
    n4 = Number(document.getElementById("n4").value)
    resultadoMedia = (n1+n2+n3+n4) / 4

    if(isNaN(resultadoMedia) || resultadoMedia < 0){
        document.getElementById("resultadoMedia").textContent= "Número invalido"
    }
    else if(resultadoMedia >= 6){
        document.getElementById("resultadoMedia").textContent = `${resultadoMedia.toFixed(2)} Aprovado ✅`
    }
    else if(resultadoMedia >=5 && resultadoMedia < 6){
        document.getElementById("resultadoMedia").textContent = ` ${resultadoMedia.toFixed(2)} Recuperação ⚠️`
    }
    else{
        document.getElementById("resultadoMedia").textContent = `${resultadoMedia.toFixed(2)} Reprovado ❌`
    }
}

