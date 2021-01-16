//Для реализации генератора из тестового задания я использую js замыкания

function sequence(start = 0, step = 1) {
  let stepCount = 1
  return function () {
    //В примере при первом вызове генератора возвращается start
    //Для реализации этого кейса ввел условие ниже
    if(stepCount === 1) {
      stepCount++
      return start
    }
    return start+=step
  }
}

//
var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8