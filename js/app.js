// * ==================== * //
// * ====== SCROLL ====== * //
// * ==================== * //

window.addEventListener("scroll", () =>{ 
    const historyText = document.querySelectorAll(".history__text")
    const historyFigure = document.querySelectorAll(".history__figure")
    const btnToTop = document.querySelector(".button__top")

    // ! destructuring de l'objet "documentElement" pour créer les constantes "scrollTop" et "clientHeight"
    const {scrollTop, clientHeight} = document.documentElement

    for(let i = 0; i < historyText.length; i++) {
        const historyTextTop = historyText[i].getBoundingClientRect().top
        if (scrollTop > (scrollTop + historyTextTop - clientHeight * 0.90)) {
        historyText[i].classList.add("active__text")
        } else {
            historyText[i].classList.remove("active__text")
        }
    }
    for(let i = 0; i < historyFigure.length; i++) {
        const historyFigureTop = historyFigure[i].getBoundingClientRect().top
        if (scrollTop > (scrollTop + historyFigureTop - clientHeight * 0.70)) {
        historyFigure[i].classList.add("active__figure")
        } else {
            historyFigure[i].classList.remove("active__figure")
        }
    }

    // * button scroll top
    if (scrollTop > clientHeight * 0.5) {
        btnToTop.classList.add("top--active")
    } else if (scrollTop < clientHeight * 0.1) {
        btnToTop.classList.remove("top--active")
    }

    btnToTop.addEventListener("click", () => {
        scrollTo(0,0)
    }
    )
    
})

// * ==================== * //
// * ====== SLIDER ====== * //
// * ==================== * //


const imgSlide = document.querySelectorAll(".picture__image")
const previous = document.querySelector(".btns__arrow--left")
const next = document.querySelector(".btns__arrow--right")
const newPrice = document.querySelector(".price__new")
const oldPrice = document.querySelector(".price__old")
// pour partir de l'image à l'index 0
index = 0

next.addEventListener("click", nextback)
previous.addEventListener("click", nextback)

function nextback() {
    if(index < imgSlide.length-1) {
        imgSlide[index].classList.remove("picture--active")
        index++
        imgSlide[index].classList.add("picture--active")
        newPrice.textContent = "159 €"
        oldPrice.textContent = "184,99€"
    } else if (index === imgSlide.length-1) {            
        imgSlide[index].classList.remove("picture--active")
        index = 0
        newPrice.textContent = "169 €"
        oldPrice.textContent = "199,99€"
        imgSlide[index].classList.add("picture--active")
    }}



// * ==================== * //
// * ======== NAV ======= * //
// * ==================== * //

const navbarMenu = document.querySelector(".navbar__menu")
const navbarList = document.querySelector(".navbar__list")

navbarMenu.addEventListener("click", () => {
    navbarList.classList.toggle("menu--active")
    // ! si width de window < ou = a 565 px
    if(window.innerWidth < 565){
        // ! quand toggle actif, body overflow-y hidden sinon visible
        document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "visible" : "hidden"

        // * pour empecher que l'overflow cache le menu
        document.querySelector("header").style.overflow = document.querySelector("header").style.overflow === "visible" ? "hidden" : "visible"
    }

    // * retirer le menu quand un lien est cliqué 
    const navbarLink = document.querySelectorAll(".navbar__link")

    navbarLink.forEach(link => {
        link.addEventListener("click", () => {
            navbarList.classList.remove("menu--active")
            document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "visible" : "hidden"
            document.querySelector("header").style.overflow = document.querySelector("header").style.overflow === "visible" ? "hidden" : "visible"
        })
    });

})

// * ==================== * //
// * ==== NIGHT MODE ==== * //
// * ==================== * //

const body = document.querySelector("body")
const main = document.querySelector("main")
const historyText = document.querySelectorAll(".history__text")
const historyFigure = document.querySelectorAll(".history__figure")
const darkMode = document.querySelector(".switch__dark")
const lightMode = document.querySelector(".switch__light")

darkMode.addEventListener("click", () => {
    body.classList.toggle("body__dark--mode")
    main.classList.toggle("main__dark--mode")

    historyText.forEach(text => {
        text.classList.toggle("text__light--mode")
        text.classList.toggle("text__dark--mode")
    })
    
    historyFigure.forEach(figure => {
        figure.classList.toggle("figure__light--mode")
        figure.classList.toggle("figure__dark--mode")
    })

    lightMode.style.display = "block"
    darkMode.style.display = "none"
})

lightMode.addEventListener("click", () => {
    body.classList.toggle("body__dark--mode")
    main.classList.toggle("main__dark--mode")

    historyText.forEach(text => {
        text.classList.toggle("text__light--mode")
        text.classList.toggle("text__dark--mode")
    })
    
    historyFigure.forEach(figure => {
        figure.classList.toggle("figure__light--mode")
        figure.classList.toggle("figure__dark--mode")
    })

    lightMode.style.display = "none"
    darkMode.style.display = "block"
})