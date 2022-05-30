const userText = prompt('Введите текст для замены элемента');
const userTextField = document.querySelector('#link');
userTextField.textContent = userText;
console.log('Текст в блоке с id link изменён на', userText);