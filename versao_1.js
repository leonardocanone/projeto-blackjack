/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */

console.log("Bem-vindo(a) ao jogo de blackjack");

let novaRodada = confirm("Quer iniciar uma nova rodada?")

if (novaRodada) {

   const cartaUsuario1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();
   const cartaPc1 = comprarCarta();
   const cartaPc2 = comprarCarta();

   let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   let somaPc = cartaPc1.valor + cartaPc2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${somaUsuario}`)
   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - ${somaPc}`)  


   if (somaUsuario > somaPc && somaUsuario <= 21) {
   console.log("O usuário ganhou!");
   
   } else if (somaUsuario > 21 && somaPc <= 21) {
   console.log("O computador ganhou!");
   
   } else if (somaPc > somaUsuario && somaPc <= 21) {
   console.log("O computador ganhou!");
   
   } else if (somaPc > 21 && somaUsuario <= 21){
   console.log("O usuário ganhou!");

   } else if (somaUsuario === somaPc){
   console.log("Deu empate!");

   } else {
   console.log("Ambos perderam!");      
   }

} else {
   console.log("O jogo acabou!");
}