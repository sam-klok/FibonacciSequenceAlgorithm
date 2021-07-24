"use strict";
// n is quantity of fibonacci numbers
// we will later add 
// a) console input for it
// b) web page input for it 
function getSumOfFibonacciNumbers(n) {
    if (n == 1 || n == 2)
        return 1;
    var a = [1, 1];
    var s = 0;
    for (var i = 2; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2];
        s += a[i];
    }
    return s;
}
var n = 5;
var s = getSumOfFibonacciNumbers(n);
console.log("sum of (" + n + ") fibonacci numbers = " + s);
