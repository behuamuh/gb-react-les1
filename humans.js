/*3. Необходимо написать иерархию классов вида:

Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера 
(имеется ввиду возможность назначить другого менеджера).
*/

class Human {
    constructor(name, age , dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo(){
        return `Имя - ${this.name}, возраст - ${this.age}, родился ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name, age , dateOfBirth, salary, department){
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo(){
        return `${super.displayInfo()}, оклад - ${this.salary}, отдел - ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(...args){
        super(...args);
        this.developers = [];
    }
    addDeveloper(developer){
        if(developer && developer instanceof Developer){
            this.developers.push(developer);
            developer.changeManager(this);
        }
    }
    deleteDeveloper(developer){
        let index = this.developers.indexOf(developer);
        if (index === -1){
            return;
        }
        this.developers.splice(index, 1);
    }
    displayInfo(){
        return `${super.displayInfo()}
        Разработчики: ${this.developers.map( (value) => value.name).join(',')}`
    }
}

class Developer extends Employee {
    constructor(name, age , dateOfBirth, salary, department, manager){
        super(name, age , dateOfBirth, salary, department);
        this.manager = manager;
    }
    changeManager(newManager){
        if(newManager && newManager instanceof Manager){
            this.manager = newManager;
        }
    }

    displayInfo(){
        return `${super.displayInfo()}, менеджер - ${this.manager.name}`;
    }
}
let developer1 = new Developer('Vasy', 27, '09.04.91', 2000, 'Frontend');
let developer2 = new Developer('Petya', 28, '16.05.90', 2000, 'Frontend');
let developer3 = new Developer('Ivan', 37, '19.04.81', 2000, 'Frontend');

let manager = new Manager('Igor', 23, '06.02.95', 4000, 'Frontend');
manager.addDeveloper(developer1);
manager.addDeveloper(developer2);
manager.addDeveloper(developer3);


console.log(manager.displayInfo());
console.log(developer1.displayInfo());
console.log(developer2.displayInfo());
console.log(developer3.displayInfo());