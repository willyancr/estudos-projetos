import initMenuDropdown from './menuDropdown.js'

export default function initMenuMobile(){

    const buttonMenu = document.querySelector('.button-menu')
    const listMenu = document.querySelector('#menu')
    
    buttonMenu.addEventListener('click', toggleMenu)
    
    function toggleMenu(){
        
        listMenu.classList.toggle('active')
        buttonMenu.classList.toggle('active')
    
    }
    //verificar se clicou fora do botão e lista do menu
    document.addEventListener('click', function(event){
        let isListMenu = listMenu.contains(event.target)
        let isButtonMenu = buttonMenu.contains(event.target)
    
        if(!isListMenu && !isButtonMenu){
           listMenu.classList.remove('active')
           buttonMenu.classList.remove('active')
        }
    })
}




