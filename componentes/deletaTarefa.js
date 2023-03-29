// Componentes com letras maiúsculas
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.classList.add('button');

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

// Funções com letras minúsculas
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();
    
    return botaoDeleta;

}

export default BotaoDeleta