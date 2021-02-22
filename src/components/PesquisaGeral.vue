<template>
  <div>
    <div class="link">
      <a class="itens-header" href="/">Voltar</a>
    </div>
    <div class="pesquisaGeral">
      <div class="pesquisa1">
        <h2 id="pesquisa">Pesquisar Participante</h2>
        <div class="input-group mb-3">
          <input
            type="text"
            placeholder="Digite o nome do participante"
            v-model="pesquisaParticipante"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <table class="content-table">
          <thead>
            <tr>
              <th>Nome do Participante</th>
              <th>Sobrenome do Participante</th>
              <th>Sala Etapa 1</th>
              <th>Sala Etapa 2</th>
              <th>Espaço Café Etapa 1</th>
              <th>Espaço Café Etapa 2</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="participantes in filterParticipantes"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeSala1 }}</td>
              <td>{{ participantes.nomeSala2 }}</td>
              <td>{{ participantes.nomeCafe1 }}</td>
              <td>{{ participantes.nomeCafe2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pesquisa2">
        <h2 id="pesquisa">Pesquisar Sala de Evento</h2>
        <select
          @change="carregarVetorSalas"
          v-model="salaSel"
          class="form-control mb-1"
        >
          <option value="0" selected disabled>
            Selecione uma Sala de Evento
          </option>
          <option
            v-for="salas in allSalas"
            :key="salas.indice"
            :value="salas.id"
          >
            {{ salas.nome }}
          </option>
        </select>
        <select v-model="etapaSel" class="form-control mb-1">
          <option value="0" selected disabled>
            Selecione a Etapa desejada
          </option>
          <option
            v-for="etapas in allEtapas"
            :key="etapas.indice"
            :value="etapas.id"
          >
            {{ etapas.nome }}
          </option>
        </select>
        <table v-if="this.etapaSel == 1" class="content-table">
          <thead>
            <tr>
              <th>Nome do Participante</th>
              <th>Sobrenome do Participante</th>
              <th>Sala Etapa 1</th>
            </tr>
          </thead>
          <tbody v-if="this.salaSel == 1">
            <tr
              v-for="participantes in participantesSala1Etapa1"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeSala1 }}</td>
            </tr>
          </tbody>
          <tbody v-if="this.salaSel == 2">
            <tr
              v-for="participantes in participantesSala2Etapa1"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeSala1 }}</td>
            </tr>
          </tbody>
        </table>
        <table v-if="this.etapaSel == 2" class="content-table">
          <thead>
            <tr>
              <th>Nome do Participante</th>
              <th>Sobrenome do Participante</th>
              <th>Sala Etapa 2</th>
            </tr>
          </thead>
          <tbody v-if="this.salaSel == 1">
            <tr
              v-for="participantes in participantesSala1Etapa2"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeSala2 }}</td>
            </tr>
          </tbody>
          <tbody v-if="this.salaSel == 2">
            <tr
              v-for="participantes in participantesSala2Etapa2"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeSala2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pesquisa3">
        <h2 id="pesquisa">Pesquisar Espaço Café</h2>
        <select
          @change="carregarVetorCafes"
          v-model="cafeSel"
          class="form-control mb-1"
        >
          <option value="0" selected disabled>
            Selecione um Espaço de Café
          </option>
          <option
            v-for="cafes in allCafes"
            :key="cafes.indice"
            :value="cafes.id"
          >
            {{ cafes.nome }}
          </option>
        </select>
        <select v-model="etapaSel2" class="form-control mb-1">
          <option value="0" selected disabled>
            Selecione a Etapa desejada
          </option>
          <option
            v-for="etapas in allEtapas"
            :key="etapas.indice"
            :value="etapas.id"
          >
            {{ etapas.nome }}
          </option>
        </select>
        <table v-if="this.etapaSel2 == 1" class="content-table">
          <thead>
            <tr>
              <th>Nome do Participante</th>
              <th>Sobrenome do Participante</th>
              <th>Sala Etapa 1</th>
            </tr>
          </thead>
          <tbody v-if="this.cafeSel == 1">
            <tr
              v-for="participantes in participantesCafe1Etapa1"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeCafe1 }}</td>
            </tr>
          </tbody>
          <tbody v-if="this.cafeSel == 2">
            <tr
              v-for="participantes in participantesCafe2Etapa1"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeCafe1 }}</td>
            </tr>
          </tbody>
        </table>
        <table v-if="this.etapaSel2 == 2" class="content-table">
          <thead>
            <tr>
              <th>Nome do Participante</th>
              <th>Sobrenome do Participante</th>
              <th>Sala Etapa 2</th>
            </tr>
          </thead>
          <tbody v-if="this.cafeSel == 1">
            <tr
              v-for="participantes in participantesCafe1Etapa2"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeCafe2 }}</td>
            </tr>
          </tbody>
          <tbody v-if="this.cafeSel == 2">
            <tr
              v-for="participantes in participantesCafe2Etapa2"
              :key="participantes.id"
            >
              <td>{{ participantes.nome }}</td>
              <td>{{ participantes.sobrenome }}</td>
              <td>{{ participantes.nomeCafe2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      pesquisaParticipante: "",
      pesquisaSalaEvento: "",
      pesquisaCafe: "",
      allParticipantes: [],
      allSalas: [],
      allCafes: [],
      allEtapas: [],
      participantesSala1Etapa1: [],
      participantesSala2Etapa1: [],
      participantesSala1Etapa2: [],
      participantesSala2Etapa2: [],
      participantesCafe1Etapa1: [],
      participantesCafe2Etapa1: [],
      participantesCafe1Etapa2: [],
      participantesCafe2Etapa2: [],
      salaSel: 0,
      cafeSel: 0,
      etapaSel: 0,
      etapaSel2: 0,
    };
  },
  mounted() {
    axios
      .get("http://localhost:55560/api/participante/")
      .then((resp) => (this.allParticipantes = resp.data));
    axios
      .get("http://localhost:55560/api/salas/")
      .then((resp) => (this.allSalas = resp.data));
    axios
      .get("http://localhost:55560/api/cafes/")
      .then((resp) => (this.allCafes = resp.data));
    axios
      .get("http://localhost:55560/api/etapas/")
      .then((resp) => (this.allEtapas = resp.data));
  },
  methods: {
    apresentar: function () {
      console.log(this.allParticipantes);
    },
    carregarVetorSalas: function () {
      this.participantesSala1Etapa1 = [];
      this.participantesSala1Etapa2 = [];
      this.participantesSala2Etapa1 = [];
      this.participantesSala2Etapa2 = [];
      if (this.salaSel == 1) {
        this.allParticipantes.filter((part) => {
          if (part.sala1 == 1) {
            this.participantesSala1Etapa1.push(part);
          }
          if (part.sala2 == 1) {
            this.participantesSala1Etapa2.push(part);
          }
        });
      }
      if (this.salaSel == 2) {
        this.allParticipantes.filter((part2) => {
          if (part2.sala1 == 2) {
            this.participantesSala2Etapa1.push(part2);
          }
          if (part2.sala2 == 2) {
            this.participantesSala2Etapa2.push(part2);
          }
        });
      }
    },
    carregarVetorCafes: function () {
      this.participantesCafe1Etapa1 = [];
      this.participantesCafe1Etapa2 = [];
      this.participantesCafe2Etapa1 = [];
      this.participantesCafe2Etapa2 = [];
      if (this.cafeSel == 1) {
        this.allParticipantes.filter((part) => {
          if (part.cafe1 == 1) {
            this.participantesCafe1Etapa1.push(part);
          }
          if (part.cafe2 == 1) {
            this.participantesCafe1Etapa2.push(part);
          }
        });
      }
      if (this.cafeSel == 2) {
        this.allParticipantes.filter((part2) => {
          if (part2.cafe1 == 2) {
            this.participantesCafe2Etapa1.push(part2);
          }
          if (part2.cafe2 == 2) {
            this.participantesCafe2Etapa2.push(part2);
          }
        });
      }
    },
  },
  computed: {
    filterParticipantes: function () {
      return this.allParticipantes.filter((participante) => {
        return participante.nome
          .toLowerCase()
          .match(this.pesquisaParticipante.toLowerCase());
      });
    },
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
  width: 600px;
  height: 700px;
  overflow: scroll;
  overflow-x: auto;
  align-items: center;
}
.pesquisa2 {
  margin-left: 50px;
  width: 600px;
  height: 700px;
  overflow: scroll;
  overflow-x: auto;
}
.pesquisa3 {
  margin-left: 50px;
  width: 600px;
  height: 700px;
  overflow: scroll;
  overflow-x: auto;
}
.link {
  padding: 20px;
  text-decoration: none;
  text-align: center;
}
.content-table {
  border-collapse: collapse;
  margin: 10px auto;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #98f5ff;
  color: #000;
  text-align: center;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #98f5ff;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #98f5ff;
}
</style>