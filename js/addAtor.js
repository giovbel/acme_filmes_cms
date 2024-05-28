'use strict'

import { listarNacionalidade, cadastrarAtor } from "./endpoints.js"

const botaoCriar = document.getElementById('criar')

console.log(botaoCriar)

async function criarAtor() {
    const nome = document.getElementById("nome")
    const nomeArtistico = document.getElementById("nomeArtistico")
    const data_nascimento = document.getElementById("data_nascimento")
    const data_falecimento = document.getElementById("data_falecimento")
    const biografia = document.getElementById("biografia")
    const foto = document.getElementById("foto")

    const novoAtor = {    
    "nome": nome.value,
    "nome_artistico": nomeArtistico.value,
    "biografia": biografia.value,
    "data_nascimento": data_nascimento.value,
    "data_falecimento": data_falecimento.value,
    "foto": foto.value,
    "nacionalidade": await nacionalidadeEscolhida()
}

    console.log(novoAtor)
    await cadastrarAtor(novoAtor)
}


const nacionalidadeSelect = document.getElementById("nacionalidade")

async function preencherNacionalidade() {
    const nacionalidades = await listarNacionalidade()
    console.log(nacionalidades)
    nacionalidades.forEach(nacionalidade => {
        const option = document.createElement('option')
        option.textContent = nacionalidade.gentilico
        option.value = nacionalidade.id
        nacionalidadeSelect.appendChild(option)
    });
}

async function nacionalidadeEscolhida() {
    const nacionalidades = nacionalidadeSelect.querySelectorAll('option')
    let ids = [] 
    nacionalidades.forEach( nacionalidade => {
        if(nacionalidade.selected){
            ids.push(Number(nacionalidade.value))
        }
    })
    return ids
}


botaoCriar.addEventListener('click', criarAtor)

preencherNacionalidade()