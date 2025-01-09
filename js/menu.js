let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click',activeLink));

function atrasarLink(event, url, delay) {
    // Previne o link de ser acionado imediatamente
    event.preventDefault();

    
    // Aguarda o tempo especificado antes de redirecionar
    setTimeout(() => {
      window.location.href = url;
    }, delay);
  }