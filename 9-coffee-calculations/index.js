const coffees = [2, 3, 1, 5];
const ppc = 1.25;
const init = 0;

function getTotal(coffees, ppc) {
  const total = coffees.reduce((acc, item) => acc + item * ppc, init);
  return console.log(`The total bill is $${total}`);
}

getTotal(coffees, ppc);
