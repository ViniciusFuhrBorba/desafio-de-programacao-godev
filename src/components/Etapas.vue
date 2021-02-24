<template>
  <div>
    <div class="link">
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="etapas">
      <div class="etapa1">
        <h3>Etapa 1</h3>
        <h4>Status:</h4>
        <div v-if="this.andamentoEtapa1">
          <p>Em Andamento</p>
        </div>
        <div v-else>
          <p>Finalizado</p>
        </div>
        <button
          @click="finalizarEtapa1"
          class="btn btn-primary"
          v-if="verificacaoBtnEtapa1"
        >
          Finalizar Etapa 1
        </button>
      </div>
      <div class="etapa2">
        <h3>Etapa 2</h3>
        <h4>Status:</h4>
        <div v-if="!this.andamentoEtapa2 && this.andamentoEtapa1">
          <p>Aguarde</p>
        </div>
        <div v-if="this.andamentoEtapa2">
          <p>Em Andamento</p>
        </div>
        <div v-if="!this.andamentoEtapa2 && !this.andamentoEtapa1">
          <p>Finalizado</p>
        </div>
        <button
          @click="finalizarEtapa2"
          v-if="verificacaoBtnEtapa2"
          class="btn btn-primary"
        >
          Finalizar Etapa 2
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      verificacaoBtnEtapa1: true,
      verificacaoBtnEtapa2: false,
      allParticipantes: [],
      allParticipantesSala1: [],
      allParticipantesSala2: [],
      aux: [],
      allEtapas: [],
      andamentoEtapa1: false,
      andamentoEtapa2: false,
    };
  },
  methods: {
    finalizarEtapa1: function () {
      console.log(this.andamentoEtapa1);
      console.log(this.andamentoEtapa2);
      console.log(this.allEtapas);
      if (this.verificacaoBtnEtapa1 == true) {
        for (var i = 0; i < this.allParticipantes.length; i++) {
          if (this.allParticipantes[i].salaEtapa1 == 1) {
            this.allParticipantesSala1.push(this.allParticipantes[i]);
          } else {
            this.allParticipantesSala2.push(this.allParticipantes[i]);
          }
        }
        for (
          var i2 = 0;
          i2 < Math.ceil(this.allParticipantesSala1.length / 2);
          i2++
        ) {
          this.aux.push(this.allParticipantesSala1[i2]);
          this.allParticipantesSala1[i2] = this.allParticipantesSala2[i2];
          this.allParticipantesSala2[i2] = this.aux[i2];
        }
        this.allParticipantesSala1.forEach((el) => {
          if (el.salaEtapa2 == 2) {
            el.salaEtapa2 = 1;
          }
        });
        this.allParticipantesSala2.forEach((el) => {
          if (el.salaEtapa2 == 1) {
            el.salaEtapa2 = 2;
          }
        });
        this.allParticipantes = [];
        this.allParticipantes = this.allParticipantesSala1.concat(
          this.allParticipantesSala2
        );
        this.allEtapas.forEach((el) => {
          if (el.id == 1) {
            el.situacao = 0;
          }
          if (el.id == 2) {
            el.situacao = 1;
          }
        });
        this.allParticipantes.forEach((el) => {
          axios.put("http://localhost:55560/api/participante/" + el.id, {
            salaEtapa1: el.salaEtapa1,
            salaEtapa2: el.salaEtapa2,
          });
        });
        this.allEtapas.forEach((el) => {
          axios.put("http://localhost:55560/api/etapas/" + el.id, {
            situacao: el.situacao,
          });
        });
        this.allParticipantes = [];
        this.allParticipantesSala1 = [];
        this.allParticipantesSala2 = [];
        this.aux = [];
        window.setTimeout(function reload() {
          location.reload();
        }, 2000);
      }
    },
    finalizarEtapa2: function () {
      if (this.verificacaoBtnEtapa2 == true) {
        this.allEtapas.forEach((el) => {
          if (el.id == 1) {
            el.situacao = 0;
          }
          if (el.id == 2) {
            el.situacao = 0;
          }
        });
        this.allParticipantes.forEach((el) => {
          axios.put("http://localhost:55560/api/participante/" + el.id, {
            salaEtapa1: el.salaEtapa1,
            salaEtapa2: el.salaEtapa2,
          });
        });
        this.allEtapas.forEach((el) => {
          axios.put("http://localhost:55560/api/etapas/" + el.id, {
            situacao: el.situacao,
          });
        });
        window.setTimeout(function reload() {
          location.reload();
        }, 2000);
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:55560/api/participante")
      .then((resp) => (this.allParticipantes = resp.data));
    axios.get("http://localhost:55560/api/etapas").then((resp) => {
      this.allEtapas = resp.data;
      for (var i3 = 0; i3 < this.allEtapas.length; i3++) {
        if (this.allEtapas[i3].id == 1) {
          this.andamentoEtapa1 = this.allEtapas[i3].situacao;
          if (this.andamentoEtapa1 == false) {
            this.verificacaoBtnEtapa1 = false;
          }
        }
        if (this.allEtapas[i3].id == 2) {
          this.andamentoEtapa2 = this.allEtapas[i3].situacao;
          if (this.andamentoEtapa2 == true) {
            this.verificacaoBtnEtapa2 = true;
          }
          if (this.andamentoEtapa2 == false) {
            this.verificacaoBtnEtapa2 = false;
          }
        }
      }
    });
  },
};
</script>

<style>
.etapas {
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  margin-top: 30px;
}

.etapa1 {
  display: relative;
  width: 300px;
  height: 200px;
  border-radius: 50px;
}
.etapa2 {
  display: relative;
  margin-left: 20px;
  width: 300px;
  height: 200px;
  border-radius: 50px;
}
</style>