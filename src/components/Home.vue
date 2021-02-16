<template>
  <div>
    <div class="home">
      <a href="/cadastroParticipante" class="itens-header"
        >Cadastrar Participante</a
      >
      <a href="/cadastroSalasEvento" class="itens-header"
        >Cadastrar Salas de Evento</a
      >
      <a href="/cadastroCafe" class="itens-header"
        >Cadastrar Espaço Café</a
      >
      <a href="/pesquisaGeral" class="itens-header"
        >Pesquisar</a
      >
      <a href="/etapas" class="itens-header"
        >Etapas</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body{
  margin: 0;
  width: 100% !important;
  height: 100% !important;
}
.home {
  display: flex;
  height: 60px;
  width: auto;
  background-color: white;
  align-items: center;
  justify-content: center;
}

.itens-header {
  padding: 20px;
  text-decoration: none;
}
</style>