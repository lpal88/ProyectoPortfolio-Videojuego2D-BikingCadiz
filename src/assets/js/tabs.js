'use strict'

const li        = document.querySelectorAll('.li')
const caja    = document.querySelectorAll('.caja')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .caja quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .caja con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{
        console.log("clicando")
        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada caja
            caja[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el caja con la misma posición le añadimos la clase activo
        caja[i].classList.add('activo')

    })
})