/*

Print numbers from 1 to 100. 

*/

for(let i = 1; i <= 100; i++){
    console.log(i);
}

/*

Print even numbers from 1 to 100. 

*/

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

/*

Find the sum of numbers from 1 to 10.

*/

let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

/*

Find the factorial of 5.

*/

let fact = 1;
for(let i = 1; i <= 5; i++){
    fact *= i;
}
console.log(fact);