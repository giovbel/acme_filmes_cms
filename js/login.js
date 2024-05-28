'use strict'

import { listarFuncionarios } from "./endpoints.js"

const email = document.getElementById("email")
const senha = document.getElementById("senha")

async function logar() {
    const funcionarios = await listarFuncionarios()
    funcionarios.forEach(funcionario => {
        if(funcionario.email == email.value && funcionario.senha == senha.value){
            window.location.assign('../home.html')
        }
    })
}

const entrar = document.getElementById("entrar")
entrar.addEventListener('click', logar)