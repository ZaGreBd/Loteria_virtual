var numSort = []
var numEsco = []

function sortearNumeros(){
    let sort
    for(var i=0; i<6; i++){
        do{
            sort = Math.ceil(Math.random() * 60)
            sort = (sort == 0) ? 1 : sort
        }while(numSort.includes(sort))

        numSort.push(sort)
    }
    console.log(numSort)
}

function addToList(num, pos){
    if(num.length == 2){
        if(numEsco.includes(num)){
            alert("Número escolhido anteriormente. Digite outro número")
        }else if(parseInt(num)>60){
            alert("O números digitado não pode ser maior que 60")
        }else{
            numEsco[pos-1] = num
        }
    }
}

function verificarAcertos(){
    sortearNumeros()
    let cont = 0
    if(numEsco.length != 6){
        alert("A quantidade de números escolhidos é menor que 6.\n Digite 6 números de 01 a 60 com duas casas decimais")
    }else{
        for(var i=0; i<6; i++){
            if(numSort.includes(parseInt(numEsco[i]))){
                cont++
            }
        }
        printNumSort()
        document.getElementById('totalAcertos').innerHTML = "O total de acertos foi " + cont
    }
}

function printNumSort(){
    document.getElementById("numSort").innerHTML = ""
    for(var i=0; i<numSort.length; i++){
        let li = document.createElement("li")
        li.append(numSort[i])
        li.classList.add("result")
        document.getElementById("numSort").append(li)
    }
}
