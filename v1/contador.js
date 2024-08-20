var sum = document.querySelector('#sum')
var sub = document.querySelector('#sub')

sum.onclick = () => {
    var input = document.querySelector('input')

    if(!input.value) { alert('digite um valor'); return false }
    if(input){
        var display = document.querySelector('h3').textContent = input.value
        input.value = ""
    }
}
sub.onclick = () => {
    var input = document.querySelector('input')

    if(!input.value) { alert('digite um valor'); return false }
    if(input.value > 0){
        var display = document.querySelector('h3').textContent -= input.value
        input.value = ""
    }else{
        alert('precisa digitar um numero maior que ZERO')
    }
}