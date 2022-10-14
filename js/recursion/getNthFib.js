/*Nth Fibonacci
The Fibonacci sequence is defined as follows: the first number of the sequence is O, the second number
is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in
an integer n and returns the nth Fibonacci number.
Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and
F1 = 1. For the purpose of this question, the first Fibonacci number is FO; therefore, getNthFib(1)
is equal to FO, getNthFib(2) is equal to F1 , etc..
Sample Input #1
n= 2
Sample Output #1
1 // 0, 1
Sample Input #2
n =6
Sample Output #2
5 // 0, 1, 1, 2, 3, 5  */

const getNthFib = n => {
    // Write your code here.
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])

    }
    return fibArray[n - 1];
}
n = 2
console.debug(getNthFib(n));

n = 1
console.debug(getNthFib(n));

n = 6
console.debug(getNthFib(n));
module.exports = getNthFib;