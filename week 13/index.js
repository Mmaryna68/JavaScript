let name = "Ilya";

alert(`hello ${1}`); //hello 1

alert(`hello ${"name"}`); //hello name

alert(`hello ${name}`); //hello Ilya

// Задаем зарплаты в рублях
const eveningCleanerSalary = 40000;
const vocalTeacherSalary = 22000;
const totalSalary = eveningCleanerSalary + vocalTeacherSalary;
console.log(totalSalary); //62000

const word = "Владивосток";
const number = 2000;
const songTitle = word + " " + number;

console.log(songTitle); //Владивосток 2000

const messengerTime = 128;
const likeTime = 254;
const vkTime = 137;
const youtubeTime = 201;

const procrastinationTime = messengerTime + likeTime + vkTime + youtubeTime;
const procrastinationHours = procrastinationTime / 60;

console.log(`Русалка прокрастинировала ${procrastinationHours} часов`); //Русалка прокрастинировала 12 часов

console.log(2 ** 5); //32

const message =
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";

console.log(message); //Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!

const greetings = "Привет";
const name1 = "Кот";
const message1 = `${greetings}, ${name1}`;

console.log(message1); //Привет, Кот

let time;
console.log(time);
time = 34;
console.log(time);
console.log("Старт поездки. Осталось минут: " + time); //Старт поездки. Осталось минут: 34

time -= 15;
console.log("Немного сторис в соцсетях. Осталось минут: " + time); //Немного сторис в соцсетях. Осталось минут: 19

time -= 10;
console.log("Немного не новостей, но событий. Осталось минут: " + time); //Немного не новостей, но событий. Осталось минут: 9

time = 0;
console.log("Вы приехали. Добро пожаловать в Москву."); //Вы приехали. Добро пожаловать в Москву.

const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(
  `${fahrenheit} градуса по Фаренгейту — это ${celsius} градуса по Цельсию.`
); //451 градуса по Фаренгейту — это 232.77777777777777 градуса по Цельсию.

const startingDeposit = 30000; // начальный депозит
const interestRate = 0.185; // процентная ставка (18.5%)
const growth = 150; // прирост за расчётный период

const newDeposit = startingDeposit + growth; // новый депозит
const interest = newDeposit * interestRate; // проценты за год
const finalDeposit = newDeposit + interest; // итоговый депозит

//task**
console.log(
  `Ваш депозит на начало расчётного периода составлял ${startingDeposit} руб.`
);
console.log(
  `Согласно вашему тарифу, вам была присвоена ставка ${interestRate * 100}%`
);
console.log(
  `К концу расчётного периода прирост составил ${growth} руб., и на данный момент ваш депозит составляет ${newDeposit} руб.`
);
console.log(`Через год у вас будет ${finalDeposit.toFixed(2)} руб. на счету`); //Ваш депозит на начало расчётного периода составлял 30000 руб. Согласно вашему тарифу, вам была присвоена ставка 18.5%. К концу расчётного периода прирост составил 150 руб., и на данный момент ваш депозит составляет 30150 руб. Через год у вас будет 35727.75 руб. на счету
