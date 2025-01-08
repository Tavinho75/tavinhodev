let list = document.querySelectorAll('.navigation li');

function activeLink(event) {
  event.preventDefault();
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
  this.addEventListener('transitionend', function() {
    var href = this.getAttribute('href');
    window.location.href = href;
  });
}

list.forEach((item) => item.addEventListener('click', activeLink));