var verbo = new Verbo();

var forma = new Forma();
forma.nome = "Indicatif";

var tempo = new Tempo();
tempo.nome = "Présent";

var pessoa = new Pessoa();
pessoa.nome =  "je";

var conjugacao = new Conjugacao();
conjugacao.pessoa = pessoa;
conjugacao.forma = forma;
conjugacao.tempo= tempo;
conjugacao.raiz= "Abaiss";
conjugacao.terminacao= "e";


verbo.conjugacoes = {conjugacao};
verbo.auxiliar = "Avoir";
verbo.grupo = 1;

console.log(verbo);