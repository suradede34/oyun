
//TAS KAGIT MAKAS


let oyuncuHamlesi = prompt("Tas, Kagit yada Makas secin");

let bilgisayarinHamlesi = ["tas", "kagit", "makas"].at(Math.floor(Math.random() * 3));
console.log("Bilgisayarin secimi:", bilgisayarinHamlesi);

if (oyuncuHamlesi === bilgisayarinHamlesi) {
  console.log('Berabere' (bilgisayar));
} else if (
  (oyuncuHamlesi === "tas" && bilgisayarinHamlesi === "makas") ||
  (oyuncuHamlesi === "kagit" && bilgisayarinHamlesi === "tas") ||
  (oyuncuHamlesi === "makas" && bilgisayarinHamlesi === "kagit")
) {
  console.log('Kazandin');
} else {
  console.log('Kaybettin');
}

