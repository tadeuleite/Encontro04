var listaTarefas = new Array();

function criarTarefa() {
    var nomeTarefa = document.getElementById('nomeTarefa').value;
    var statusCompleto = document.getElementById('statusCompleto');

    var retornoStatus = status(statusCompleto);

    listaTarefas.push(nomeTarefa, retornoStatus);

    console.log(listaTarefas);
}

function deletarTarefa() {
    var nomeTarefa = document.getElementById('nomeTarefa').value;
    var index = localizarIndice(nomeTarefa);

    if (index != null) {
        listaTarefas.splice(index, 2)
    }

    console.log(listaTarefas);
}

function alterarTarefa() {
    var nomeAlteradoTarefa = document.getElementById('nomeAlteradoTarefa').value;
    var nomeTarefa = document.getElementById('nomeTarefa').value;
    var statusCompleto = document.getElementById('statusAlterarCompleto');
    var retornoStatus = status(statusCompleto);

    var index = localizarIndice(nomeTarefa);
    listaTarefas.splice(index, 2);
    listaTarefas.push(nomeTarefa, retornoStatus);
    
    console.log(listaTarefas);

    // btnAlterar.value = 'Confirmar Alteração';
    //voltar ao nome antigo dps de confirmar
    // if (nomeAlteradoTarefa.style.display === "none") {
    //     nomeAlteradoTarefa.style.display = "block";
    //   } else {
    //     nomeAlteradoTarefa.style.display = "none";
    //   }
}

function consultarTarefas() {
    var statusTarefa = document.getElementById('select');
    statusTarefa.value = listaTarefas;
}

function limparCompletos() {
    for (let index = 0; index < listaTarefas.length; index++) {
        console.log(index+' '+listaTarefas[index].toLocaleLowerCase());
        if(listaTarefas[index].toLocaleLowerCase() === 'Completo'.toLocaleLowerCase()) {
            listaTarefas.slice(index-1, 2);
        }
    }
    console.log(listaTarefas);
}

function localizarIndice(name) {
    for (let index = 0; index < listaTarefas.length; index++) {
        if (listaTarefas[index] == name) {
            return index;
        }
    }
    return null;
}

function status(statusCompleto) {

    if (statusCompleto.checked == true) {
        return 'Completo';
    } else {
        return 'Não completo';
    }
}