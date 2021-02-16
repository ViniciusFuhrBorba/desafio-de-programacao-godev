<template>
  <div class="cadastro-participante">
    <div>
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="placeholders">
      <h2 id="cadastro">Cadastro Participante</h2>
      <div>
        <h4>Nome do Participante</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome do participante"
        />
      </div>
      <div>
        <h4>Sobrenome do Participante</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome do participante"
        />
      </div>
      <button id="buttonCadastrarParticipante">Cadastrar Participante</button>
    </div>
  </div>
</template>

<script>
export default {


};
</script>

<style>
.cadastro-participante {
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
#buttonCadastrarParticipante{
  margin-top: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid;
}
</style>