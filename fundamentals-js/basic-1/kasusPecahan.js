/** 
uang rp.155,500 berapa duit jika 
dipecahkan ke 50rb, 20rb, 10rb, 5rb

output :
rp.50rb = 3 lembar
rp.20rb = 2 lembar
rp.10rb = 3 lembar
rp.5rb = 5 lembar

*/
const money = 115000;
let limaPuluhRb, duaPuluhRb, sepuluhRb, limaRb, sisa, hasil;

limaPuluhRb = parseInt(money / 50000);
sisa = money % 50000;

duaPuluhRb = parseInt(sisa / 20000);
sisa = sisa % 20000;

sepuluhRb = parseInt(sisa / 10000);
sisa = sisa % 10000;

limaRb = parseInt(sisa / 5000);
sisa = sisa % 5000;

hasil = `pecahan 50rb : ${limaPuluhRb} lembar
pecahan 20rb : ${duaPuluhRb} lembar
pecahan 10rb : ${sepuluhRb} lembar
pecahan 5rb : ${limaRb} lembar
`;

console.log(hasil);
