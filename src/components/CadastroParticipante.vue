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
          v-model="nomeParticipante"
        />
      </div>
      <div>
        <h4>Sobrenome do Participante</h4>
        <input
          type="text"
          class="placeholder"
          placeholder="Insira o nome do participante"
          v-model="sobrenomeParticipante"
        />
      </div>
      <div>
        <h4>Selecione uma Sala para o participante</h4>
        <select v-model="salaSel">
          <option value="0" selected disabled>Selecione uma Sala</option>
          <option
            v-for="salas in allSalas"
            :key="salas.indice"
            :value="salas.id"
          >
            {{ salas.nome }}
          </option>
        </select>
      </div>
      <div>
        <h4>Selecione um Espaço de Café para o Participante</h4>
        <select v-model="cafeSel">
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
      </div>
      <button id="buttonCadastrarParticipante" @click="cadastrarParticipante">
        Cadastrar Participante
      </button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      salaSel: 0,
      nomeParticipante: "",
      sobrenomeParticipante: "",
      cafeSel: 0,
      allSalas: [],
      allCafes: [],
      verificaCampos: false,
      diferencaLotacao: 0,
      lotacaoSala1: 0,
      lotacaoSala2: 0,
      sala2: 0,
      cafe2: 0,
      lotacaoCafe1: 0,
      lotacaoCafe2: 0,
      diferencaLotacaoConvertido: 0,
      lotacaoCafe1Alterar: 0,
      lotacaoCafe2Alterar: 0,
      lotacaoSala1Alterar: 0,
      lotacaoSala2Alterar: 0,
      lotacaoCafeAlterar: [],
      lotacaoSalaAlterar: [],
    };
  },
  methods: {
    cadastrarParticipante: function () {
      if (this.allCafes.length == 2 && this.allSalas.length == 2)
        if (
          //verifica se os campos estão vazios
          this.salaSel == 0 ||
          this.nomeParticipante == "" ||
          this.sobrenomeParticipante == "" ||
          this.cafeSel == 0
        ) {
          this.verificaCampos = true;
        } else {
          //pega a lotacao de cada sala e armaneza em uma variavel
          for (var i = 0; i <= this.allSalas.length; i++) {
            if (i == 0) {
              this.lotacaoSala1 = this.allSalas[i].lotacao;
            }
            if (i == 1) {
              this.lotacaoSala2 = this.allSalas[i].lotacao;
            }
          }
          for (var i2 = 0; i2 <= this.allCafes.length; i2++) {
            if (i2 == 0) {
              this.lotacaoCafe1 = this.allCafes[i2].lotacao;
            }
            if (i2 == 1) {
              this.lotacaoCafe2 = this.allCafes[i2].lotacao;
            }
          }
          this.diferencaLotacao = this.lotacaoSala1 - this.lotacaoSala2;
          if (this.diferencaLotacao < 0) {
            this.diferencaLotacaoConvertido = this.diferencaLotacao * -1;
          }
          if (this.diferencaLotacao >= 0) {
            this.diferencaLotacaoConvertido = this.diferencaLotacao;
          }

          if (
            this.diferencaLotacaoConvertido <= 1 &&
            this.lotacaoSala1 >= 1 &&
            this.lotacaoSala2 >= 1 &&
            this.lotacaoCafe1 >= 1 &&
            this.lotacaoCafe2 >= 1
          ) {
            //verifica a diferança de lotacao
            if (this.salaSel == 1) {
              for (var sala1 = 1; sala1 <= this.allSalas.length; sala1++) {
                if (sala1.id != this.salaSel && this.sala2 == 0) {
                  this.sala2 = this.allSalas[sala1].id;
                }
              }
              if (this.cafeSel == 1) {
                for (var cafe = 1; cafe <= this.allCafes.length; cafe++) {
                  if (cafe.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                ];
                for (var i3 = 0; i3 < 2; i3++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i3]);
                }
                this.lotacaoSala1Alterar = this.lotacaoSala1 - 1;
                this.lotacaoSala2Alterar = this.lotacaoSala2 - 1;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala1Alterar,
                  },
                  {
                    id: this.sala2,
                    lotacao: this.lotacaoSala2Alterar,
                  },
                ];
                for (var i4 = 0; i4 < 2; i4++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i4]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.sala2,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
              if (this.cafeSel == 2) {
                for (var cafe2 = 0; cafe2 <= this.allCafes.length; cafe2++) {
                  if (cafe2.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe2].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                ];
                for (var i5 = 0; i5 < 2; i5++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i5]);
                }
                this.lotacaoSala1Alterar = this.lotacaoSala1 - 1;
                this.lotacaoSala2Alterar = this.lotacaoSala2 - 1;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala1Alterar,
                  },
                  {
                    id: this.sala2,
                    lotacao: this.lotacaoSala2Alterar,
                  },
                ];
                for (var i6 = 0; i6 < 2; i6++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i6]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.sala2,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
            }
            if (this.salaSel == 2) {
              for (var sala2 = 0; sala2 <= this.allSalas.length; sala2++) {
                if (sala2.id != this.salaSel && this.sala2 == 0) {
                  this.sala2 = this.allSalas[sala2].id;
                }
              }
              if (this.cafeSel == 1) {
                for (var cafe3 = 1; cafe3 <= this.allCafes.length; cafe3++) {
                  if (cafe3.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe3].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                ];
                for (var i7 = 0; i7 < 2; i7++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i7]);
                }
                this.lotacaoSala1Alterar = this.lotacaoSala1 - 1;
                this.lotacaoSala2Alterar = this.lotacaoSala2 - 1;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala2Alterar,
                  },
                  {
                    id: this.sala2,
                    lotacao: this.lotacaoSala1Alterar,
                  },
                ];
                for (var i8 = 0; i8 < 2; i8++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i8]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.sala2,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
              if (this.cafeSel == 2) {
                for (var cafe4 = 0; cafe4 <= this.allCafes.length; cafe4++) {
                  if (cafe4.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe4].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                ];
                for (var i9 = 0; i9 < 2; i9++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i9]);
                }
                this.lotacaoSala1Alterar = this.lotacaoSala1 - 1;
                this.lotacaoSala2Alterar = this.lotacaoSala2 - 1;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala2Alterar,
                  },
                  {
                    id: this.sala2,
                    lotacao: this.lotacaoSala1Alterar,
                  },
                ];
                for (var i10 = 0; i10 < 2; i10++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i10]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.sala2,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
            }
          } else if (
            this.diferencaLotacaoConvertido > 1 &&
            this.lotacaoCafe1 >= 1 &&
            this.lotacaoCafe2 >= 1
          ) {
            //se a diferença for maior que 1
            if (this.lotacaoSala1 > this.lotacaoSala2) {
              this.salaSel = 1;
              if (this.cafeSel == 1) {
                for (var cafe5 = 1; cafe5 <= this.allCafes.length; cafe5++) {
                  if (cafe5.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe5].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                ];
                for (var i11 = 0; i11 < 2; i11++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i11]);
                }
                this.lotacaoSala1Alterar = this.lotacaoSala1 - 2;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala1Alterar,
                  },
                ];
                for (var i12 = 0; i12 < 1; i12++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i12]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.salaSel,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
              if (this.cafeSel == 2) {
                for (var cafe6 = 0; cafe6 <= this.allCafes.length; cafe6++) {
                  if (cafe6.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe6].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                ];
                for (var i17 = 0; i17 < 2; i17++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i17]);
                }
                this.lotacaoSala1Alterar = this.lotacaoSala1 - 2;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala1Alterar,
                  },
                ];
                for (var i18 = 0; i18 < 1; i18++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i18]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.salaSel,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
            }
            if (this.lotacaoSala2 > this.lotacaoSala1) {
              this.salaSel = 2;
              if (this.cafeSel == 1) {
                for (var cafe7 = 1; cafe7 <= this.allCafes.length; cafe7++) {
                  if (cafe7.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe7].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                ];
                for (var i13 = 0; i13 < 2; i13++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i13]);
                }
                this.lotacaoSala2Alterar = this.lotacaoSala2 - 2;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala2Alterar,
                  },
                ];
                for (var i14 = 0; i14 < 1; i14++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i14]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.salaSel,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
              if (this.cafeSel == 2) {
                for (var cafe8 = 0; cafe8 <= this.allCafes.length; cafe8++) {
                  if (cafe8.id != this.cafeSel && this.cafe2 == 0) {
                    this.cafe2 = this.allCafes[cafe8].id;
                  }
                }
                this.lotacaoCafe1Alterar = this.lotacaoCafe1 - 1;
                this.lotacaoCafe2Alterar = this.lotacaoCafe2 - 1;
                let allCafesAlterar = [
                  {
                    id: this.cafeSel,
                    lotacao: this.lotacaoCafe2Alterar,
                  },
                  {
                    id: this.cafe2,
                    lotacao: this.lotacaoCafe1Alterar,
                  },
                ];
                for (var i15 = 0; i15 < 2; i15++) {
                  this.lotacaoCafeAlterar.push(allCafesAlterar[i15]);
                }
                this.lotacaoSala2Alterar = this.lotacaoSala2 - 2;
                let allSalasAlterar = [
                  {
                    id: this.salaSel,
                    lotacao: this.lotacaoSala2Alterar,
                  },
                ];
                for (var i16 = 0; i16 < 1; i16++) {
                  this.lotacaoSalaAlterar.push(allSalasAlterar[i16]);
                }
                axios
                  .post("http://localhost:55560/api/participante", {
                    nome: this.nomeParticipante,
                    sobrenome: this.sobrenomeParticipante,
                    sala1: this.salaSel,
                    sala2: this.salaSel,
                    cafe1: this.cafeSel,
                    cafe2: this.cafe2,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
                this.lotacaoCafeAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/cafes/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then((resp) => {
                      console.log(resp.data);
                    });
                });
                this.lotacaoSalaAlterar.forEach((el) => {
                  axios
                    .put("http://localhost:55560/api/salas/" + el.id, {
                      lotacao: el.lotacao,
                    })
                    .then(location.reload());
                });
              }
            }
          } else {
            console.log(
              "Não foi possível cadastrar o participante pois a lotação das salas ou dos espaços de café foram excedidas"
            );
            location.reload();
          }
        }
      else {
        console.log(
          "É necessário ter duas salas e dois espaços de café cadastrados para realizar o cadastro do participante"
        );
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:55560/api/salas")
      .then((resp) => (this.allSalas = resp.data));

    axios
      .get("http://localhost:55560/api/cafes")
      .then((resp) => (this.allCafes = resp.data));
  },
  computed: {
    carregarComboSalas: function () {
      return this.allSalas;
    },
    carregarComboCafes: function () {
      return this.allCafes;
    },
  },
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
#buttonCadastrarParticipante {
  margin-top: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid;
}
</style>