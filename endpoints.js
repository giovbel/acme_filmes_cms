'use strict'

export async function listarFuncionarios () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/funcionarios'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.Funcionarios
} 


//////////////FILMES///////////////////

export async function listarFilmes () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.filmes
} 

export async function listarFilmeId (id) {
    const url = 'http://localhost:8080/v2/AcmeFilmes/filme/'+ id
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
} 

export async function cadastrarFilme (filme) { //pedir autorização para usar a API
    const url = 'http://localhost:8080/v2/AcmeFilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(filme) //transformar o objeto em um string
    }
    const response = await fetch(url, options)
    console.log(response.json())
    return response
}


export async function atualizarFilme (filme){
    const url = `http://localhost:8080/v2/AcmeFilmes/filme/${filme.id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response
}


export async function deletarFilme (id) {
    const url = `http://localhost:8080/v2/AcmeFilmes/filme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response
}

//////////////CLASSIFICACOES///////////////////

export async function listarClassificacoes () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.classificacoes
} 

//////////////GENEROS///////////////////

export async function listarGeneros () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/generos'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.generos
} 

//////////////NACIONALIDADES///////////////////

export async function listarNacionalidade () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/nacionalidades'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.nacionalidade
}

//////////////ATORES///////////////////

export async function listarAtores () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/atores'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.atores
}

//////////////DIRETORES///////////////////

export async function listarDiretores () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/diretores'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.diretores
}

