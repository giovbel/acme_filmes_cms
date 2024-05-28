'use strict'

import { deletarDiretor, listarDiretores } from "./endpoints.js"

const container = document.getElementById('containerDiretor')

async function criarDiretor(diretor) {

    const containerDiretor = document.createElement('div')
    containerDiretor.classList.add('h-10', 'flex', 'justify-between',  'text-white', 'pl-10', 'pr-10')

    const idNome = document.createElement('div')
    idNome.classList.add('flex', 'gap-40')

    const id = document.createElement('h3')
    id.textContent = diretor.id

    const nome = document.createElement('h3')
    nome.textContent = diretor.nome

    idNome.replaceChildren(id, nome)

    const nomeArtistico = document.createElement('h3')
    nomeArtistico.innerHTML = diretor.nome_artistico

    const containerData = document.createElement('div')
    containerData.classList.add('flex')

    const dataNascimento = document.createElement('h3')
    dataNascimento.innerHTML = diretor.data_nascimento.split('T')[0]

    containerData.appendChild(dataNascimento)

    const nacionalidade = document.createElement('h3')
    nacionalidade.textContent = diretor.nacionalidade[0].gentilico

    const botoes = document.createElement('div')
    botoes.classList.add('flex', 'gap-3')

    const editar = document.createElement('a')
    editar.href = '../editDiretor.html'
    editar.addEventListener('click', () => {
        localStorage.setItem('idDiretor', diretor.id)
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
        deletarDiretor(diretor.id)
        window.location.reload()
    })

    botoes.replaceChildren(editar, excluir)

    containerDiretor.replaceChildren(idNome,nomeArtistico, containerData, nacionalidade , botoes)

    container.appendChild(containerDiretor)
}

async function carregarDiretores() {
    let diretores = await listarDiretores()
    console.log(diretores)
    diretores.forEach(diretor => {
        criarDiretor(diretor)
    });
}

await carregarDiretores()