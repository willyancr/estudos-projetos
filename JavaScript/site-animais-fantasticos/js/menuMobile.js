import initMenuDropdown from './menuDropdown.js'

export default function initMenuMobile(){

}


const buttonMenu = document.querySelector('.button-menu')
const listMenu = document.querySelector('#menu')

buttonMenu.addEventListener('click', toggleMenu)

function toggleMenu(){
    
    listMenu.classList.toggle('active')
    buttonMenu.classList.toggle('active')

}

document.addEventListener('click', function(event){
    let isListMenu = listMenu.contains(event.target)
    let isButtonMenu = buttonMenu.contains(event.target)

    if(!isListMenu && !isButtonMenu){
       listMenu.classList.remove('active')
       buttonMenu.classList.remove('active')
    }
})

// document.addEventListener('click', function(event) {
//     // Verifica se o clique não foi no botão do menu ou dentro do menu
//     if(!buttonMenu.contains(event.target) && !listMenu.contains(event.target)){
//         // Fecha o menu se estiver aberto
//         if(listMenu.classList.contains('active')){
//             toggleMenu()
//         }

//     }
// })


