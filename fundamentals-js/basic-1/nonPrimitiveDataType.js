// array
const array = [1, 2, 3];
console.log(typeof array); //objek

//objek
const product = {
    prod_id: 1,
    prod_name: "indomie",
    price: 5000,
};
console.log(typeof product); //objek

//date
const startDate = new Date(); //konstruktor tanggal
console.log(typeof startDate);

//function
//reguler function
function displayTagihan() {
    return `total Bill : Rp.5000`;
}
console.log(displayTagihan()); //objek non primitive

