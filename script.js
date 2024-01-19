const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {//garnda value na variavel away//
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    }) 

    input.value = ''

    mostrarTarefa()

}

function mostrarTarefa() {
    let novaLi = ''

    minhaListaDeItens.forEach((item,posicao) => {
        novaLi = novaLi + `

    <li class="task ${item.concluida && "done"}">
        <img src="img/ok.png" alt="ok" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="img/excluir.png" alt="Excluir" onclick="deletarItem(${posicao})">
    </li>
    
    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista',JSON.stringify(minhaListaDeItens)) //Grardar na memoria do navegador

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefa()
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1) //splice deleta valor dentro do away//
    
    mostrarTarefa()

}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    mostrarTarefa()
    }   
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa) // addEventListener = permite que você configure funções a serem chamadas quando um evento específico acontece//