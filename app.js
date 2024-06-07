let userNum = +prompt(`Enter your number`, 30);

let str = ``;

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0 && Math.pow(i, 2) <= userNum) {
    str += i + ` `;
  }
}
console.log(str);
