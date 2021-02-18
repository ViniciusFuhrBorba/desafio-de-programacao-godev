<template>
  <div class="cadastro-salas-eventos">
    <div>
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="placeholders">
      <h2 id="cadastro">Cadastro Sala de Evento</h2>
      <div>
        <h4>Nome da Sala de Evento</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome da sala de evento"
          v-model="nomeSala"
        />
      </div>
      <div>
        <h4>Lotação da Sala</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira a lotação da sala"
          v-model="lotacaoSala"
        />
      </div>
      <button id="buttonCadastrarParticipante" @click="cadastrarSala">
        Cadastrar Sala de Evento
      </button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      nomeSala: "",
      lotacaoSala: "",
      verificacaoCampos: false,
      allSalas: [],
      verificarQuantidade: false,
    };
  },
  methods: {
    cadastrarSala: function () {
      //verifica os campos
      if (this.nomeSala != "" && this.lotacaoSala != "") {
        //limitacao
        if (this.allSalas.length >= 2) {
          this.verificarQuantidade = true;
          console.log("Quantidade limite de salas excedida");
        } else {
          //acrescenta
          axios
            .post("http://localhost:55560/api/salas", {
              nome: this.nomeSala,
              lotacao: this.lotacaoSala,
            })
            .then((res) => {
              console.log(res.data);
            });
          location.reload();
        }
      } else {
        this.verificacaoCampos = true;
        console.log(this.verificacaoCampos);
      }
    },
  },
  mounted() {
    axios.get("http://localhost:55560/api/salas").then((resp) => {
      (this.allSalas = resp.data), console.log(this.allSalas);
    });
  },
};
</script>

<style>
.cadastro-salas-eventos {
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
  text-align: center;
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