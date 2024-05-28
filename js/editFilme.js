'use strict'

import { listarFilmeId, listarClassificacoes, listarDiretores, listarAtores, listarGeneros, listarNacionalidade, atualizarFilme } from "./endpoints.js"

const id = localStorage.getItem('idFilme')
const filme = await listarFilmeId(id)

const botaoAtualizar = document.getElementById('criar')

    const titulo = document.getElementById("titulo")
    const valor_unitario = document.getElementById("preco")
    const duracao = document.getElementById("duracao")
    const data_lancamento = document.getElementById("data_lancamento")
    const data_relancamento = document.getElementById("data_relancamento")
    const sinopse = document.getElementById("sinopse")
    const capa = document.getElementById("capa")
    const divCapa = document.getElementById("fotoCapa")
    const fundo = document.getElementById("fundo")

    const generoSelect = document.getElementById("genero")
    const classificacaoSelect = document.getElementById("classificacao")
    const nacionalidadeSelect = document.getElementById("nacionalidade")
    const elencoSelect = document.getElementById("elenco")
    const diretorSelect = document.getElementById("diretor")
    
    async function preencherClassificacao() {
        const classificacoes = await listarClassificacoes()
        classificacoes.forEach(classificacao => {
            const option = document.createElement('option')
            option.textContent = classificacao.nome
            option.value = classificacao.id

            if(classificacao.id == filme.classificacao_id){
                option.selected = true
            }

            classificacaoSelect.appendChild(option)
        });
    }
    
    async function preencherGenero() {
        const generos = await listarGeneros()
        generos.forEach(genero => {
            const option = document.createElement('option')
            option.textContent = genero.nome
            option.value = genero.id

            if(genero.id == filme.genero_id){
                option.selected = true
            }

            generoSelect.appendChild(option)
        });
    }
    
    async function preencherNacionalidade() {
        const nacionalidades = await listarNacionalidade()
        nacionalidades.forEach(nacionalidade => {
            const option = document.createElement('option')
            option.textContent = nacionalidade.gentilico
            option.value = nacionalidade.id

            if(nacionalidade.id == filme.nacionalidade_id){
                option.selected = true
            }

            nacionalidadeSelect.appendChild(option)
        });
    }
    
    const arrayAtores = [] 
    const arrayDiretores = [] 

    filme.elenco.forEach(ator => {
        arrayAtores.push(ator.id)
    })

    filme.diretores.forEach(diretor => {
        arrayDiretores.push(diretor.id)
    })


    async function preencherElenco() {
        const atores = await listarAtores()
        atores.forEach(ator => {
            const option = document.createElement('option')
            option.textContent = ator.nome
            option.value = ator.id

            if(arrayAtores.includes(ator.id)){
                option.selected = true
            }

            elencoSelect.appendChild(option)
        });
    }


    
    async function preencherDiretores() {
        const diretores = await listarDiretores()
        diretores.forEach(diretor => {
            const option = document.createElement('option')
            option.textContent = diretor.nome
            option.value = diretor.id

            
            if(arrayDiretores.includes(diretor.id)){
                option.selected = true
            }

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
    

    async function preencherFilme() {

        titulo.value = filme.nome
        valor_unitario.value = filme.valor_unitario
        duracao.value = filme.duracao.split('T')[1].split('.')[0]
        data_lancamento.value = filme.data_lancamento.split('T')[0]
        data_relancamento.value = filme.data_relancamento
        sinopse.value = filme.sinopse
        capa.value = filme.foto_capa
        fundo.value = filme.foto_fundo
        divCapa.style.backgroundImage = `url('${capa.value}')`
    }

    async function alterarFilme() {
        const filmeAlterado = {
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
            "nacionalidade_id": await nacionalidadeEscolhida()
        }


        await atualizarFilme(filmeAlterado, id)
        window.location.reload()
    }
 
    
    
    botaoAtualizar.addEventListener('click', alterarFilme)
    
    preencherGenero()
    preencherClassificacao()
    preencherElenco()
    preencherNacionalidade()
    preencherDiretores()
    preencherFilme()