const catNames = ["Django", "Luna", "Booboo", "gusto", "clea", "sofi"];
const lastName = ["Litton"];

let newArray = [];

for (let i = 0; i < catNames.length; i++) {
  const fullName = `${catNames[i]} ${lastName}`;
  newArray.push(fullName);
  // console.log(fullName);
}

// Expenses Function

const gas = [30, 45, 40, 65];
const food = [80, 75, 100];

function calculateTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});
