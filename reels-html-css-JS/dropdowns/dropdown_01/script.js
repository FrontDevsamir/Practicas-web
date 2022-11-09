


let toogle = document.querySelector('.icon--toogle')
toogle.addEventListener('click', () => {

    if (toogle.classList.contains('fa-toggle-off'))
    {
        document.documentElement.style.cssText = `
            --bg: hsl(235, 25%, 18%);
            --color: #999;
            --color-hover: #BBB;
            --bg-li-hover: #212230;
    
            --shadow: 6px 6px 10px -3px hsl(235, 25%, 15%),
            -6px -6px 10px -3px hsl(235, 25%, 21%);
            --shadow-active: 3px 3px 2px hsl(235, 25%, 21%),
                     -3px -3px 2px  hsl(235, 25%, 21%);
        `
        toogle.classList = []
        toogle.classList.add('fa-solid', 'fa-toggle-on', 'icon', 'icon--toogle')
    }

    else {
        document.documentElement.style.cssText = `
            --color: #335;
            --color-hover: #339;
            --bg: hsl(220, 45%, 90%);
            --bg-li-hover: hsl(220, 45%, 88%);

            --shadow: 6px 6px 20px -2px hsl(220, 43%, 80%), 
            -6px -6px 20px -2px hsl(0, 0%, 100%);
            --shadow-active: 3px 3px 2px hsl(220, 43%, 80%),
                     -3px -3px 2px  hsl(220, 43%, 80%);
        `
        toogle.classList = []
        toogle.classList.add('fa-solid', 'fa-toggle-off', 'icon', 'icon--toogle')
    }


})

