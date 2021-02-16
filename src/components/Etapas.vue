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
export default {
  data() {
    return {
      verificacaoBtnEtapa1: true,
      verificacaoBtnEtapa2: false,
    };
  },
  methods: {
    finalizarEtapa1: function () {
      if (this.verificacaoBtnEtapa1 == true) {
        this.verificacaoBtnEtapa1 = false;
        this.verificacaoBtnEtapa2 = true;
        //pegar o vetor de todos os alunos das duas salas
        //ver o tamanho
        //dividir o tamanho pela metade
        //pecorrer o vetor de cada sala ate a metade
        //preencher outro vetor com essa metade
        //excluir a metade do vetor principal das duas salas
        //acrescentar nos vetores principais a metade da outra sala
      }
    },
    finalizarEtapa2: function () {
      if (this.verificacaoBtnEtapa2 == true) {
        this.verificacaoBtnEtapa2 = false;
      }
    },
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