//Classe Heroi
class Heroi {
    constructor(tipo) {
        this.nome = "Felipao";
        this.idade = 35;
      this.tipo = tipo;
    }

    atacar() {
      let ataque;

      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque desconhecido";
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
