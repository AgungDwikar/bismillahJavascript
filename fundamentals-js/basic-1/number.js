//number
//number to float
const n = 54.56;
console.log(parseFloat(n));
console.log(parseInt(n));

//string to integer
const nx = "123";
console.log(parseInt(nx));

//integer to string
let fx = 128;
console.log(typeof fx);
let convert = fx.toString();
console.log(typeof convert);

//division dan modulus
const money = 50000 / 1000;
console.log(money);

//modulus
let sisa = money % 2;
if (sisa === 0) {
    console.log(`hasilnya genap`);
} else {
    console.log(`hasilnya ganjil`);
}
