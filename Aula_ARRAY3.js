const frutas = ['Maçã', 'Melancia','Abacaxi', 'Mamão','Pêssego',];

frutas.forEach(function(item, indice) {//pega cada fruta e seu indice correspondente, quanto mais frutas,mais indices. Reparem que aqui temos uma função que foi criada de modo a exibir cada fruta para cada indice correspondente.
console.log(indice,item);//exibe indice e fruta.
});
