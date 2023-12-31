var vazio = document.getElementById("opera");

function avaliar() {
    var operavlr = document.getElementById("opera").value;
    var input1 = document.getElementById("valor1").value;
    var input2 = document.getElementById("valor2").value;
    var msgErro = document.getElementById("erro");
    msgErro.style.display = 'none'

    if(isNaN(input1) || isNaN(input2)){
        resultado = "**erro01**"
        msgErro.style.display = 'grid'
        msgErro.textContent = 'Use apenas numeros nos valores!'
    }
    else if(input1 == "" || input2 == "") {
        resultado ="**erro02**"
        msgErro.style.display = 'grid'
        msgErro.textContent = 'Defina dois valores!'

    }
    else{
        switch (operavlr){
            case "+", "": 
                operavlr = "somado a";
                resultado = parseFloat(input1) + parseFloat(input2);
            break;
            case "-":
                operavlr = "subtraido a";
                resultado = input1 - input2;
            break;
            case "/":
                operavlr = "dividido por";
                resultado = input1 / input2;
            break;
            case "^", "**":
                operavlr = "elevado a";
                resultado = input1 ** input2;
            break;
            case "*":
                operavlr = "multiplicado por";
                resultado = input1 * input2;
            break;
            case "?":
                operavlr = "comparado a";
                if(input1 < input2){resultado = "menor";}
                else if(input1 > input2){resultado = "maior";}
                else{resultado = "Igual";}
            break;
            case "<":
                operavlr = "é menor que";
                if(input1 < input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case ">":
                operavlr = "é maior que";
                if(input1 > input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case "=":
                operavlr = "é igual a";
                if(input1 == input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case "==":
                operavlr = "é igual a";
                if(input1 == input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            case "!=":
                if(input1 != input2){resultado = "Verdadeiro"}
                else{resultado = "Falso"}
            break;
            default:
                resultado = "**erro03**"
                msgErro.style.display = 'grid'
                msgErro.textContent = 'Operação inexistente!'
            break;
        }
    }
    console.log(`conta: ${input1} ${operavlr} ${input2} = ${resultado}`)
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

//uper and lower case
var maiusculo = document.getElementById("maiusculo")
var minusculo = document.getElementById("minusculo")
var texto = document.getElementById('userText')
maiusculo.addEventListener('click', upercase)
minusculo.addEventListener('click', lowercase)

function upercase(){
    texto.value = texto.value.toUpperCase()
}
function lowercase(){
    texto.value = texto.value.toLowerCase()
}

//colar area de transferencia
function colar() {
    navigator.clipboard.readText()
      .then(bagui => {
        texto.value = bagui
      })
      .catch(erro => {
        texto.value = 'erro de permissão'
      });
  }