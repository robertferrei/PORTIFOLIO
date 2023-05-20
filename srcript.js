
const chk = document.getElementById('checkbox')
const homr = document.getElementById('home')
const sobre = document.getElementById('sobre')
const projetos = document.getElementById('projetos')
const comun = document.getElementById('fale-comigo')
const btn = document.getElementById('btntop')
 
 


chk.addEventListener('change', () => {
   homr.classList.toggle('dark')
   sobre.classList.toggle('course')
   projetos.classList.toggle('dark')
  comun.classList.toggle('dark')
   
})

document.addEventListener('scroll',ocultar) // oculta a seta de voltar pra o inicio

function ocultar (){
  if(window.scrollY >=10){
      btn.style.display = "flex"
  } else{
    btn.style.display = "none"
  }
}

 



ocultar()

 