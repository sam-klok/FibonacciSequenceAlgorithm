// n is quantity of fibonacci numbers
// we will later add 
// a) console input for it
// b) web page input for it 

function getSumOfFibonacciNumbers(n: number): number {
    if (n == 1 || n == 2)
        return 1;

    let a: Array<number> = [1,1];
    let s: number = 0;
    
    for (let i=2; i<n; i++){
        a[i] = a[i-1] + a[i-2];
        s += a[i];
    }

    return s;
}

let n = 5;  
let s = getSumOfFibonacciNumbers(n);
console.log("sum of (" + n + ") fibonacci numbers = " + s);
