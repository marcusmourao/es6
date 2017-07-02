/*
*** forEach ***
*/
var	frutas	=	['abacaxi',	'maça',	'uva'];
frutas.forEach(function(n)	{
		console.log(n);
});

var	nomes	=	['maria',	'josé',	'joão'];
function	imprimeNome(nome)	{
	console.log(nome);
}
nomes.forEach(imprimeNome);

/* --------------------------- */

/*
*** map ***
*/

var	numeros	=	[1,2,3];
var	dobro	=	numeros.map(function(numero)	{
		return	numero	*	2;
});
console.log(numeros);	//	[1,2,3]
console.log(dobro);	//	[2,4,6]

/* --------------------------- */

var	alunos	=	[
		{nome:'joão',	idade:15},
		{nome:'josé',	idade:18},
		{nome:'maria',	idade:20}
];
var	alunosDeMaior	=	alunos.filter(function(aluno)	{
		return	aluno.idade	>=	18;
});
console.log(alunosDeMaior);
//	[{nome:'josé',	idade:18},	{nome:'maria',	idade:20}]

/* --------------------------- */

/* -------------Filter-------------- */

var	alunos	=	[
		{nome:'joão'},
		{nome:'josé'},
		{nome:'maria'}
];

var	aluno	=	alunos.find(function(aluno)	{
		return	aluno.nome	===	'josé';
});
console.log(aluno);	//	{"nome":"josé"}

/* 
Caso	na	lista	existissem	dois	alunos	com	o	nome	“josé”,	somente
o	primeiro	seria	retornado.	Para	contornar	este	caso,	precisaríamos
usar	um	critério	de	busca	mais	específico.
*/

/* --------------------------- */

/*Every*/

var	alunos	=	[
		{nome:'joão',	idade:	18},
		{nome:'maria',	idade:	20},
		{nome:'pedro',	idade:	24}
];
var	todosAlunosDeMaior	=	alunos.every(function(aluno){
		return	aluno.idade	>=	18;		
});
console.log(todosAlunosDeMaior);	//	true

/* --------------------------- */

/* --------------Some------------- */
var	pesoDasMalas	=	[12,32,21,29];
var	temMalaAcimaDoPeso	=	pesoDasMalas.some(function(pesoDaMala)	{
		return	pesoDaMala	>	30;
});
console.log(temMalaAcimaDoPeso);	//	true

/* --------------------------- */

/* -------------Reduce-------------- */

var	numeros	=	[1,2,3,4,5];
var	soma	=	0;
soma	=	numeros.reduce(function(soma,numero){
		return	soma	+	numero;
},	0)
console.log(soma);	//	15


var	alunos	=	[
		{nome:'joão',	idade:	10},
		{nome:'josé',	idade:	20},
		{nome:'marcos',	idade:	30}
];
var	nomes	=	alunos.reduce(function(arrayNomes,	aluno)	{
		arrayNomes.push(aluno.nome);
		return	arrayNomes;
},	[]);
console.log(nomes);	//	['joão',	'josé',	'marcos']

/* --------------------------- */
