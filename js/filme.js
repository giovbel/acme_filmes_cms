'use strict'

import { listarFilmes, deletarFilme } from "./endpoints.js"

const container = document.getElementById('containerFilmes')

async function criarFilme(filme) {
    const containerFilme = document.createElement('div')
    containerFilme.classList.add('h-10','flex', 'justify-between', 'text-white', 'pl-10', 'pr-10')

    const idNome = document.createElement('div')
    idNome.classList.add('flex', 'gap-40')

    const id = document.createElement('h3')
    id.textContent = filme.id

    const nome = document.createElement('h3')
    nome.textContent = filme.nome

    idNome.replaceChildren(id, nome)

    const preco = document.createElement('h3')
    preco.innerHTML = filme.valor_unitario

    const containerGenero = document.createElement('div')
    containerGenero.classList.add('flex')

    const genero = document.createElement('h3')
    const generosArray = []
    filme.genero[0].forEach(genero => {
        generosArray.push(genero.nome)
    })

    console.log(generosArray)
    genero.textContent = generosArray.join("/")

    containerGenero.appendChild(genero)

    const dataLancamento = document.createElement('h3')
    dataLancamento.textContent = filme.data_lancamento.split('T')[0]

    const botoes = document.createElement('div')
    botoes.classList.add('flex', 'gap-3')

    const editar = document.createElement('a')
    editar.href = '../editFilme.html'
    editar.addEventListener('click', () => {
        localStorage.setItem('idFilme', filme.id)
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
        deletarFilme(filme.id)
        window.location.reload()
    })

    botoes.replaceChildren(editar, excluir)

    containerFilme.replaceChildren(idNome, preco, containerGenero, dataLancamento, botoes)

    container.appendChild(containerFilme)
}

async function carregarFilmes() {
    let filmes = await listarFilmes()
    filmes.forEach(filme => {
        criarFilme(filme)
    });
}

await carregarFilmes()