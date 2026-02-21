console.log('calculo do imc')

function calcularImc(peso, altura) {

    let resultado = Number(peso)/ (Number (altura)*Number  (altura))

    console.log(resultado.toFixed(2))


}

calcularImc('74', '1.69')

const nome = prompt("Qual é o seu nome?");

if (nome) {

    alert(`Olá, ${nome}!`);

} else {

    alert("Você não informou seu nome.");

}

function saudacao () {

     let nome = 'javascript'

     if ( condição ){

         console.log(nome)

     }

}




