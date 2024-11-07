const btn1 = document.getElementById("btnopen1")
const modal1 = document.getElementById("dialog1")
const close1 = document.querySelector(".close1")

btn1.onclick = function () {
  modal1.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}


close1.onclick = function () {
  modal1.close()
  document.body.classList.remove("modal-open");
  document.documentElement.classList.remove("modal-open");
}