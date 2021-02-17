<template>
  <div>
    <div class="link">
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="pesquisaGeral">
      <div class="pesquisa1">
        <h2 id="pesquisa">Pesquisar Participante</h2>
        <input
          type="text"
          placeholder="Digite o nome do participante"
          v-model="pesquisaParticipante"
        />
      </div>
      <div class="pesquisa2">
        <h2 id="pesquisa">Pesquisar Sala de Evento</h2>
        <input
          type="text"
          placeholder="Digite o nome da sala de evento"
          v-model="pesquisaSalaEvento"
        />
      </div>
      <div class="pesquisa3">
        <h2 id="pesquisa">Pesquisar Espaço Café</h2>
        <input
          type="text"
          placeholder="Digite o nome do café"
          v-model="pesquisaCafe"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesquisaParticipante: "",
      pesquisaSalaEvento: "",
      pesquisaCafe: "",
    };
  },
};
</script>

<style>
.pesquisaGeral {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  margin-top: 30px;
}
.pesquisa1 {
  display: relative;
  margin-left: 0px;
  border: solid black 1px;
  width: 500px;
  height: 700px;
  border-radius: 50px;
}
.pesquisa2 {
  margin-left: 50px;
  border: solid black 1px;
  width: 500px;
  height: 700px;
  border-radius: 50px;
}
.pesquisa3 {
  margin-left: 50px;
  border: solid black 1px;
  width: 500px;
  height: 700px;
  border-radius: 50px;
}
.link {
  text-align: center;
  margin-top: 30px;
}
</style>