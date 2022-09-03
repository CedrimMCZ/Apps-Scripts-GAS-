

/*
Nota: Se você estiver usando um ambiente compatível com Setand Array.from(), você pode usar let orderedArray = Array.from(new Set(myArray)) para obter um array em que os itens duplicados tenham sido removidos.
*/
```
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]
```


```
const array = ["Giulianna", 1, 2, 3, "Lucas", 3, "Renan"];
let resultado = array.reduce((singular, item) => {
  return singular.includes(item) ? singular : [...singular, item]
}, []);

console.log(resultado);

/*
Resultado:
[ 'Giulianna', 1, 2, 3, 'Lucas', 'Renan' ]
*/
```


```
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]
```
