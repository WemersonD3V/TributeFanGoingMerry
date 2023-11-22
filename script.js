let num = 1

let menuButton = document.querySelector('div.menu_hamb')
let menuOpen = document.querySelector("header nav ul")
let buttonImage = document.querySelector('.curiosity_imgGroup figure button')


document.querySelectorAll('header nav ul a').forEach(item => {
    item.addEventListener("click", () => {
        if(window.innerWidth < 769 ){
          
            menuOpen.style.display = 'none'
        }
    })
})

menuButton.addEventListener("click", () => {
    if (menuOpen.style.display === '' || menuOpen.style.display === 'none') {
        menuOpen.style.display = 'flex'
    } else {
        menuOpen.style.display = 'none'
    }
})

buttonImage.addEventListener('click', () => {
    let img = document.querySelector(".curiosity_imgGroup figure img")
    let captionimg = document.querySelector(".curiosity_imgGroup figure figcaption")

    
    if (num < 4) {
        num++

    } else {
        num = 1
    }

    img.setAttribute('src', `imagens/curiosidade${num}.jpg`)
    
    switch (num) {
        case 1:
            captionimg.innerHTML = 'Primeira Apariçao no Anime.';
            break;
        case 2:
            captionimg.innerHTML = 'Todo Remendado por Ussop em sua tentativa frustante de consertar o <strong>Merry.</strong>';
            break;
        case 3:
            captionimg.innerHTML = 'O <strong>Merry</strong> em Tamanho Real.';
            break;
        case 4:
            captionimg.innerHTML = 'Estrutura do <strong>Merry</strong>.';
            break;

    }

})
