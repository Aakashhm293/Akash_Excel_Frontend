let initial_value = 0;
let next_value = 1;
let sum = 0;

for(let i=0; i<10;i++){
    sum = initial_value + next_value;
    initial_value = next_value;
    next_value = sum;
}

console.log(sum)