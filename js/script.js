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
