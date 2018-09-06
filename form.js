/*4*. При помощи генератора написать функцию - анкету, 
которая запрашивает у пользователя на ввод параметры и передаёт их в генератор. 
В конце, когда генератор завершается, он должен вернуть все введённые входные 
параметры в виде объекта. 
Этот объект нужно вывести в консоли. */
function confirmBtn(elem) {
    let div = elem.parentElement;
    div.classList.add('d-none');
    let form = document.querySelector('form.d-none');
    //console.log(form);
    startForm(form);
}
function startForm(element) {
    let formGen = generator();
    element.classList.remove('d-none');
    let button = document.querySelector('form button');
    let input = document.querySelector('form input');
    let label = document.querySelector('form label');
    label.innerHTML = ' Your name';
    formGen.next();

    button.onclick = function() {
        //console.log(input.value);
        let next = formGen.next(input.value);
        if (!next.done && typeof next.value === 'string') {
            label.innerHTML = next.value;
        } else {
            button.classList.add('d-none');
            input.classList.add('d-none');
            label.innerHTML = 'Thank you!';
            console.log(next.value);
        }
    }
    //console.log(button);
    //console.log(input);
}
function* generator() {
    let result = {};
    result.name = yield ;
    result.fullname = yield 'Your fullname';
    result.email = yield 'Your email';
    result.phone = yield 'Your phone number';
    result.country = yield 'Your country';
    yield result;

    //console.log(result);
}
