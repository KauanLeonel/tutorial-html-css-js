              <script>
                    function Soma(num1, num2, resu){
                        resu = num1 + num2;
                        return resu
                    }
                    function Subtracao(num1, num2, resu){
                        const num1 = document.getElementById('num1')
                        const num2 = document.getElementById('num2')
                        var resu = document.getElementById('resu')
                        resu = num1 - num2;
                        return resu;
                    }
                    function MudarCor(){
                        const cortexto = document.getElementById('cortexto')
                        Cor.style.background = document.getElementById('cortexto').value
                    }
                </script>

<input type="text" id= "txtinput">


<input type="text" id= "txtinput">

<button onclick="mudar()"> TESTE</button>
<button onclick="pegarTexto()"> PEGAR TEXTO</button>

<div id="resultado"></div>
<script>
const logo = document.getElementById('logo')
console.log ("AAAAAA")
console.log (logo)
//logo.style.backgroundColor = "#FFF"
//logo.innerHTML = '<p>NovoLogo'
//logo.innerHTML += '<p>Novo LOGO'
    let coratual = 'preto'
const mudar = () => {
    const logo = document.getElementById('logo')
    const logocolor = logo.style.background
    if (coratual === 'preto'){
        logo.style.backgroundColor = "#FFF"
        coratual = "branco"
    }
    else{
        logo.style.backgroundColor = "#000"
        coratual = "preto"
    }
    //logo.style.backgroundColor = "#FFF"
    console.log ('Clicado...')
}

function pegarTexto (){
    const txtinput = document.getElementById('txtinput')
    const resultado= document.getElementById('resultado')

    resultado.innerHTML = `<p>${txtinput.value}<p>` 

}