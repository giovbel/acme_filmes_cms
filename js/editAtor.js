'use strict'

import { atualizarAtor, listarNacionalidade, listarAtorId } from "./endpoints.js"


const id = localStorage.getItem('idAtor')
const ator = await listarAtorId(id)
console.log(ator)

const botaoAtualizar = document.getElementById('criar')

    const nome = document.getElementById("nome")
    const nome_artistico = document.getElementById("nomeArtistico")
    const data_nascimento = document.getElementById("data_nascimento")
    const data_falecimento = document.getElementById("data_falecimento")
    const biografia = document.getElementById("biografia")
    const foto = document.getElementById("foto")
    const divFoto = document.getElementById("divFoto")
    const nacionalidadeSelect = document.getElementById("nacionalidade")
    
    
    async function preencherNacionalidade() {
        const nacionalidades = await listarNacionalidade()
        nacionalidades.forEach(nacionalidade => {
            const option = document.createElement('option')
            option.textContent = nacionalidade.gentilico
            option.value = nacionalidade.id

            if(nacionalidade.id == ator.nacionalidade[0].id){
                console.log(option)
                option.selected = true
            }

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
    

    async function preencherAtor() {

        nome.value = ator.nome
        nome_artistico.value = ator.nome_artistico
        data_nascimento.value = ator.data_nascimento.split('T')[0]
        data_falecimento.value = ator.data_falecimento
        biografia.value = ator.biografia
        foto.value = ator.foto
        divFoto.style.backgroundImage = `url('${foto.value}')`
    }

    async function alterarAtor() {
        const atorAlterado = {
            "nome": nome.value,
            "nome_artistico": nome_artistico.value,
            "biografia": biografia.value,
            "data_nascimento": data_nascimento.value,
            "data_falecimento": data_falecimento.value,
            "foto": foto.value,
            "nacionalidade": await nacionalidadeEscolhida()
        }


        await atualizarAtor(atorAlterado, id)
        window.location.reload()
    }
 
    
    
    botaoAtualizar.addEventListener('click', alterarAtor)

    preencherNacionalidade()
    preencherAtor()