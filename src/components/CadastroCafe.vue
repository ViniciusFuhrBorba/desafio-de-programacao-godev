<template>
  <div class="container">
    <div>
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="elementosCadastroCafe">
      <h3 class="tituloCadastroCafe">Cadastro Espaço Café</h3>
      <div>
        <h4>Nome do Café</h4>
        <div class="input-group mb-4">
          <input
            type="text"
            placeholder="Insira o nome do espaço café"
            v-model="nomeCafe"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div>
        <h4>Lotação do Café</h4>
        <div class="input-group mb-4">
          <input
            type="text"
            placeholder="Insira a lotação do espaço café"
            v-model="lotacaoCafe"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <button
        class="btn btn-primary"
        id="buttonCadastrarCafe"
        @click="cadastrarCafe"
      >
        Cadastrar Espaço Café
      </button>
      <div class="alert alert-success" role="alert" v-if="this.verificaFinal">
        Espaço Café cadastrado com Sucesso!
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
        <p>Quantidade limite de espaços de café foi excedida</p>
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="this.verificaMediaLotacao"
      >
        <h4 class="alert-heading">Erro ao Cadastrar</h4>
        <p>A lotação do espaço de café precisa ser igual ou superior a:</p>
        <p>{{ this.mediaLotacao }}</p>
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="this.verificaQuantidadeSalas"
      >
        <h4 class="alert-heading">Erro ao Cadastrar</h4>
        <p>
          É preciso realizar primeiramento o cadastro de salas antes de realizar
          o cadastro dos espaços de café
        </p>
      </div>
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
      verificarQuantidade: false,
      verificaMediaLotacao: false,
      verificaQuantidadeSalas: false,
      verificaFinal: false,
      allCafes: [],
      allSalas: [],
      lotacaoTotal: 0,
      mediaLotacao: 0,
    };
  },
  methods: {
    cadastrarCafe: function () {
      this.verificarQuantidade = false;
      this.verificaMediaLotacao = false;
      this.verificaFinal = false;
      this.verificacaoCampos = false;
      this.verficaQuantidadeSalas = false;
      if (this.nomeCafe != "" && this.lotacaoCafe != "") {
        if (this.allCafes.length >= 2) {
          this.verificarQuantidade = true;
          this.recarregarPagina();
        } else {
          if (this.allSalas.length < 2) {
            this.verficaQuantidadeSalas = true;
          } else {
            if (this.lotacaoCafe < this.mediaLotacao) {
              this.verificaMediaLotacao = true;
            } else {
              axios
                .post("http://localhost:55560/api/cafes", {
                  nome: this.nomeCafe,
                  lotacao: this.lotacaoCafe,
                })
                .then((res) => {
                  console.log(res.data);
                });
              this.verificaFinal = true;
              this.recarregarPagina();
            }
          }
        }
      } else {
        this.verificacaoCampos = true;
      }
    },
    recarregarPagina: function () {
      setTimeout(function () {
        location.reload();
      }, 4000);
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
.container {
  text-align: center;
  margin-top: 30px;
}
.elementosCadastroCafe {
  height: auto;
  width: 600px;
  text-align: center;
  margin: 40px auto;
}
.tituloCadastroCafe {
  margin-bottom: 30px;
}
#buttonCadastrarCafe {
  margin-bottom: 10px;
}
h3::after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background-color: #98f5ff;
}
</style>