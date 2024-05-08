// Ilk onceden bildirim ki her Arrayin First formatini sadece consolda ilk halini gormeyiniz ucun yaratmisam kodda her hansisa tesiri yoxdu
// Sadece array mutable olduquna gore son aldiqi deyeri ilk adiqi deyerede menimsedir ona gore arrayin son ve ilk halini gostere bilmirem
// Kod yazarken logda problem yaratmit ctrl + s elediyimizde koddan oxuyur ama proyecti sondurub sadece index.html i acdiqimizda ilk ve son arrayi eyni gorur

// --------------- Task 1 -------------------
console.log("--------------------- Task 1 -------------------------");

console.log("");

console.log(
  "Reqemlerden ibaret bir array yaradin ve hemen arryin icinde gezerek (dovr) tek edeleri tapib her birini 1 vahid artirin."
);

console.log("");

let FirstArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Dovden onceki Array: ", FirstArr1);

console.log("");

for (let i = 0; i <= Arr1.length - 1; i++) {
  if (Arr1[i] % 2 != 0) {
    Arr1[i]++;
  }
}

console.log("Dovden sonraki Array: ", Arr1);

console.log("");

console.log("-------------------------------------------------------");

// ------------------------------------------

// --------------- Task 2 -------------------
console.log("");

console.log("--------------------- Task 2 -------------------------");

console.log("");

console.log(
  "Reqemlerden ibaret bir array yaradin ve icinde gezerek cut olan ededleri arrayin 1-ci elementine, tek olan edeleri ise arrayin sonuncu elementine vurun. "
);

console.log("");

let Arr2 = [3, 4, 5, 6, 7, 8, 9, 10];
let TempArr2 = [3, 4, 5, 6, 7, 8, 9, 10];

console.log("Dovden onceki Array: ", TempArr2);

console.log("");
for (let i = 0; i <= Arr2.length - 1; i++) {
  if (Arr2[i] % 2 == 0) {
    Arr2[i] = Arr2[i] * TempArr2[0];
  } else {
    Arr2[i] = Arr2[i] * TempArr2[Arr2.length - 1];
  }
}

console.log("Dovden sonraki Array: ", Arr2);

console.log("");

// Bu sekilde TempArr2 yaratma sebebim arrayin icerisinde olan ilk elementim tek olduqu halda son reqeme vurulur veya cut olarken ozune vurulur
// ve artiq ondan soraki istenilen cut eded artiq deyisdirilmis elemente vurulacaq

console.log("-------------------- Task 2.1 ------------------------");

console.log("");

console.log(
  "ikinci taskda olan xirda bir xetanin (Belkede men yalnis anlamisam) aciqlamasi"
);

console.log("");

console.log(
  "Qeyd! Eger sadece consola baxirsinizsa kodada baxin aciqlamani note olaraq qeyd etmisem"
);

console.log("");

let FirstArr2Example = [3, 4, 5, 6, 7, 8, 9, 10];
let Arr2Example = [3, 4, 5, 6, 7, 8, 9, 10];

console.log("Dovden onceki Array: ", FirstArr2Example);

console.log("");

for (let i = 0; i <= Arr2Example.length - 1; i++) {
  if (Arr2Example[i] % 2 == 0) {
    Arr2Example[i] = Arr2Example[i] * Arr2Example[0];
  } else {
    Arr2Example[i] = Arr2Example[i] * Arr2Example[Arr2Example.length - 1];
  }
}

console.log("Dovden sonraki Array: ", Arr2Example);

// Demey istediyimi burde gore bilersiz : [30, 12, 50, 18, 70, 24, 90, 30] dovrden sornraki arrayim bu sekilde olur
// yeni cut eded olan 4 3 e vurulmali olduqu teqdirde hemin 3 artiq tek eded olduqu ucun son eded olan 10 vurulub 30 olduqu ucun 4 30 a vurulu 3 e yox

console.log("");

console.log("-------------------------------------------------------");

// ------------------------------------------

// --------------- Task 3 -------------------
console.log("");

console.log("--------------------- Task 3 -------------------------");

console.log("");

console.log(
  "Reqemlerden ibaret bir array yaradin ve icinde gezerek arrayin en boyuk ve en kicik elementini tapin daha sonra tapdiginiz bu iki reqemin hasilini console-a yazdirin."
);

console.log("");

let FirstArr3 = [5, 6, 15, 2, 9];
let Arr3 = [5, 6, 15, 2, 9];
let max = Arr3[0];
let min = Arr3[0];
let total;

console.log("Dovden onceki Array: ", FirstArr3);

console.log("");

for (let i = 0; i <= Arr3.length - 1; i++) {
  if (Arr3[i] > max) {
    max = Arr3[i];
  }
  if (Arr3[i] < min) {
    min = Arr3[i];
  }
}

console.log("Arrayin en kicik deyeri : ", min);

console.log("");

console.log("Arrayin en boyuk deyeri : ", max);

console.log("");

total = min * max;

console.log("Arrayin en kicik ve en boyuk deyerlerini hasili: ", total);

console.log("");

console.log("-------------------------------------------------------");

console.log("");

console.log("<-------- Diqqetiniz ucun tesekkurler :)))) ---------->");

// ------------------------------------------
