class Pessoa {
	#nome;
	
	get nome(){
		return this.#nome;
	}
	
	set nome(valor){
		this.#nome = valor;
	}
}

let pessoa = new Pessoa;
pessoa.nome = "Willian";
console.log(pessoa.nome);