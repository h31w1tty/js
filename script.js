var vazio = document.getElementById("opera");

function avaliar() {
    var operavlr = document.getElementById("opera").value;
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").value;

    if(isNaN(input1) || isNaN(input2)){resultado = "valor inválido"}
    else if(input1 == "" || input2 == "") {resultado ="valor vazio"}
    else{
        switch (operavlr){
            case "":
                resultado = "operação vazia";
            break;
            case "+": 
                
                resultado = parseFloat(input1) + parseFloat(input2);
            break;
            case "-":
                resultado = input1 - input2;
            break;
            case "/":
                resultado = input1 / input2;
            break;
            case "^":
                resultado = input1 ** input2;
            break;
            case "*":
                resultado = input1 * input2;
            break;
            case "?":
                if(input1 < input2){resultado = "menor";}
                else if(input1 > input2){resultado = "maior";}
                else{resultado = "igual";}
            break;
            case "<":
                if(input1 < input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case ">":
                if(input1 > input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case "=":
                if(input1 == input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case "==":
                if(input1 == input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case "!=":
                if(input1 != input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            default:
                resultado = "operação inválida"
            break;
        }
    }
    

    console.log("operação: " + operavlr);
    console.log("num 1: "+ input1);
    console.log("num 2: " + input2);
    document.getElementById("saida").value = resultado;
}
function negrito(){
    var textoBox = document.getElementById("userText");
    if(textoBox.style.fontWeight == 'bolder');
    //continue
}

//mudança de cor do fundo
var fundoCor = document.getElementById("bgUserText");
var coresPadrao = ['#5b88ff', '#5bffd7', '#55a13a', '#c2c93c', '#b9801c', '#d91616', '#c34b8f', '#8038af', '#502fbb'];
var contadorCor = 3;
function up(){
    if(contadorCor < 8){contadorCor++}
    fundoCor.style.backgroundColor = coresPadrao[contadorCor];
}
function down(){
    if(contadorCor > 0){contadorCor--}
    fundoCor.style.backgroundColor = coresPadrao[contadorCor];
}
