// Componentes com letras maiúsculas
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.classList.add('button');

    const imagemConteudo = `<i class="fa-solid fa-check" data-img></i>`;
    botaoConclui.innerHTML = imagemConteudo; 

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

// Funções com letras minúsculas
const concluirTarefa = (evento) => {

    // target = alvo, onde foi clicado
    const botaoConclui = evento.target;

    // onde for clicado, afetará o pai daquele elemento
    const tarefaCompleta = botaoConclui.parentElement;

    // aplicará estilos no pai do elemento, no caso a 'li'
    tarefaCompleta.classList.toggle('done');

}

export default BotaoConclui