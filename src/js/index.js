const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
       
        desselecionarbotao();

        botao.classList.add("selecionado");
        desselecionarpersonagem();
        personagens[indice].classList.add("selecionado")
    });
})


function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector('.personagem.selecionado');
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

