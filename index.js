window.onload = function(){
    var btn1 = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    btn1.addEventListener('click',pageRedirect)
    btn2.addEventListener('click',pageRedirect)
    btn3.addEventListener('click',pageRedirect)
}

function pageRedirect(){
    location.href = "detailPage.html"
}
