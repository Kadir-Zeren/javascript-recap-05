// ? ===================================
// ?           FUNCTIONS
// ? ===================================

console.log(" **** 2-EXPRESSION **** ");

//* ORNEK1:
// ************************************************ /
yazdirMerhaba(); //? hoisting oluyor (var değişkenleri)

function yazdirMerhaba() {
  console.log("Merhaba FS14");
}

yazdirMerhaba();

//*-----------------------
//? Declarasyon (Function Expression)
const yazdir = function (message) {
  console.log(message);
};

yazdir("Hallo FS14"); //? invoke

//* ORNEK2:
// ********************************************* /

let oddEven = function (number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
};

console.log(oddEven(5));
console.log(oddEven(2));
