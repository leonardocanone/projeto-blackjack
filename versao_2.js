/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */

// console.log("Bem-vindo(a) ao jogo de blackjack");

let novaRodada = confirm(`Bem-vindo(a) ao jogo de Blackjack! \nQuer iniciar uma nova rodada?`)

if (novaRodada) {

   let cartasUsuario = []
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   cartasUsuario.push(cartaUsuario1.texto)
   cartasUsuario.push(cartaUsuario2.texto)
   
   let pontosUsuario = []
   pontosUsuario.push(cartaUsuario1.valor)
   pontosUsuario.push(cartaUsuario2.valor)

   // ################
   let cartasComputador = []
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()
   cartasComputador.push(cartaComputador1.texto)
   cartasComputador.push(cartaComputador2.texto)
   
   let pontosComputador = []
   pontosComputador.push(cartaComputador1.valor)
   pontosComputador.push(cartaComputador2.valor)

   // console.log(cartasUsuario);
   // console.log(pontosUsuario);   
   // console.log(cartasComputador);
   // console.log(pontosComputador);

   // ################
   if ((cartaUsuario1.valor === 11 && cartaUsuario2.valor === 11) ||
      (cartaComputador1.valor === 11 && cartaComputador2.valor === 11)){
      
      let cartasUsuario = []
      let cartaUsuario1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
      cartasUsuario.push(cartaUsuario1.texto)
      cartasUsuario.push(cartaUsuario2.texto)
         
      let cartasComputador = []
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()
      cartasComputador.push(cartaComputador1.texto)
      cartasComputador.push(cartaComputador2.texto)
   
    }

   // ################
   let somaUsuario = 0
   for(let i = 0; i < pontosUsuario.length; i++){
      somaUsuario += pontosUsuario[i] 
   } 
   // console.log(somaUsuario);

   let somaPc = 0
   for(let j = 0; j < pontosComputador.length; j++){
      somaPc += pontosComputador[j]
   } 
   // console.log(somaPc);

   // ################

   let mensagem = confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}. \nDeseja comprar mais uma carta?`);

   // ################

   while (mensagem) {
      
      let novaCartaUsuario = comprarCarta();
      cartasUsuario.push(novaCartaUsuario.texto);
      pontosUsuario.push(novaCartaUsuario.valor);
  
      somaUsuario = 0;
      for (let i = 0; i < pontosUsuario.length; i++) {
        somaUsuario += pontosUsuario[i];
      }
      // console.log(somaUsuario);
  
      if (somaUsuario >= 21) {
        break;
      }
  
      mensagem = confirm(`Suas cartas são ${cartasUsuario.join(` `)}. A carta revelada do computador é ${cartasComputador[0]}. \nDeseja comprar mais uma carta?`);
    }

   // ################

    while (somaPc <= 19) {
      
      let novaCartaComputador = comprarCarta();
      cartasComputador.push(novaCartaComputador.texto);
      pontosComputador.push(novaCartaComputador.valor);
  
      somaPc = 0;
      for (let j = 0; j < pontosComputador.length; j++) {
        somaPc += pontosComputador[j];
      }
      
      if (somaPc >= 21) {
         break;
       }
   }
   
  
   // ################
   let resultado = ``
   
   if (somaUsuario > 21 && somaPc > 21) {
      resultado = `Ambos perderam`;
      
      } else if (somaUsuario > somaPc && somaUsuario <= 21) {
      resultado = `O usuário ganhou!`;   

      } else if (somaUsuario > 21 && somaPc <= 21) {
      resultado = `O computador ganhou!`;
      
      } else if (somaPc > somaUsuario && somaPc <= 21) {
      resultado = `O computador ganhou!`;
      
      } else if (somaPc > 21 && somaUsuario <= 21){
      resultado = `O usuário ganhou!`;
   
      // } else if (somaUsuario === somaPc){
      // resultado = `Deu empate!`;
   
      } else {
      resultado = `Deu empate!`;      
      }

   // ################
   alert(`Usuario - Cartas: ${cartasUsuario.join(` `)} - Pontuação: ${somaUsuario} \nComputador - Cartas: ${cartasComputador.join(` `)} - Pontuação: ${somaPc} \n${resultado}`)
   
   // ################
} else {
   alert("O jogo acabou!");
}




    