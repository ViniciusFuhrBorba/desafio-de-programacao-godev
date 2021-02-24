<template>
  <div class="container">
    <div class="home">
      <a href="/cadastroParticipante" class="itens-header"
        >Cadastrar Participante</a
      >
      <a href="/cadastroSalasEvento" class="itens-header"
        >Cadastrar Salas de Evento</a
      >
      <a href="/cadastroCafe" class="itens-header">Cadastrar Espaço Café</a>
      <a href="/pesquisaGeral" class="itens-header">Pesquisar</a>
      <a href="/etapas" class="itens-header">Etapas</a>
    </div>
    <div class="title">
      <h1>Seja Bem-Vindo ao Controle do Treinamento</h1>
      <p>Todas as informações necessários para conseguir utilizar esse sistema</p>
      <p>estão no arquivo README.md nesse repositório do GitHub</p>
      <a href="https://github.com/Esk-Borba/desafio-programacao-godev-final">Repositório</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  width: 100% !important;
  height: 100% !important;
}
.container {
  text-align: center;
  margin-top: 30px;
}
.home {
  height: 60px;
  width: auto;
  background-color: white; 
}
.itens-header {
  padding: 20px;
  text-decoration: none;
}
.title{
  margin-top: 330px;
}
</style>