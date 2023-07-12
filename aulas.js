//básico sobre declaração de variável e atribuição de valor
var x;
var y;
y = false;//comentários só funcionam após as duas barras
//x = 10;
//x = "preto";
x = y;
console.log(x);


var livro = { //uma variável pode ter seu valor atribuido a objetos com chaves após o = // 
    pagina1: "introdução", //um titulo seguido de : tera em seguida um valor...
    pagina2: "fim do livro",//não esquecer da virgula simples se houver outra propriedade "pagina3"
    pagina3: null //qualquer valor como em uma variável
}
console.log(livro.pagina1 + "< depois >" + livro["pagina2"]) //para acessar esse valor se pode usar variável.objeto ou variável["objeto"](sempre com aspás pro nome do objeto)


var casa = {
    geladeira: {
        ovos:12
    },
    prateleira: {
        livro1: "o pequeno principe",
        livro2: "a dama e o vagabundo"
    }
}
console.log(casa.prateleira.livro1)//funcionou para encontrar objetos em objetos
console.log(casa["prateleira"]["livro2"])//usado da mesma maneira que os arrays


var alunos = ["mufasa", "simbah", "pedro"]; //declarando e atribuindo uma variável como array com valores de strings separados com vírgula
alunos[3] = "heivity"; //declarando uma nova posição de 0 a 3, sendo a 4 posição
console.log(alunos[0]);
console.log(alunos[3]);
alunos[3] = "heiwitty"; //mudando o valor do array da 4 posição
console.log("correção: "+alunos[3]);


var points = [ // Um array com 2 elementos.---
 {x:0, y:0}, // Cada elemento é um objeto.---
 {x:1, y:1}
];
//versão minha:
var points = [{x:0, y:0}, {x:"parabens", y:1}];
console.log(points[1].x)


var data = { // Um objeto com 2 propriedades---
    trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.---
    trial2: [[2,"Expetcular"], [4,5]], // Os elementos dos arrays são arrays.---
}; //nao vo criar minha versão
console.log(data.trial2[0][1]);//negócio dificil