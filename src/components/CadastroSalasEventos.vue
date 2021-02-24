<template>
  <div class="container">
    <div>
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="elementosCadastroSala">
      <h3 class="tituloCadastroSala">Cadastro Sala de Evento</h3>
      <div>
        <h4>Nome da Sala de Evento</h4>
        <div class="input-group mb-4">
          <input
            type="text"
            placeholder="Insira o nome da sala de evento"
            v-model="nomeSala"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div>
        <h4>Lotação da Sala</h4>
        <div class="input-group mb-3">
          <input
            type="text"
            placeholder="Insira a lotação da sala"
            v-model="lotacaoSala"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <button
        id="buttonCadastrarSala"
        class="btn btn-primary"
        @click="cadastrarSala"
      >
        Cadastrar Sala de Evento
      </button>
      <div class="alert alert-success" role="alert" v-if="this.verificaFinal">
        Sala de Evento cadastrada com Sucesso!
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="this.verificacaoCampos"
      >
        Por favor preencha todos os campos acima
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="this.verificarQuantidade"
      >
        <h4 class="alert-heading">Erro ao Cadastrar</h4>
        <p>Quantidade limite de salas excedida</p>
      </div>
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
      verificaFinal: false,
    };
  },
  methods: {
    cadastrarSala: function () {
      this.verificacaoCampos = false;
      this.verificarQuantidade = false;
      this.verificaFinal = false;
      if (this.nomeSala == "" && this.lotacaoSala == "") {
        this.verificacaoCampos = true;
      } else {
        if (this.allSalas.length >= 2) {
          this.verificarQuantidade = true;
          this.recarregarPagina();
        } else {
          axios
            .post("http://localhost:55560/api/salas", {
              nome: this.nomeSala,
              lotacao: this.lotacaoSala,
            })
            .then((res) => {
              console.log(res.data);
              location.reload();
            });
          this.verificaFinal = true;
        }
      }
    },
    recarregarPagina: function () {
      setTimeout(function () {
        location.reload();
      }, 4000);
    },
  },
  mounted() {
    axios.get("http://localhost:55560/api/salas").then((resp) => {
      this.allSalas = resp.data;
    });
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 30px;
}
.elementosCadastroSala {
  height: auto;
  width: 600px;
  text-align: center;
  margin: 40px auto;
}
.tituloCadastroSala {
  margin-bottom: 30px;
}
#buttonCadastrarSala {
  margin-bottom: 10px;
}
h3:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background-color: #98f5ff;
}
</style>