// ativar links do menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href; //pega a url do site
  const href = link.href; //pega o caminho das pgs
  //Includes é uma propriedade que confere se existe elemantos na string, exemplo, javaScript.includes("java") retorn true
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// ativar itens do orçamento

//location é um objetto com varios parametros dentro. o .search é um dos elementos dentro desse objeto que da acesso ao caminho que foi colocado depois do ?
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//galeria imagens

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// o matchMedia é um metodo que avalia o tamanho da tela e aplica uma função conforme é determinada o tamanho da tela
// o prepend remove um item da array e coloca de novo em primeiro lugar na lista

/*Animação */
if (window.SimpleAnime) {
  new SimpleAnime();
}
