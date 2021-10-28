// function func(){
//     alert("teste de alert")
// }

function func(){

    let obj1 = Object.values(eu)
    let obj2 = Object.create(eu)
    alert (obj1)
}

const eu = {
    nome: "Tonny Reis",
    idade: 32,

    endereco: {
      rua: "uma rua qualquer",
      numero: 105,
      cep: "08471-192"
    },

    familia: {
      mae: "Mother",
      pai:"Father",
      irmao:"Bro",
      irma: "Sis"
    },

    pets: [
      "dog1",
      "dog2"
    ]
  }
