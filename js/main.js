'use strict'

import {getFilmes, getFilme} from "./filmes.js"

const filmes = [
    {
        nome: "Pedro Barbosa"
    }, 
    {
        nome: "Cristiano Ronaldo"
    },
    {
        nome: "Senai e Sesi"
    }

]

function criarCard (filme) {
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const duracao = document.createElement('button')

    title.textContent = filme.nome
    duracao.textContent = filme.sinopse
    
    card.append(title, duracao)
    return card
}

async function preencherContainer () {
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard (filme)
        container.appendChild(card)
    })

}

preencherContainer()