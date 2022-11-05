//Verifica se já há um nome no localstorage e coloca no input
if (localStorage.getItem("userName") != []) {
  document.getElementById("userNome").value = localStorage.getItem("userName");
}

//Verifica se já há uma idade no localstorage e coloca no input
if (localStorage.getItem("userIdade") != []) {
  document.getElementById("userIdade").value =
    localStorage.getItem("userIdade");
}

//Função para exibir e ocultar a imagem
function exibirVandal() {
  var i = document.getElementById("VandalImg");

  if (i.style.display == "inline") {
    i.style.display = "none";
  } else {
    i.style.display = "inline";
  }
}

//Função que envia o nome do usuário para o localstorage e emite um alerta
function nomeAlert() {
  if (document.getElementById("userNome").value != []) {
    var nome = document.getElementById("userNome").value;

    nome = nome[0].toUpperCase() + nome.substr(1);

    localStorage.setItem("userName", nome);

    alert("Olá, " + localStorage.getItem("userName"));
  } else {
    alert("Nome Obrigatório!!");
  }
}

//Função que envia a idade do usuário para o localstorage e emite alerta
function idadeAlert() {
  if (
    document.getElementById("userIdade").value != [] &&
    document.getElementById("userIdade").value > 0
  ) {
    var idade = document.getElementById("userIdade").value;

    localStorage.setItem("userIdade", idade);

    if (idade >= 18) {
      alert("Você é maior de idade!");
    } else {
      alert("Você é menor de idade!");
    }
  } else {
    alert("Idade Inválida!!!");
  }
}

console.log("@felipeSinn_dev");
