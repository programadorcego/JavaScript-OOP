class Pessoa {
	#nome;
	
	constructor(nome){
		this.#nome = nome;
	}
	
	cumprimentar()
	{
		console.log(`Olá, meu nome é ${this.#nome}`);
	}
}

const pessoa = new Pessoa("Willian");
pessoa.cumprimentar();