const animin = document.querySelector("#um")
const animout = document.querySelector("#dois")
let divUm = document.querySelector("#divUm")
let divDois = document.querySelector("#divDois")

divUm.addEventListener("mouseenter", animationIn)
divDois.addEventListener("mouseout", animationOut)


function animationIn(){
    divUm.classList.remove('animate__flipInY')
    divUm.classList.add('animate__flipOutY')
    setTimeout(function(){
        divDois.classList.remove('esconder')
        divUm.classList.add('esconder')
        divDois.classList.add('animate__flipInY')
    }, 1100)

 }




function animationOut() {
    divDois.classList.remove('animate__flipInY')
    divDois.classList.add('animate__flipOutY')
    setTimeout(function(){
        divDois.classList.add('esconder')
        divUm.classList.remove('esconder')
    }, 1100)
    divUm.classList.add('animate__flipInY')
}