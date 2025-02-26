const animin = document.querySelector("#um")
const animout = document.querySelector("#dois")
let divUm = document.querySelector("#divUm")
let divDois = document.querySelector("#divDois")

animin.addEventListener("click", animationin)
animout.addEventListener("click", animationout)


function animationin(){
//     div.classList.remove('animate__flipOutY')
//     div.classList.add('animate__flipOutY')
divUm.classList.add('esconder')
divDois.classList.remove('esconder')
 }
function animationout() {
    // setTimeout(function(){
    //     divUm.classList.add('esconder')
    // }, 1100)
    divDois.classList.add('esconder')
    divUm.classList.remove('esconder')


}