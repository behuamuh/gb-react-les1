/*1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), 
callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции */
function loop(times = 0, callback = null){
    if(!callback){
        console.log('No called!');
        return;
    }
    for (let i = 0; i < parseInt(times); i++){
        console.log(`Called ${i + 1}`)
        callback();
    }
}

//Проверяем. ; раза вызываем печать текущего времени
loop( 4, () => console.log(new Date().toDateString()));

//Проверяем, д.б в консоли 'No called!'
loop(3);

/*2. Написать функцию calculateArea, которая будет принимать параметры, 
для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, 
выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида:
 { area, figure, input }, где area - вычисленная площадь, figure - название фигуры,
для которой вычислялась площадь,
 input - входные параметры, по которым было произведено вычисление. */

 function calculateArea(...args){
    if(args.length == 0){
        console.log(` Функция принимает 0, 1 либо 2 аргумента:
            0 - вывод справки,
            1 - площадь круга переданного радиуса,
            2 - площадь прямоугольника с переданными сторонами.`);
        return;
    }
    const result = {
        area: 0,
        figure: '',
        input: args.toString()
    }
    // Если параметр один - фигура круг
    if(args.length == 1){
        const radius = Number(args[0]);
        result.figure = 'circle';
        result.area = Math.PI * radius * radius;
    }
    
    // Если два, прямоугольник
    if(args.length == 2){
        const a = Number(args[0]);
        const b = Number(args[1]);
        result.figure = 'rectangle';
        result.area = a * b;
    }
    console.log(result);
    return result;    
 }

 // справка
 calculateArea();

 // Круг
 calculateArea(5);

 // Прямоугольник
 calculateArea(5, 3);