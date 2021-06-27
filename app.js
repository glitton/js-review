// array methods

//forEach, doesn't return a new array

const people = [
  { name: "bob", age: 20, profession: "software engineer" },
  { name: "susan", age: 25, profession: "web developer" },
  { name: "luna", age: 30, profession: "engineering manager" },
];

people.forEach((person) => {
  console.log(person.name, person.age, person.profession);
});
