'use strict'

import { atualizarDiretor, listarNacionalidade, listarDiretorId } from "./endpoints.js"


const id = localStorage.getItem('idDiretor')
const diretor = await listarDiretorId(id)


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

            if(nacionalidade.id == diretor.nacionalidade[0].id){
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
    

    async function preencherDiretor() {

        nome.value = diretor.nome
        nome_artistico.value = diretor.nome_artistico
        data_nascimento.value = diretor.data_nascimento.split('T')[0]
        data_falecimento.value = diretor.data_falecimento
        biografia.value = diretor.biografia
        foto.value = diretor.foto
        divFoto.style.backgroundImage = `url('${foto.value}')`
    }

    async function alterarDiretor() {
        const diretorAlterado = {
            "nome": nome.value,
            "nome_artistico": nome_artistico.value,
            "biografia": biografia.value,
            "data_nascimento": data_nascimento.value,
            "data_falecimento": data_falecimento.value,
            "foto": foto.value,
            "nacionalidade": await nacionalidadeEscolhida()
        }


        await atualizarDiretor(diretorAlterado, id)
        window.location.reload()
    }
 
    
    
    botaoAtualizar.addEventListener('click', alterarDiretor)

    preencherNacionalidade()
    preencherDiretor()