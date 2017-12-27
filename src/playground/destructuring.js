//
// Object destructuring
//

// console.log('destructuring');

// const person = {
//   name: 'Zoltan',
//   age: 30,
//   location: {
//     city: 'Budapest',
//     temp: 6
//   }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`);


// // ------------

// const book = {
//   title: "Nonviolent Communication: Language of life",
//   author: "Marshall Rosenberg",
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName); // default value: Self-Published

//
// Array destructuring
//


const address = ['Matyas kiraly street', 'Kormend', 'Vas', '9900'];

// get only the 2nd and 3rd item
const [, city, state = 'Default state'] = address;

console.log(`You are in ${city}, ${state}`);



// ----

const item = ['Water', '1', '2', '3'];

// get the 1st and 3rd item
const [itemName, , mediumcost] = item;

console.log(`A medium ${itemName} costs ${mediumcost} forints.  `)