import initMenuDropdown from './menuDropdown.js'

export default function initMenuMobile(){

}

const buttonMenu = document.querySelector('.button-menu')
const listMenu = document.querySelector('#menu')

buttonMenu.addEventListener('click', openMenu)

function openMenu(){
    
    listMenu.classList.toggle('active')
    buttonMenu.classList.toggle('active')
    
}



