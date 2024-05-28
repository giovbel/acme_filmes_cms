'use strict'

import { deletarAtor, listarAtores } from "./endpoints.js"

const container = document.getElementById('containerAtor')

const pesquisarAtores = async (atores) =>{
    const searchInput = document.getElementById('barra-pesquisa')
  
    searchInput.onkeyup = function(){

    let valorInput = searchInput.value
    
        if(valorInput.length){
            atores.forEach(ator => {
            if(ator.nome.toLowerCase().includes(valorInput.toLowerCase()) && valorInput != "" ){
                container.innerHTML = '';
                criarAtor(ator)
            }
        })
        }else{
            container.innerHTML = '';
            carregarAtores()
        }      

}
}



async function criarAtor(ator) {

    const containerAtor = document.createElement('div')
    containerAtor.classList.add('h-10', 'flex', 'justify-between',  'text-white', 'pl-10', 'pr-10')

    const idNome = document.createElement('div')
    idNome.classList.add('flex', 'gap-40')

    const id = document.createElement('h3')
    id.textContent = ator.id

    const nome = document.createElement('h3')
    nome.textContent = ator.nome

    idNome.replaceChildren(id, nome)

    const nomeArtistico = document.createElement('h3')
    nomeArtistico.innerHTML = ator.nome_artistico

    const containerData = document.createElement('div')
    containerData.classList.add('flex')

    const dataNascimento = document.createElement('h3')
    dataNascimento.innerHTML = ator.data_nascimento.split('T')[0]

    containerData.appendChild(dataNascimento)

    const nacionalidade = document.createElement('h3')
    nacionalidade.textContent = ator.nacionalidade[0].gentilico

    const botoes = document.createElement('div')
    botoes.classList.add('flex', 'gap-3')

    const editar = document.createElement('a')
    editar.href = '../editAtor.html'
    editar.addEventListener('click', () => {
        localStorage.setItem('idAtor', ator.id)
    })
    editar.classList.add('font-bold', 'text-black', 'flex', 'bg-[#D9D9D9]', 'w-20', 'h-8', 'items-center', 'rounded-md', 'justify-center')

    const imgEditar =  document.createElement('img')
    imgEditar.src = '../img/tabler_edit.png'

    editar.appendChild(imgEditar)
    editar.textContent = 'Editar'

    const excluir = document.createElement('button')
    excluir.classList.add('bg-[#E75858]', 'h-8', 'w-8', 'justify-center', 'flex', 'items-center', 'rounded-md')

    const imgExcluir =  document.createElement('img')
    imgExcluir.src = '../img/pajamas_remove.png'

    excluir.appendChild(imgExcluir)
    excluir.addEventListener('click', () => {
        deletarAtor(ator.id)
        window.location.reload()
    })

    botoes.replaceChildren(editar, excluir)

    containerAtor.replaceChildren(idNome,nomeArtistico, containerData, nacionalidade , botoes)

    container.appendChild(containerAtor)
}

async function carregarAtores() {
    let atores = await listarAtores()
    console.log(atores)
    atores.forEach(ator => {
        criarAtor(ator)
    });
}

await carregarAtores()
await pesquisarAtores()