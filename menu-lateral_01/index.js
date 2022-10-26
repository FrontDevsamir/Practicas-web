

let list_elements = document.querySelectorAll('.list__button--click')

list_elements.forEach(element => {
    element.addEventListener('click', e => {
        element.classList.toggle('arrow')
        let height = 0
        let menu = element.nextElementSibling
        console.log(menu.clientHeight)
        if (menu.clientHeight == '0') {
            height = menu.scrollHeight
        }

        menu.style.height = `${height}px`
    })
})




let icon_menu = document.getElementById('icon-menu')
icon_menu.addEventListener('click', e => {
    let nav = document.getElementById('nav')

    let width = nav.clientWidth
    
    
    if (width == 0) {
        width = screen.width > 350 ? "350px" : "100%"
    }

    else 
    {
        width = 0
    }
    
    nav.style.width = width

    if (width == 0) {
        icon_menu.style.transform = "translateX(50px)"
    }

    else {
        icon_menu.style.transform = "translateX(0)"
    }


})