let list = document.querySelectorAll('.navigation li');

function activeLink(event) {
  event.preventDefault();
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
  var href = this.getAttribute('href');
  this.addEventListener('transitionend', function() {
    window.location.href = href;
  });
}

list.forEach((item) => item.addEventListener('click', activeLink));