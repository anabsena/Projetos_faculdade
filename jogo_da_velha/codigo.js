function pegaQuadrado(q){
let quadrado = document.getElementById(q)
if(quadrado.innerHTML == ""){
quadrado.innerHTML = "X"
}else if(quadrado.innerHTML == "X"){
    quadrado.innerHTML = "O"
}
else{
    quadrado.innerHTML = "X"
}
}