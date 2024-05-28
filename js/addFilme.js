'use strict'

import { listarClassificacoes, listarGeneros, listarNacionalidade, listarAtores, listarDiretores, cadastrarFilme } from "./endpoints.js"

const botaoCriar = document.getElementById('criar')


async function criarFilme() {
    const titulo = document.getElementById("titulo")
    const valor_unitario = document.getElementById("preco")
    const duracao = document.getElementById("duracao")
    const data_lancamento = document.getElementById("data_lancamento")
    const data_relancamento = document.getElementById("data_relancamento")
    const sinopse = document.getElementById("sinopse")
    const capa = document.getElementById("capa")
    const fundo = document.getElementById("fundo")

    const novoFilme = {    
    "nome": titulo.value,
    "sinopse": sinopse.value,
    "duracao": duracao.value,
    "data_lancamento": data_lancamento.value,
    "data_relancamento": data_relancamento.value,
    "foto_capa": capa.value,
    "foto_fundo": fundo.value,
    "valor_unitario": valor_unitario.value,
    "classificacao_id": await classificacaoEscolhida(),
    "genero_id": await generoEscolhido(),
    "nacionalidade_id": await nacionalidadeEscolhida(),
    "ator": await elencoEscolhido(),
    "diretor": await diretorEscolhido()}

    console.log(novoFilme)
    await cadastrarFilme(novoFilme)
}


const generoSelect = document.getElementById("genero")
const classificacaoSelect = document.getElementById("classificacao")
const nacionalidadeSelect = document.getElementById("nacionalidade")
const elencoSelect = document.getElementById("elenco")
const diretorSelect = document.getElementById("diretor")

async function preencherClassificacao() {
    const classificacoes = await listarClassificacoes()
    console.log(classificacoes)
    classificacoes.forEach(classificacao => {
        const option = document.createElement('option')
        option.textContent = classificacao.nome
        option.value = classificacao.id
        classificacaoSelect.appendChild(option)
    });
}

async function preencherGenero() {
    const generos = await listarGeneros()
    console.log(generos)
    generos.forEach(genero => {
        const option = document.createElement('option')
        option.textContent = genero.nome
        option.value = genero.id
        generoSelect.appendChild(option)
    });
}

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

async function preencherElenco() {
    const atores = await listarAtores()
    atores.forEach(ator => {
        const option = document.createElement('option')
        option.textContent = ator.nome
        option.value = ator.id
        elencoSelect.appendChild(option)
    });
}

async function preencherDiretores() {
    const diretores = await listarDiretores()
    diretores.forEach(diretor => {
        const option = document.createElement('option')
        option.textContent = diretor.nome
        option.value = diretor.id
        diretorSelect.appendChild(option)
    });
}

async function generoEscolhido() {
    const generos = generoSelect.querySelectorAll('option')
    let id 
    generos.forEach( genero => {
        if(genero.selected){
            id = Number(genero.value)
        }
    })
    return id
}

async function classificacaoEscolhida() {
    const classificacoes = classificacaoSelect.querySelectorAll('option')
    let id 
    classificacoes.forEach( classificacao => {
        if(classificacao.selected){
            id = Number(classificacao.value)
        }
    })
    return id
}

async function elencoEscolhido() {
    const elenco = elencoSelect.querySelectorAll('option')
    let ids = [] 
    elenco.forEach( ator => {
        if(ator.selected){
            ids.push(Number(ator.value))
        }
    })
    return ids
}

async function diretorEscolhido() {
    const diretores = diretorSelect.querySelectorAll('option')
    let ids = [] 
    diretores.forEach( diretor => {
        if(diretor.selected){
            ids.push(Number(diretor.value))
        }
    })
    return ids
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


botaoCriar.addEventListener('click', criarFilme)

preencherGenero()
preencherClassificacao()
preencherElenco()
preencherNacionalidade()
preencherDiretores()