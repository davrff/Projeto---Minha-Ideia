// codigo para aparecer os links no mobile 

const botaoMenu = document.getElementById("botao_links_mobile");
const iconesMenu = botaoMenu.querySelector("i");
const cabecalhoPagina = document.getElementById("cabecalho_pagina");
const menuPagina = document.getElementById("menu_pagina");

botaoMenu.addEventListener("click", () => {
    menuPagina.classList.toggle("ativo");
    cabecalhoPagina.classList.toggle("menu_aberto");

    if (menuPagina.classList.contains("ativo")) {
        iconesMenu.classList.remove("fa-bars");
        iconesMenu.classList.add("fa-x");
    } else {
       iconesMenu.classList.remove("fa-x");
        iconesMenu.classList.add("fa-bars");
    }
});

// codigo para abrir e fechar o modal

const botaoAbrirModal = document.getElementById("botao_comecar_agora");
const modal = document.getElementById("modal");
const botaoFecharModal = document.getElementById("botao_fechar_modal");

function abrirModal() {
    modal.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
}

botaoAbrirModal.addEventListener("click", abrirModal);

botaoFecharModal.addEventListener("click", fecharModal);

// codigo para mudar de pagina pelo botão #botao-voltar-pagina-inicial

const botaoVoltarPaginaInicial = document.getElementById("botao_voltar_pagina_inicial");

botaoVoltarPaginaInicial.addEventListener("click", () => {
    window.location.href = "minhaideia.html";
});

// validação do formulário

const formularioPagina = document.getElementById("formulario");

formularioPagina.addEventListener("submit", (event) => {
    event.preventDefault();

const inputIdeia = document.getElementById("input_modal_ideia").value.trim();
const inputDesejo =document.getElementById("input_modal_desejo").value.trim();

if (inputIdeia === "" || inputDesejo === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return;
}

let ideiasSalvas = JSON.parse(localStorage.getItem("ideiasSalvas")) || [];

const novaIdeia = {
    ideia: inputIdeia,
    desejo: inputDesejo
}

ideiasSalvas.push(novaIdeia);

localStorage.setItem("ideiasSalvas", JSON.stringify(ideiasSalvas));

alert("Ideia enviada com sucesso!");
formularioPagina.reset();
});