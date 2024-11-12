// script.js

// Seleciona o modal e elementos do DOM
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector("#close");

// Função para abrir o modal
function openModal(title, description, image) {
    modal.style.display = "flex"; // Exibe o modal
    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Adiciona a classe 'show' para animação
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Adiciona evento de clique a cada projeto
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");
        const image = card.getAttribute("data-image");
        openModal(title, description, image);
    });
});

// Evento para fechar o modal
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none"; // Esconde o modal após a animação
    }, 300); // Tempo da animação
});

// Fecha o modal ao clicar fora da área do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none"; // Esconde o modal após a animação
        }, 300);
    }
});

// Seleciona o elemento de link
const modalLink = document.getElementById("modal-link");

// Função para abrir o modal (modificada para incluir o link)
function openModal(title, description, image, link) {
    modal.style.display = "flex"; // Exibe o modal
    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalLink.href = link; // Define o link dinâmico

    // Adiciona a classe 'show' para animação
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Adiciona evento de clique a cada projeto (incluindo o link)
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");
        const image = card.getAttribute("data-image");
        const link = card.getAttribute("data-link"); // Obtém o link do projeto
        openModal(title, description, image, link);
    });
});
