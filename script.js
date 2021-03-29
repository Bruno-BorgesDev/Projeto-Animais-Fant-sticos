/*Node
Toda tag html é representada pelo objeto Element e por isso herda os seus
métodos e propriedades.Element é um tipo de objeto Node.
*/

/*const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o ID
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
//ativa a função callback ao click no titulo

*/

const h1Selecionado = document.querySelector('h1');

//addEventListener é utilizado para adicionar um evento

h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em', h1Selecionado.innerText);
})

//Ou...

function callbackh1() {
    console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1)
