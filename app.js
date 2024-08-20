// alert(" Qeydiyyatiniz tamamlandi");
// let answer = confirm("Kart melumatlariniz saxlanilsin?");
// console.log(answer);
// let user = prompt("Adinizi Girin")
// let hello = ("Salam!")
// console.log(user + " " + hello + " " );
// let age = prompt("Yasinizi yazin")
// console.log (age)
// console.log(age + 5)
// let a = "50"
// let b = 10
// console.log(a + b)
// console.log(Number(a)+ b)
// let fullName = prompt("Adiziniz ve soyadiniz ")
// console.log(fullName)










const fullName = prompt("Lütfen isminizi  girin:");

const modifiedName = fullName.replace(/[Tt]/g, '###');

let startsWithCode = fullName.startsWith('code'); 
let endsWithCode = fullName.endsWith('code'); 


let count = 0;
let index = fullName.indexOf('e');
while (index !== -1) { 
    count++; 
    index = fullName.indexOf('e', index + 1); 
}

// Sonuçları ekrana bas
console.log( fullName);
console.log( modifiedName);
console.log(fullName.length);
console.log( count);
console.log(startsWithCode && endsWithCode);




// youtubda js derslerine baxiram ona gore elave seyler de bilirem 




