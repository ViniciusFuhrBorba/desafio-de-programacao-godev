<template>
  <div class="cadastro-cafe">
    <div>
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="placeholders">
      <h2 id="cadastro">Cadastro Espaço Café</h2>
      <div>
        <h4>Nome do Café</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome do espaço café"
          v-model="nomeCafe"
        />
      </div>
      <div>
        <h4>Lotação do Café</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira a lotação do espaço café"
          v-model="lotacaoCafe"
        />
      </div>
      <button id="buttonCadastrarParticipante" @click="cadastrarCafe">
        Cadastrar Espaço Café
      </button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      nomeCafe: "",
      lotacaoCafe: "",
      verificacaoCampos: false,
      allCafes: [],
      verificarQuantidade: false,
      allSalas: [],
      lotacaoTotal: 0,
      mediaLotacao: 0,
    };
  },
  methods: {
    cadastrarCafe: function () {
      if (this.nomeCafe != "" && this.lotacaoCafe != "") {
        if (this.allCafes.length >= 2) {
          this.verificarQuantidade = true;
          console.log("Quantidade limite de espaços de café excedida");
        } else {
          if (this.allSalas.length < 2) {
            console.log(
              "É preciso realizar primeiramento o cadastro de salas antes de realizar o cadastro dos espaços de café"
            );
          } else {
            if (this.lotacaoCafe < this.mediaLotacao) {
              console.log(
                `A lotação da sala deve ser igual ou superior a ${this.mediaLotacao}`
              );
            } else {
              axios
                .post("http://localhost:55560/api/cafes", {
                  nome: this.nomeCafe,
                  lotacao: this.lotacaoCafe,
                })
                .then((res) => {
                  console.log(res.data);
                });
              location.reload();
            }
          }
        }
      } else {
        this.verificacaoCampos = true;
        console.log(this.verificacaoCampos);
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:55560/api/cafes")
      .then((resp) => (this.allCafes = resp.data));
    axios
      .get("http://localhost:55560/api/salas")
      .then((resp) => (this.allSalas = resp.data));
  },
  computed: {
    tirarMediaLotacao: function () {
      var lotacaoTotal = 0;
      var mediaLotacao = 0;
      var mediaLotacaoArredondada = 0;
      for (var i = 0; i < this.allSalas.length; i++) {
        lotacaoTotal += this.allSalas[i].lotacao;
      }
      mediaLotacao = lotacaoTotal / 2;
      mediaLotacaoArredondada = Math.round(mediaLotacao);
      return mediaLotacaoArredondada;
    },
  },
  watch: {
    tirarMediaLotacao: {
      deep: true,
      handler: function (newVal) {
        this.mediaLotacao = newVal;
      },
    },
  },
};
</script>

<style>
.cadastro-cafe {
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