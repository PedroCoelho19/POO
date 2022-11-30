class Filme {
  constructor(name, ano, genero, diretor,  duracao) {
    this.name = name;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.duracao = duracao;
  }

  Reproduzir() {
    console.log("reproduzindo");
  }
  Pausar() {
    console.log("reproduxindo");
  }
  Avancar() {
    console.log("reproduxindo");
  }
  Fechar() {
    console.log("reproduxindo");
  }

  Ficha(){
    console.log('Titulo: ' + this.name);
    console.log('Ano de Lançamento: ' + this.ano);
    console.log('Gênero: ' + this.genero);
  }
}


let vingadores = new Filme('Vingadores', 2022, 'Ação', 'Pedro', '2h');
vingadores.Ficha()