let str = "   hello i am    karan     singh karki      ";
str = str.trim();
let reg = /\s+/g;

let k = str.replace(reg," ");
console.log(k);
// console.log(str);

