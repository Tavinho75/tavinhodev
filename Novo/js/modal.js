function togglePopup() {
    const popup = document.getElementById("popup-1");
    popup.classList.toggle("active");

    // Impedir a rolagem da página quando o modal estiver aberto
    document.body.classList.toggle("modal-open");
}
