/*5*. Написать цикл, который создаёт массив промисов, 
внутри каждого промиса происходит обращение к ресурсу 
(https://jsonplaceholder.typicode.com/users/number), 
где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. 
Следует дождаться выполнения загрузки всеми промисами 
и далее вывести массив загруженных данных. */
const promisses = [];
for (let i = 1; i < 11; i++){
    promisses.push(getUser('https://jsonplaceholder.typicode.com/users/' + i)
    .then( user => console.log(user))
    .catch( error => console.error(error))
    );
}
//console.log(promisses);

function getUser(url) {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.onerror = function(error) {
            reject(error);
        }
        xhr.send();
    });
}