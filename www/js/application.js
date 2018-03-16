var Forma = function () {
	this.id;
	this.nome;
};

var Tempo = function () {
	this.id = null;
	this.nome = null;
};

var Pessoa = function () {
	this.id = null;
	this.nome = null;
};

var Conjugacao = function () {
	this.id;
	this.pessoa = null;
	this.forma = null;
	this.tempo= {};
	this.raiz = null;
	this.terminacao = null;
};

var Verbo = function () {
	this.grupo =null;
	this.auxiliar = null;
	this.conjugacoes= [];
};



Array.prototype.pushUnique = function (item){
    if(this.indexOf(item) == -1) {
        this.push(item);
        return true;
    }
    return false;
}

