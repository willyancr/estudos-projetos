
export default function initMenuDropdown(){

    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    
    
    dropdownMenus.forEach(menu => {
        //eventos de click e touch click pra mobile
        ['click','touchstart'].forEach(usedEvent => {
            menu.addEventListener(usedEvent, handleMenu)
        })
    })
    function handleMenu(event){
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this, () => {
            this.classList.remove('active')
        })
    }
    function outsideClick(element, callback){
        const html = document.documentElement
        
        html.addEventListener('click', clickHTML)
        function clickHTML(event){
            if(!element.contains(event.target))
            callback()
        }
    }
}



