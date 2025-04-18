const myObserver = new IntersectionObserver( (animacao) => {
    animacao.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }    
    })
})

const imagem = document.querySelectorAll('.hamiltonFoto')

imagem.forEach( (imagem) => myObserver.observe(imagem))