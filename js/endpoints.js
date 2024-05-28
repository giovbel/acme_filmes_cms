'use strict'

export async function listarFuncionarios () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/funcionarios'
    const response = await fetch(url)
    const data = await response.json()
    return data.Funcionarios
} 


//////////////FILMES///////////////////

export async function listarFilmes () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
} 

export async function listarFilmeId (id) {
    const url = 'http://localhost:8080/v2/AcmeFilmes/filme/'+ id
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
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
    return response
}


export async function atualizarFilme (filme, id){
    const url = `http://localhost:8080/v2/AcmeFilmes/filme/${id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    console.log(await response.json())
    return response
}


export async function deletarFilme (id) {
    const url = `http://localhost:8080/v2/AcmeFilmes/filme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response
}

//////////////CLASSIFICACOES///////////////////

export async function listarClassificacoes () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data.classificacoes
} 

//////////////GENEROS///////////////////

export async function listarGeneros () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/generos'
    const response = await fetch(url)
    const data = await response.json()
    return data.generos
} 

//////////////NACIONALIDADES///////////////////

export async function listarNacionalidade () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/nacionalidades'
    const response = await fetch(url)
    const data = await response.json()
    return data.nacionalidade
}

export async function listarNacionalidadeId (id) {
    const url = 'http://localhost:8080/v2/AcmeFilmes/nacionalidade/'+ id
    const response = await fetch(url)
    const data = await response.json()
    return data.nacionalidade
} 

//////////////DIRETORES///////////////////

export async function listarDiretores () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/diretores'
    const response = await fetch(url)
    const data = await response.json()
    return data.diretores
} 

export async function listarAtorId (id) {
    const url = 'http://localhost:8080/v2/AcmeFilmes/diretor/'+ id
    const response = await fetch(url)
    const data = await response.json()
    return data.diretor[0]
} 

export async function cadastrarDiretor (diretor) { //pedir autorização para usar a API
    const url = 'http://localhost:8080/v2/AcmeFilmes/diretor'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(diretor) //transformar o objeto em um string
    }
    const response = await fetch(url, options)
    return response
}


export async function atualizarDiretor (diretor, id){
    const url = `http://localhost:8080/v2/AcmeFilmes/diretor/${id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }
    const response = await fetch(url, options)
    console.log(await response.json())
    return response
}


export async function deletarAtor (id) {
    const url = `http://localhost:8080/v2/AcmeFilmes/diretor/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response
}

//////////////ATORES///////////////////

export async function listarAtores () {
    const url = 'http://localhost:8080/v2/AcmeFilmes/atores'
    const response = await fetch(url)
    const data = await response.json()
    return data.atores
} 

export async function listarAtorId (id) {
    const url = 'http://localhost:8080/v2/AcmeFilmes/ator/'+ id
    const response = await fetch(url)
    const data = await response.json()
    return data.ator[0]
} 

export async function cadastrarAtor (ator) { //pedir autorização para usar a API
    const url = 'http://localhost:8080/v2/AcmeFilmes/ator'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(ator) //transformar o objeto em um string
    }
    const response = await fetch(url, options)
    return response
}


export async function atualizarAtor (ator, id){
    const url = `http://localhost:8080/v2/AcmeFilmes/ator/${id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    const response = await fetch(url, options)
    console.log(await response.json())
    return response
}


export async function deletarAtor (id) {
    const url = `http://localhost:8080/v2/AcmeFilmes/ator/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response
}