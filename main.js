const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value == '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all the details';
        setTimeout(() => msg.remove(), 3);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.append(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}
