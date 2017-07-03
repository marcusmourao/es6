class	Carro	{
		constructor(modelo,	chassi,	qtdPortas){
				this.modelo	=	modelo;
				this.chassi	=	chassi;
				this.qtdPortas	=	qtdPortas;
		}
		andar()	{
				console.log("vrum	vrum");
		}
}

class	Sonix	extends	Carro	{
		abrirTetoSolar()	{
				console.log('abrindo	teto	solar');
		}
}

class	Casa	{
		static	abrirPorta(){
				console.log('abrindo	porta');
		}
}
Casa.abrirPorta();	//	abrindo	porta

const	propriedades	=	new	WeakMap();
class	VideoGame	{
				constructor(nome,	controles,	saida,	midia)	{
								propriedades.set(this,	{
										nome,	controles,	saida,	midia
								});
				}
				recuperaPropriedade(propriedade)	{
						return	propriedades.get(this)[propriedade];		
				}
}

const	caixa360	=	new	VideoGame('caixa360',	4,	'hdmi',	'dvd');
console.log(caixa360.recuperaPropriedade('nome'));	//	caixa360

export default Casa
