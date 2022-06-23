let passos = prompt("Digite quantos passos andou")

function casasVisitadas(distancia) {
    let contador = 1

    if(distancia < 0) {
        alert("Eliminado!")
    }else{
        while(contador < distancia){
            contador++
        }
        alert(`Visitei a ${contador}ª casa`)
    }
}

console.log(casasVisitadas(passos))