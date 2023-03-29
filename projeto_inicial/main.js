import BotaoConclui from "../componentes/concluiTarefa.js";
import BotaoDeleta from "../componentes/deletaTarefa.js";

const criarTarefa = () => {

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
    
    console.log(valor);
}

const verificaVazio = (evento) => {
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const valorComparacao = valor.trim();

    if(valorComparacao === ""){
        alert('o campo de texto está vazio!')
    }else{
        criarTarefa();
    }
}


const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', verificaVazio);