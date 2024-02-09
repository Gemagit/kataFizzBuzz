/*Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de imprimir el número, se imprimirá Fizz, en los números que sean múltiplos de 5 se imprimirá Buzz, y además en los números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz. Imprime por consola:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...*/

let i=1;
function printNumbers () {
     for (i=1;i<=1000;i++) {
        if(i%3===0) {
          console.log("Fizz");
        }
        if (i%5===0) {
          console.log("Buzz");
        }
        if(i%3===0 && i%5===0) {
          console.log("FizzBuzz");
        }
        console.log(i);
     }
}

printNumbers();

