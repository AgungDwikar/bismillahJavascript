//regular function

function ATM(uangAwal) {
    let limaPuluhRb, duaPuluhRb, sepuluhRb, limaRb, limaRatusPerak, sisa;

    limaPuluhRb = parseInt(uangAwal / 50000);
    sisa = uangAwal % 50000;
    duaPuluhRb = parseInt(sisa / 20000);
    sisa = sisa % 20000;
    sepuluhRb = parseInt(sisa / 10000);
    sisa = sisa % 10000;
    limaRb = parseInt(sisa / 5000);
    sisa = sisa % 5000;
    limaRatusPerak = parseInt(sisa / 500);
    sisa = sisa % 500;

    return `
    hasil pecahan 50000 : ${limaPuluhRb} lembar
    hasil pecahan 20000 : ${duaPuluhRb} lembar
    hasil pecahan 10000 : ${sepuluhRb} lembar
    hasil pecahan 5000 : ${limaRb} lembar
    hasil pecahan 500 : ${limaRatusPerak} koin
    `;
}

//console.log(ATM(115500));

function segitigaLeft(num) {
    let s = "";
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= i; j++) {
            s += "* ";
        }
        s += "\n";
    }
    console.log(s);
}
//segitigaLeft(5);

function segitigaButtomRight(input) {
    let s = "";
    for (let i = 1; i <= input; i++) {
        for (let j = i; j <= input; j++) {
            s += "* ";
        }
        s += "\n";
    }
    console.log(s);
}
//segitigaButtomRight(5);

function segitigaCenter(input) {
    let s = "";
    for (let i = 0; i <= input; i++) {
        for (let j = i; j <= input; j++) {
            s += " ";
        }
        for (let k = 0; k <= i; k++) {
            s += "* ";
        }
        s += "\n";
    }
    console.log(s);
}
//segitigaCenter(5);

//menghitung banyaknya kata cokal
function countVoweks(str) {
    let huruf_vokal = "aeiouAEIOU";
    let vcount = 0;

    for (let i = 0; i < str.length; i++) {
        if (huruf_vokal.indexOf(str[i]) !== -1) {
            vcount += 1;
        }
    }
    console.log(vcount);
}
//countVoweks("programmer"); //3

//
function arkaFood(harga, kodeVoucher, jarak, pajak) {
    if (harga < 50000) {
        if (harga < 25000) {
            var jumlah = harga;
        } else {
            if (kodeVoucher === "DITRAKTIRDEMY") {
                if (jarak > 1.5) {
                    var jarak = jarak - 1.5;
                    var round = Math.ceil(jarak);
                    var tarif = 5000 + round * 3000;
                } else {
                    var tarif = 5000;
                }

                if (pajak !== false) {
                    var potongan = Math.round((5 / 100) * 75000);
                } else {
                    var potongan = 0;
                }

                var discount = (60 / 100) * harga;
                if (discount > 30000) {
                    var diskon = 30000;
                } else {
                    var diskon = discount;
                }

                var jumlah = harga - diskon + tarif + potongan;
            } else if (kodeVoucher === false || kodeVoucher === undefined) {
                if (jarak > 1.5) {
                    var jarak = jarak - 1.5;
                    var round = Math.ceil(jarak);
                    var tarif = 5000 + round * 3000;
                } else {
                    var tarif = 5000;
                }

                if (pajak !== false) {
                    var potongan = Math.round((5 / 100) * 75000);
                } else {
                    var potongan = 0;
                }

                var jumlah = harga + tarif + potongan;
            }
        }
    } else {
        if (kodeVoucher === "ARKAFOOD5") {
            if (jarak > 1.5) {
                var jarak = jarak - 1.5;
                var round = Math.ceil(jarak);
                var tarif = 5000 + round * 3000;
            } else {
                var tarif = 5000;
            }
            console.log("Tarif : ", tarif);

            if (pajak !== false) {
                var potongan = Math.round((5 / 100) * 75000);
            } else {
                var potongan = 0;
            }
            console.log("Pajak : ", potongan);

            var discount = (50 / 100) * harga;
            if (discount > 50000) {
                var diskon = 50000;
            } else {
                var diskon = discount;
            }
            console.log("Diskon ARKAFOOD5 : ", diskon);

            var jumlah = harga - diskon + tarif + potongan;
        } else if (kodeVoucher === "DITRAKTIRDEMY") {
            if (jarak > 1.5) {
                var jarak = jarak - 1.5;
                var round = Math.ceil(jarak);
                var tarif = 5000 + round * 3000;
            } else {
                var tarif = 5000;
            }
            console.log("Tarif : ", tarif);

            if (pajak !== false) {
                var potongan = Math.round((5 / 100) * 75000);
            } else {
                var potongan = 0;
            }
            console.log("Pajak : ", potongan);

            var discount = (60 / 100) * harga;
            if (discount > 30000) {
                var diskon = 30000;
            } else {
                var diskon = discount;
            }
            console.log("Diskon DITRAKTIRDEMY : ", diskon);

            var jumlah = harga - diskon + tarif + potongan;
        } else if (
            kodeVoucher === false ||
            kodeVoucher === undefined ||
            kodeVoucher !== "ARKAFOOD5" ||
            kodeVoucher !== "DITRAKTIRDEMY"
        ) {
            if (jarak > 1.5) {
                var jarak = jarak - 1.5;
                var round = Math.ceil(jarak);
                var tarif = 5000 + round * 3000;
            } else {
                var tarif = 5000;
            }

            if (pajak !== false) {
                var potongan = Math.round((5 / 100) * 75000);
            } else {
                var potongan = 0;
            }

            var jumlah = harga + tarif + potongan;
        }
    }
    console.log("Harga : ", harga);
    console.log(jumlah);
}

//arkaFood(70000, "TAKADA", 2.6, 5);

//menentuka  bilangan ganjil genap
function oddEvent(input) {
    let output;
    if (input % 2 === 0) {
        output = `${input} merupakan bilangan genap`;
    } else {
        output = `${input} merupakan bilangan ganjil`;
    }
    console.log(output);
}
//oddEvent(5);

//looping mencari bilangan ganjil dan genap
function oddEventLooping(input) {
    for (let i = 0; i <= input; i++) {
        let output = i;
        if (output % 2 === 0) {
            console.log(`${output} merupakan bilangan genap`);
        } else {
            console.log(`${output} merupakan bilangan ganjil`);
        }
    }
}
//oddEventLooping(10);
function greeting(inputJam) {
    let endJam = 24;
    let pagi = 6;
    let siang = 12;
    let sore = 16;
    let malam = 18;
    if (inputJam >= pagi && inputJam < siang && inputJam <= endJam) {
        console.log(`selamat pagi`);
    } else if (inputJam >= siang && inputJam < sore && inputJam <= endJam) {
        console.log(`selamat siang`);
    } else if (inputJam >= sore && inputJam < malam && inputJam <= endJam) {
        console.log(`selamat sore`);
    } else if (inputJam >= malam && inputJam <= endJam) {
        console.log(`selamat malam`);
    } else {
        console.log(`maaf, masukan nomer kembali sepeti jam biasa`);
    }
}
//greeting(24);

//greeting looping
function greetingLooping(inputJam) {
    let startJam = 1;
    let siang = 12;
    let sore = 16;
    let malam = 18;
    let endJam = 24;
    if (inputJam <= endJam) {
        for (let i = startJam; i <= inputJam; i++) {
            if (i >= startJam && i < siang && i <= endJam) {
                console.log(`${i} selamat pagi`);
            } else if (i >= siang && i < sore && i <= endJam) {
                console.log(`${i} selamat siang`);
            } else if (i >= sore && i < malam && i <= endJam) {
                console.log(`${i} selamat sore`);
            } else if (i >= malam && i <= endJam) {
                console.log(`${i} selamat malam`);
            } else {
                console.log(`salah jam`);
            }
        }
    } else {
        console.log(`jam yang dimasukan tidak sesuai`);
    }
}
//greetingLooping(25);

//mencari nilai tertinggi dari 2 value
function maxOfTwo(inpu1, input2) {
    // let min = inpu1 > input2 ? input2 : inpu1;
    // let max = inpu1 > input2 ? inpu1 : input2;
    let max, min;
    if (inpu1 > input2) {
        min = input2;
    } else {
        min = inpu1;
    }

    if (inpu1 > input2) {
        max = inpu1;
    } else {
        max = input2;
    }
    console.log(`min : ${min}, max : ${max}`);
}
//maxOfTwo(5, 50);

function maxOfThree(a, b, c) {
    let max;
    if (a > b && a > c) {
        max = `tertinggi ${a}`;
    } else if (b > a && b > c) {
        max = `tertinggi ${b}`;
    } else {
        max = `tertinggi ${c}`;
    }
    console.log(max);
}
//maxOfThree(6, 10, 8);

//is prime number
function isPrime(num) {
    if (num == 2) {
        return true;
    } else if (num > 2) {
        let flag = false;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            } else {
                flag = true;
            }
        }
        if (flag == true) {
            return true;
        }
    } else {
        return false;
    }
}
//console.log(isPrime(8));

function IsPrime(N) {
    if (isPosInteger(N) & (N >= 2) & (N < MAXLIMIT)) {
        Limit = Math.floor(Math.sqrt(N));
        for (var i = Limit; i >= 2; i--) {
            if (N % i == 0) {
                break;
            }
        }
        return i;
    } else {
        return false;
    }
}
//console.log(isPrime(8));

function isPrime(num) {
    if (num <= 1) return false;

    for (let count = 2; count <= Math.floor(Math.sqrt(num)); count++) {
        if (num % count == 0) {
            return false;
        }
    }

    return true;
}
//console.log("1:", isPrime(1)); //false

//prime looping

function loopingPrimes(max) {
    var store = [],
        i,
        j,
        primes = [];
    for (i = 2; i <= max; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}
//console.log(loopingPrimes(23));

function deretPrimes(lowerNumber, higherNumber) {
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
//deretPrimes(2, 25);

//quiz
function luasLingkaran(r) {
    let phi = 3.14159;
    let areaKeliling = phi * r * r;

    if (isNaN(r)) {
        return `${r} bukan angka masukanlah angka`;
    } else if (r < 0) {
        return `radius ${r} try higher`;
    }
    let output = `luas lingkarannya adalah ${areaKeliling}`;
    return output;
}
//console.log(luasLingkaran(5));

function jarijariLingkaran(r) {
    if (Number(r) <= 0) {
        return `radius ${r} <= 0, coba lagi`;
    }

    if (isNaN(r)) {
        return `Inputan harus dalam angka`;
    }

    const pi = 3.14;
    let area;
    return (area = pi * Math.pow(r, 2));
}

// console.log(jarijariLingkaran(-1)); //return radius -1 <= 0, try higher
// console.log(jarijariLingkaran("a")); //return Inputan harus dalam angka
// console.log(jarijariLingkaran(8)); //retun 78.53975

//keliling persegi panjang
function kelilingPersegiPanjang(p, l, t) {
    let rumus = p * l * t;

    if ((p, l, t <= 0)) {
        return `radius <= 0, coba lagi`;
    }

    if (isNaN(p, l, t)) {
        return `Inputan harus dalam angka`;
    }

    let hasil = `keliling persegi panjang adalah : ${rumus} `;
    return hasil;
}
// console.log(kelilingPersegiPanjang(-1, -2, -3)); //return radius -1 <= 0, try higher
// console.log(kelilingPersegiPanjang("a")); //return Inputan harus dalam angka
// console.log(kelilingPersegiPanjang(5, 5, 5)); //retun 78.53975

function luasPersegiPanjang(p, l) {
    let rumus = p * l;

    if ((p, l <= 0)) {
        return `radius <= 0, coba lagi`;
    }

    if (isNaN(p, l)) {
        return `Inputan harus dalam angka`;
    }

    let hasil = `luas persegi panjang adalah : ${rumus}`;
    return hasil;
}
// console.log(luasPersegiPanjang(-1, -2)); //return radius -1 <= 0, try higher
// console.log(luasPersegiPanjang("a")); //return Inputan harus dalam angka
// console.log(luasPersegiPanjang(15, 9)); //retun 78.53975
