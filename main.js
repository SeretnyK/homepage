console.log('Siema, wiedze że patrzysz w konsole! 😊');
const name='Kacper Seretny';
const age= '21';
let kacper = null;
console.log(name);
console.log(age);


console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('Witaj 👌');

const heading = document.querySelector('.heading');

console.log(heading);

const paragraphs = document.querySelectorAll('.p');

console.log(paragraphs);
console.log(paragraphs[0]);


const paragraph__js = document.querySelector('.paragraph__js')

console.log(paragraph__js.innerHTML)

paragraph__js.innerHTML = `Nazywam się <strong>${name}</strong> i mam<strong> ${age}</strong> lat`