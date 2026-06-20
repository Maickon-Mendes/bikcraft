const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href; //pega a url do site
  const href = link.href;  //pega o caminho das pgs

//Includes é uma propriedade que confere se existe elemantos na string, exemplo, javaScript.includes("java") retorn true
  if (url.includes(href)) {  
    link.classList.add("ativo")
  }
  console.log(url)
  console.log(href)

}

links.forEach(ativarLink)