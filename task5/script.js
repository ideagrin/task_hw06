document.addEventListener('keyup',
    () => {
    document.querySelector('#duplicateField').textContent = document.querySelector('input').value;
});

document.querySelector('#pushButton').addEventListener('click', 
    (event) => {
    event.preventDefault();
    let textInput = document.querySelector('input');
    console.log(textInput.value);
    textInput.value = '';
    document.querySelector('#duplicateField').textContent = '';
});