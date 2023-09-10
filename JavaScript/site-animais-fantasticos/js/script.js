
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
tabContent[0].classList.add('ativo')

//verifica se existem as classes
if(tabMenu.length && tabContent.length){
    
    //evento de click na lista de animais
    tabMenu.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            activeSection(index)
        })
    })
    //função para add ou remover as sections de animals description
    function activeSection(index){
        tabContent.forEach(element => {
            element.classList.remove('ativo')
        });
        tabContent[index].classList.add('ativo')
    }
}



 