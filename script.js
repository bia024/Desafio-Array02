//01 - Crie um array que receba 5 itens e exiba no console.

let materiais = ['Mochila', 'Estojo,', 'Borracha', 'Garrafinha', 'Caneta'];
console.log(materiais);

//02 - Utilize um método para adicionar um nome ao inicio do array.

let adicionar = materiais.unshift('Apontador');

//03 - Utilize um método para remover o último nome do array.

let remover = materiais.pop('Caneta');

//04 - Utilize um método para adicionar dois nomes ao fim do array.
let somar = materiais.push('Tesoura', 'Cola')

//05 - Utilize um método para remover o primeiro nome do array.

let primeiro = materiais.shift('Apontador');

//06 - Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0
})
console.log(numbers);

//07 - Crie um objeto que receba ao menos três propriedades sobre você.

const hobbies = [ "Aprender idiomas", "Tocar instrumentos", "Aprender coisas novas"]
console.log(hobbies);

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.

hobbies.splice(1, 0, "Comer");
console.log(hobbies);

//09 - Remova uma propriedade desse objeto.

hobbies.splice(1,1);
console.log(hobbies);

//10 - Mostre no console todas as propriedades desse objeto.

hobbies.splice (1, 0, "Comer");
console.log(hobbies);

//11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//a) Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//b) Na propriedade amigos, adicione ao menos 4 itens.

/*const cadastro = ["nome", "idade", "telefone","amigos", "endereço"];
console.log(cadastro);*/

const cadastro = [
{
    nome: "Lucas",
    idade: 16,
    telefone: 40028922,
},
{
    nome: "Paulo",
    idade: 15,
    telefone: 98743-4245,
},
{
    nome: "Joana",
    idade: 24,
    telefone: 98325-8233,
},
{
    nome: "Patricia",
    idade: 25,
    telefone: 4556-7283,
},
{
    nome: "Isaac",
    idade: 27,
    telefone: 4372-7439,
},
/*{
    amigos: ["Maurício", "Clara","Jorge"],
}*/
]
console.log(cadastro);

//b) 

//amigos.splice()
/*amigos.push("Beatriz");
console.log(amigos);*/
/*cadastro.amigos.push(Yago, Lisandra, Oscar, William);
console.log(cadastro(amigos));*/

//12 - Mostre no console o nome de um amigo de cada lista.