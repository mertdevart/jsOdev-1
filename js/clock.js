// Isim prompt ile istendi ve girilen bilgi degiskene atandi
const name = prompt("Lutfen Isminizi Giriniz:");
// Girilen bilginin yazilmasi gereken yer ID selectorla secildi ve manipule edildi
document.querySelector("#myName").innerHTML = name;
let days = [
  "Pazar",
  "Pazartesi",
  "Sali",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
// Saat fonksiyonu olusturuldu
function clock() {
  let date = new Date();
  let d = days[date.getDay()];
  // istenilen zaman bicimleri degiskenlere atandi. Kosul yapisi saat formati 00:00:00 seklinde olmasi icin tek haneli verilerin basina 0 yazdirdi
  let h = date.getHours() > 10 ? date.getHours() : "0" + date.getHours();
  let m = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();
  let s = date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds();
  // bicimlendirilen saat gosterimi ID selectorla secildi ve manipule edildi
  document.querySelector("#myClock").innerHTML = `${h}:${m}:${s}-${d}`;
}
// Saniyenin aktif gosterilmesi icin clock fonksiyonu her 1000 ms icinde tekrar cagrildi
setInterval(clock, 1000);
