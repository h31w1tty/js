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

//mudança pra italico e vise versa
function italico(){
    var textoBox = document.getElementById("userText");
    if(textoBox.style.fontStyle != 'italic'){
        textoBox.style.fontStyle = 'italic'
    }
    else{textoBox.style.fontStyle = 'normal'}
}

//mudança de normal pra negrito, e vise versa
function negrito(){
    var textoBox = document.getElementById("userText");
    if(textoBox.style.fontWeight != 'bolder'){
        textoBox.style.fontWeight = 'bolder';
    }
    else{textoBox.style.fontWeight = 'normal'}
}

//limpar
function limpar(){
    var textoBox = document.getElementById("userText");
    textoBox.value = 'Seu Texto';
    textoBox.style.fontWeight = 'normal';
    textoBox.style.fontStyle = 'normal';
    textoBox.style.backgroundColor = 'white';
    textoBox.style.color = 'black';
}

//mudança de cor do fundo
var checkFundo = document.getElementById("checkBg");
var checkTxt = document.getElementById("checkTxt");
var fundoCor = document.getElementById("userText");
var corTexto = ['green', 'red', 'blue', 'yellow', 'black', 'white'];
var contadorCorTxt = 4;
var coresPadrao = ['#5b88ff', '#5bffd7', '#55a13a', '#c2c93c', '#b9801c', '#d91616', '#c34b8f', '#8038af', '#502fbb', 'black', 'white'];
var contadorCor = 10;
function up(){
    if(checkFundo.checked == true){
        if(contadorCor < 10){contadorCor++}
        else if(contadorCor == 10){contadorCor = 0}
        fundoCor.style.backgroundColor = coresPadrao[contadorCor];
    }
    else if(checkTxt.checked == true){
        if(contadorCorTxt < 5){contadorCorTxt++}
        else if(contadorCorTxt == 5){contadorCorTxt = 0}
        fundoCor.style.color = corTexto[contadorCorTxt]
    }
}
function down(){
    if(checkFundo.checked == true){
        if(contadorCor > 0){contadorCor--}
        else if(contadorCor == 0){contadorCor = 10}
        fundoCor.style.backgroundColor = coresPadrao[contadorCor];
    }
    else if(checkTxt.checked == true){
        if(contadorCorTxt > 0){contadorCorTxt--}
        else if(contadorCorTxt == 0){contadorCorTxt = 5}
        fundoCor.style.color = corTexto[contadorCorTxt]
    }
}