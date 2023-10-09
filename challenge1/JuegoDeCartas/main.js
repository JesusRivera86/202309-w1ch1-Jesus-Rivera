const deckOfCard = () => {
  const sticks = ["spades", "herts", "clover", "diamonds"];
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const words = ["J", "Q", "K", "A"];

  let deck = [];
  for (let i of sticks) {
    for (let j of numbers) {
      for (let k of words) {
        const obj = {
          sticks: i,
          numbers: j,
          words: k,
        };
        deck.push(obj);
      }
    }
  }
  return deck;
};
console.log(deckOfCard());
const array = deckOfCard();
const cardAleatori = array[Math.floor(Math.random() * array.length)];
console.log(cardAleatori);
const userCard = array[Math.floor(Math.random() * array.length)];
console.log(userCard);
if (cardAleatori > userCard) {
  console.log("La carta aleatoria es mayor que la del usuario  ");
} else if (cardAleatori === userCard) {
  console.log("Las cartas son iguales");
} else {
  console.log("La carta del usuario es mayor que la aleatoria");
}
