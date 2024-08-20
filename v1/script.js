
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let body = document.querySelector('body')

btn.onclick = () => {
    mudar()
}

function mudar(){
    btn.textContent = 'Entrar'
    body.style.backgroundColor = '#000'
}

btn.onclick = () => {
    btn.textContent = 'Entrar'
    btn.setAttribute('id', 'entrar')
    h1.textContent = 'Login ?'
}
