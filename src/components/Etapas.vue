<template>
  <div>
    <div class="etapas">
      <div class="etapa">
        <h3>Etapa 1</h3>
        <h4>Status:</h4>
        <p>Em andamento</p>
        <button
          @click="finalizarEtapa1"
          class="button"
          v-if="verificacaoBtnEtapa1"
        >
          Finalizar Etapa 1
        </button>
      </div>
      <div class="etapa">
        <h3>Etapa 2</h3>
        <h4>Status:</h4>
        <p>Aguarde</p>
        <button
          @click="finalizarEtapa2"
          class="button"
          v-if="verificacaoBtnEtapa2"
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
    };
  },
  methods: {
    finalizarEtapa1: function () {
      if (this.verificacaoBtnEtapa1 == true) {
        for (var i = 0; i < this.allParticipantes.length; i++) {
          if (this.allParticipantes[i].sala1 == 1) {
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
          if (el.sala2 == 2) {
            el.sala2 = 1;
          }
        });
        this.allParticipantesSala2.forEach((el) => {
          if (el.sala2 == 1) {
            el.sala2 = 2;
          }
        });
        this.allParticipantes = [];
        this.allParticipantes = this.allParticipantesSala1.concat(
          this.allParticipantesSala2
        );
        this.allParticipantes.forEach((el) => {
          axios.put("http://localhost:55560/api/participante/" + el.id, {
            sala1: el.sala1,
            sala2: el.sala2,
          });
        });
        this.allParticipantes = [];
        this.allParticipantesSala1 = [];
        this.allParticipantesSala2 = [];
        this.aux = [];
        this.verificacaoBtnEtapa1 = false;
        this.verificacaoBtnEtapa2 = true;
      }
    },
    finalizarEtapa2: function () {
      if (this.verificacaoBtnEtapa2 == true) {
        this.verificacaoBtnEtapa2 = false;
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:55560/api/participante")
      .then((resp) => (this.allParticipantes = resp.data));
  },
};
</script>

<style>
.etapas {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  margin-top: 30px;
}

.etapa {
  display: relative;
  margin-left: 0px;
  border: solid black 1px;
  width: 300px;
  height: 200px;
  border-radius: 50px;
}
</style>