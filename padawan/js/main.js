function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}


function criaLinha(usuario) {
  let data = Object.values(usuario);
  let linha = document.createElement("tr");  
  for (i = 0; i < data.length; i++){
    let elemento = document.createElement("td");
    elemento.innerHTML = data[i];   
    linha.appendChild(elemento);
 }
 return linha;
}

function mainPost() {
  let data = fazGet('https://jsonplaceholder.typicode.com/posts')
  let usuarios = JSON.parse(data);
  let tabelaPost = document.getElementById('tabelaPost');
  usuarios.forEach(element => {
    let linha = criaLinha(element);
    tabelaPost.appendChild(linha);
  });
  console.log(usuarios);
}

function mainAlbum() {
  let data = fazGet('https://jsonplaceholder.typicode.com/albums')
  let usuarios = JSON.parse(data);
  let tabelaAlbum = document.getElementById('tabelaAlbum');
  usuarios.forEach(element => {
    let linha = criaLinha(element);
    tabelaAlbum.appendChild(linha);
  });
  console.log(usuarios);
}

function mainTodos() {
  let data = fazGet('https://jsonplaceholder.typicode.com/todos')
  let usuarios = JSON.parse(data);
  let tabela = document.getElementById('tabelaTodos');
  usuarios.forEach(element => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  });
  console.log(usuarios);
}


