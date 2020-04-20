const inputCountry = prompt('Введите свою страну');
let costDelivery;
let userCountry = inputCountry.toLowerCase();


switch (userCountry) {
  case 'китай':
    costDelivery = 100;
    console.log(`Доставка в ${inputCountry} будет стоить ${costDelivery} кредитов`);
    break;

  case 'чили':
    costDelivery = 250;
    console.log(`Доставка в ${inputCountry} будет стоить ${costDelivery} кредитов`);
    break;

  case 'австралия':
    costDelivery = 170;
    console.log(`Доставка в ${inputCountry} будет стоить ${costDelivery} кредитов`);
    break;

  case 'индия':
    costDelivery = 80;
    console.log(`Доставка в ${inputCountry} будет стоить ${costDelivery} кредитов`);
    break;

  case 'ямайка':
    costDelivery = 120;
    console.log(`Доставка в ${inputCountry} будет стоить ${costDelivery} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
