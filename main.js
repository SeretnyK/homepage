console.log('Siema, widze że patrzysz w konsole! 😊');
const name = 'Kacper Seretny';
const age = '75';
let kacper = null;
console.log(name, age);
console.log(age);


console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('Witaj 👌');

const heading = document.querySelector('.heading');

console.log(heading);

const paragraphs = document.querySelectorAll('.p');

console.log(paragraphs);
console.log(paragraphs[0]);


const paragraph__js = document.querySelector('.paragraph__js')
paragraph__js.innerHTML = `Nazywam się <strong>${name}</strong> i mam<strong> ${age}</strong> lat`

if (age < 20) {
  console.log('masz mniej niż 20 lat');
} else if ((age >= 20 && age <= 30)) {
  console.log('masz wiecej niż 20 lat ale mniej niż 30')
} else {
  console.log('jesteś 31+');
}


switch (age) {
  case 21:
    console.log('masz równo 21 lat')
    break;
  case 30:
    console.log('masz równo 30 lat')
    break;
  default:
    console.log(`masz równo ${age} lat`);
    break;
}



let oldIndicator;

if (age > 70) {
  oldIndicator = 'yes';
} else {
  oldIndicator = 'no'
}



const amIOld = (age > 70) ? 'yes' : 'no'
console.log(amIOld);


function calculate(x) {
  x = x + 3;
  console.log(`tradycyjnie ${x}`);
  return x * 7
}

calculate(1);

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);


const calculateFat = x => (x + 3) * 7;

console.log(calculateFat(2))

const welcome = (imie, wiek) => {
  console.log(`Witaj ${imie}, masz ${wiek} lat!`);
}

//welcome('maciek', 31)

const imie = `maciek`
const wiek = `31`

welcome(imie, wiek);

// 1 sposob

const button = document.querySelector('.heading__button--js2');
console.log(button)

function handleClick() {
  console.log('halo')
}

button.addEventListener('click', handleClick);

// 2 sposób

const button2 = document.querySelector('.heading__button--js3')
console.log('halo arrow function')

button2.addEventListener('click', (e) => {
  console.log(e)
  console.log('hello arrow')
});



// ZMIANA TRESCI NAGŁÓWKA

const button3 = document.querySelector('.heading__button--js1');
console.log(button3)

button3.addEventListener('click',(e) => {
  const header = document.querySelector('.heading__js')
  header.innerHTML = 'klik, klik'
  alert('po przycisnieciu zmieni sie nagłówek')
});

