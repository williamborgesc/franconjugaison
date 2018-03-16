var Verbo = function () {
	this.grupo;
	this.auxiliar;
};


var Forma = function () {
	this.id;
	this.nome;
};

var Tempo = function () {
	this.id = null;
	this.nome' = null;
};

var Tempo = function () {
	this.id = null;
	this.nome' = null;
};

var Sessao = function (id) {
	this.TEMPO_PADRAO_INICIO = (60 * 60 * 1000); //1 hora
	this.id;
	this.inicio = new Date();
	this.sessoes= {};
	this.qrCard = null;
	this.fim = new Date(this.inicio.getTime() + this.TEMPO_PADRAO_INICIO);

	this.getTempoRestante = function() {
		alert("Não implementado");
	};

	this.aumentarTempo = function(quantidadeTempo) {
		alert("Não implementado");
	};

	this.listar = function() {
		alert("Não implementado");
	};

	this.adicionar = function(sessao) {
		alert("Não implementado");
	};

};

var Vaga = function () {
	this.id;
	this.rua;
	this.sessao;
};

Array.prototype.pushUnique = function (item){
    if(this.indexOf(item) == -1) {
        this.push(item);
        return true;
    }
    return false;
}