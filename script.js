var altura = 0
var largura = 0
var vida = 1


function AjustarTamanhoDoPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth
    console.log(altura, largura)
}
AjustarTamanhoDoPalco();
function PosicaoRandomica(){
    if(document.getElementById("mosquito")){
    document.getElementById("mosquito").remove()

        if(vidas > 3){
        window.location.href = "fim_de_jogo.html"
        }
        else{
        document.getElementById("v" + vidas).scr = "imagens/coracao_vazio.png"
        vida++
        }

    }
    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaoy, posicaox)

    var mosquito = document.createElement("img")
    mosquito.src = "imagens/mosca.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaox + "px"
    mosquito.style.top = posicaoy + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
        
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0:
                return "LadoA"
            case 1:
                return "LadoB"
        }
}