
export function navTab(){
    
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    tabContent[0].classList.add('ativo')

    //--------NAVEGAÇÃO POR TAB--------
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
}
//navegação nos itens do FAQ
export function navAccordion(){

    const titleFaq = document.querySelectorAll('.js-accordion-faq dt') 
    const accordionFaq = document.querySelectorAll('.js-accordion-faq dd')
    const activeClass = 'ativo'
    
    if(titleFaq.length && accordionFaq.length){
        
        titleFaq[0].classList.add(activeClass)
        accordionFaq[0].classList.add(activeClass)

        titleFaq.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                
                activeDD(index)
            })
        })

        function activeDD(index){
            titleFaq[index].classList.toggle(activeClass)
            accordionFaq[index].classList.toggle(activeClass)
        }
    }
}
//navegação do menu
export function navScroll(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    linksInternos.forEach(link => {
        link.addEventListener('click', scrollToSelection)
    })

    function scrollToSelection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        
        //scroll suave
        section.scrollIntoView({behavior: "smooth", block: 'start'})

    }
}

//efeitos dos titulos no scroll
export function animationScroll(){

    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.8

    window.addEventListener('scroll', animaScroll)

    function animaScroll(){

        sections.forEach(section => {

            const sectionTop = section.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - windowMetade) < 0

            if(isSectionVisible)
                section.classList.add('ativo')
            else
                section.classList.remove('ativo')
            
        })
    }
    animaScroll()
}