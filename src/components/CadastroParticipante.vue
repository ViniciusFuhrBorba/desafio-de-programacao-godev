<template>
  <div class="cadastro-participante">
    <div>
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="placeholders">
      <h2 id="cadastro">Cadastro Participante</h2>
      <div>
        <h4>Nome do Participante</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome do participante"
          v-model="nomeParticipante"
        />
      </div>
      <div>
        <h4>Sobrenome do Participante</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome do participante"
          v-model="sobrenomeParticipante"
        />
      </div>
      <div>
        <h4>Selecione uma Sala para o participante</h4>
        <select v-model="salaSel">
          <option value="0" selected disabled>Selecione uma Sala</option>
          <option
            v-for="salas in allSalas"
            :key="salas.indice"
            :value="salas.id"
          >
            {{ salas.nome }}
          </option>
        </select>
      </div>
      <div>
        <h4>Selecione um Espaço de Café para o Participante</h4>
        <select v-model="cafeSel">
          <option value="0" selected disabled>
            Selecione um Espaço de Café
          </option>
          <option
            v-for="cafes in allCafes"
            :key="cafes.indice"
            :value="cafes.id"
          >
            {{ cafes.nome }}
          </option>
        </select>
      </div>
      <button id="buttonCadastrarParticipante" @click="cadastrarParticipante">
        Cadastrar Participante
      </button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      salaSel: 0,
      nomeParticipante: "",
      sobrenomeParticipante: "",
      cafeSel: 0,
      allSalas: [],
      allCafes: [],
      verificaCampos: false,
      diferencaLotacao: 0,
      lotacao1: 0,
      lotacao2: 0,
      sala2: 0,
      cafe2: 0,
    };
  },
  methods: {
    cadastrarParticipante: function () {
      if (
        this.salaSel == 0 ||
        this.nomeParticipante == "" ||
        this.sobrenomeParticipante == "" ||
        this.cafeSel == 0
      ) {
        this.verificaCampos = true;
        console.log("entrei1");
      } else {
        for (var i = 0; i <= this.allSalas.length; i++) {
          if (i == 0) {
            this.lotacao1 = this.allSalas[i].lotacao;
          }
          if (i == 1) {
            this.lotacao2 = this.allSalas[i].lotacao;
          }
        }
        this.diferencaLotacao = this.lotacao1 - this.lotacao2;
        if (this.diferencaLotacao <= 1) {
          if (this.salaSel == 1) {
            console.log("entrei2");
            for (var sala1 = 1; sala1 <= this.allSalas.length; sala1++) {
              if (sala1.id != this.salaSel && this.sala2 == 0) {
                this.sala2 = this.allSalas[sala1].id;
                console.log(this.sala2);
              }
            }
            if (this.cafeSel == 1) {
              for (var cafe = 1; cafe <= this.allCafes.length; cafe++) {
                if (cafe.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe].id;
                  console.log(this.cafe2);
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.sala2,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
          if (this.salaSel == 1) {
            for (var sala5 = 1; sala5 <= this.allSalas.length; sala5++) {
              if (sala5.id != this.salaSel && this.sala2 == 0) {
                this.sala5 = this.allSalas[sala5].id;
              }
            }
            if (this.cafeSel == 2) {
              for (var cafe5 = 0; cafe5 <= this.allCafes.length; cafe5++) {
                if (cafe5.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe5].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.sala2,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
          if (this.salaSel == 3) {
            for (var sala2 = 0; sala2 <= this.allSalas.length; sala2++) {
              if (sala2.id != this.salaSel && this.sala2 == 0) {
                this.sala2 = this.allSalas[sala2].id;
              }
            }
            if (this.cafeSel == 1) {
              for (var cafe2 = 1; cafe2 <= this.allCafes.length; cafe2++) {
                if (cafe2.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe2].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.sala2,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
          if (this.salaSel == 3) {
            for (var sala6 = 1; sala6 <= this.allSalas.length; sala6++) {
              if (sala6.id != this.salaSel && this.sala2 == 0) {
                this.sala2 = this.allSalas[sala6].id;
              }
            }
            if (this.cafeSel == 2) {
              for (var cafe6 = 0; cafe6 <= this.allCafes.length; cafe6++) {
                if (cafe6.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe6].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.sala2,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
        } else {
          if (this.salaSel == 1) {
            console.log("entrei2");
            if (this.cafeSel == 1) {
              for (var cafe3 = 1; cafe3 <= this.allCafes.length; cafe3++) {
                if (cafe3.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe3].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.salaSel,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
          if (this.salaSel == 1) {
            console.log("entrei2");
            if (this.cafeSel == 2) {
              for (var cafe7 = 0; cafe7 <= this.allCafes.length; cafe7++) {
                if (cafe7.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe7].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.salaSel,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
          if (this.salaSel == 3) {
            console.log("entrei3");
            if (this.cafeSel == 1) {
              console.log("entrei4");
              for (var cafe9 = 1; cafe9 <= this.allCafes.length; cafe9++) {
                if (cafe9.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe9].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.salaSel,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
          if (this.salaSel == 3) {
            console.log("entrei3");
            if (this.cafeSel == 2) {
              console.log("entrei4");
              for (var cafe8 = 1; cafe8 <= this.allCafes.length; cafe8++) {
                if (cafe8.id != this.cafeSel && this.cafe2 == 0) {
                  this.cafe2 = this.allCafes[cafe8].id;
                }
              }
              axios
                .post("http://localhost:55560/api/participante", {
                  nome: this.nomeParticipante,
                  sobrenome: this.sobrenomeParticipante,
                  sala1: this.salaSel,
                  sala2: this.salaSel,
                  cafe1: this.cafeSel,
                  cafe2: this.cafe2,
                })
                .then((resp) => {
                  console.log(resp.data);
                });
            }
          }
        }
      }
    },
  },
  mounted() {
    axios.get("http://localhost:55560/api/salas").then((resp) => {
      (this.allSalas = resp.data), console.log(resp.data);
    });

    axios.get("http://localhost:55560/api/cafes").then((resp) => {
      (this.allCafes = resp.data), console.log(this.allCafes);
    });
  },
  computed: {
    carregarComboSalas: function () {
      return this.allSalas;
    },
    carregarComboCafes: function () {
      return this.allCafes;
    },
  },
};
</script>
  
<style>
.cadastro-participante {
  text-align: center;
  margin-top: 60px;
}
.placeholders {
  width: 500px;
  height: 270px;
  margin: 40px auto;
  border-radius: 50px;
  text-align: center;
  line-height: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
input {
  outline: none;
  border-radius: 10px;
  border: 3px solid;
  height: 25px;
  width: 250px;
}
#cadastro {
  margin-bottom: 50px;
}
#buttonCadastrarParticipante {
  margin-top: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid;
}
</style>