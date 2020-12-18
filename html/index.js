var Btn = document.getElementById('change')
var a = 1

Btn.addEventListener('click', function() {
    a++
    var Root = document.getElementsByTagName('html')[0]
    var mode = a % 2 === 1 ? 'dark' : 'light'
    Root.setAttribute('data-color-mode', mode)
})