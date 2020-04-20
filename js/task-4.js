const credits = 23580;
const priceDroid = 3000;
let amountDroid = prompt('Введите количество товара');
const totalPrice = amountDroid * priceDroid;

if (amountDroid === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  amountDroid = Number(amountDroid);
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${amountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
