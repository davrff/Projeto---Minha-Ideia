// codigo para aparecer os links no mobile 

const botaoMenu = document.getElementById("botao-links-mobile");
const cabecalhoPagina = document.getElementById("cabecalho-pagina");
const menuPagina = document.getElementById("menu-pagina");

botaoMenu.addEventListener("click", () => {
    menuPagina.classList.toggle("ativo");
    cabecalhoPagina.classList.toggle("menu-aberto");
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

const botaoVoltarPaginaInicial = document.getElementById("botao-voltar-pagina-inicial");

botaoVoltarPaginaInicial.addEventListener("click", () => {
    window.location.href = "minhaideia.html";
});

// validação do formulário

const formularioPagina = document.getElementById("formulario");

formularioPagina.addEventListener("submit", (event) => {
    event.preventDefault();

const inputIdeia = document.getElementById("input-modal-ideia").value.trim();
const inputDesejo =document.getElementById("input-modal-desejo").value.trim();

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