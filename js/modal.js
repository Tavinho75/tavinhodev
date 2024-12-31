const btn1 = document.getElementById("btnopen1")
const btn2 = document.getElementById("btnopen2")
const btn3 = document.getElementById("btnopen3")
const btn4 = document.getElementById("btnopen4")
const btn5 = document.getElementById("btnopen5")
const btn6 = document.getElementById("btnopen6")

const modal1 = document.getElementById("dialog1")
const modal2 = document.getElementById("dialog2")
const modal3 = document.getElementById("dialog3")
const modal4 = document.getElementById("dialog4")
const modal5 = document.getElementById("dialog5")
const modal6 = document.getElementById("dialog6")

const closeButtons = document.querySelectorAll(".close");

btn1.onclick = function () {
  modal1.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

btn2.onclick = function () {
  modal2.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

btn3.onclick = function () {
  modal3.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

btn4.onclick = function () {
  modal4.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

btn5.onclick = function () {
  modal5.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

btn6.onclick = function () {
  modal6.showModal()
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

closeButtons.forEach((button) => {
  button.onclick = function () {
    modal1.close();
    modal2.close();
    modal3.close();
    modal4.close();
    modal5.close();
    modal6.close();
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
  };
});