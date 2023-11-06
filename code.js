let btnOpen = document.getElementById('open')
let btnClose = document.getElementById('close')
let container = document.querySelector('.container')

btnClose.onclick = function(){
    btnOpen.classList.remove('hide')
    this.classList.add('hide')
    container.classList.add('hide')
}
btnOpen.onclick = function(){
    btnClose.classList.remove('hide')
    this.classList.add('hide')
    container.classList.remove('hide')
}