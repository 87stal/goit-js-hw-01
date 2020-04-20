const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const inputUser = prompt('Введите пароль администратора');

if (inputUser === null) {
  message = 'Отменено пользователем';
} else if (inputUser === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

