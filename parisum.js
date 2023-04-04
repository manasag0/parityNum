/*
Parity Minimum
Description
Given a sequence of positive integers, let S be the sum of the digits of the minimum element in the sequence.
If S is odd, the parity is 0, otherwise parity is 1.

Input
First line contains a positive integer n, denoting the number of elements in the sequence.
Next n lines contain one integer each, denoting the sequence.
Output
Either 0 or 1

Sample input
4
34
23
12
24
Sample output
0
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let a = [];

for (let i = 0; i<n;i++){
    a.push(parseInt(readLine()));
   
}
// console.log(a)

let min = a[0];
for (let i = 0; i<a.length;i++){
    if (min>a[i]){
        min = a[i]
    }
}
// console.log(min)

let sum = 0;
while(min>0){
    sum = sum+min%10;
    min = Math.floor(sum/10)

}
if (sum%2===0){
    console.log(1)
}else {
    console.log(0)
}
