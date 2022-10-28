


// ...AQUI SE MUESTRA LAS SUBLISTAS
let list_elements = document.querySelectorAll('.list__button--click')

list_elements.forEach(element => {
    element.addEventListener('click', e => {
        element.classList.toggle('arrow')
        let height = 0
        let menu = element.nextElementSibling

        if (menu.clientHeight == '0') {
            height = menu.scrollHeight
            menu.style.transform = 'scaleY(1)'
        }

        else 
        {
            menu.style.transform = 'scaleY(0)'
        }

        menu.style.height = `${height}px`
    })
})




// ...AQUI SE OCULTA O MUESTRA EL NAV

let icon_menu = document.getElementById('icon-menu')
icon_menu.addEventListener('click', e => {
    let nav_list = document.getElementById('nav_list')
    let list_container = document.getElementById('list_container')

    let width = nav_list.clientWidth
    let p_left = 0
    let p_right = 0

    let icon = document.getElementById('icon')
    
    
    if (width == 0) {
        width = "100%"
        p_left = "1.5em"
        p_right = "1.5em"
        icon.classList = []
        icon.classList.add('fa-solid', 'fa-rectangle-xmark', 'icon')
        icon_menu.style.transform = "translateX(0)"
    }

    else 
    {
        width = 0
        // p_left = 0
        // p_right = 0
        icon_menu.style.transform = "translateX(80px)"
        icon.classList = []
        icon.classList.add('fa-solid', 'fa-bars', 'icon')
    }
    
    nav_list.style.width = width
    list_container.style.paddingLeft = p_left
    list_container.style.paddingRight = p_right


})