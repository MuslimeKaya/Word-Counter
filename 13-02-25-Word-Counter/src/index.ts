const myTextarea = document.getElementById("myTextarea") as HTMLTextAreaElement;
const myButton = document.getElementById("myButton") as HTMLButtonElement;
const myClearButton = document.getElementById("myClearButton") as HTMLButtonElement;
const myDiv = document.getElementById("myDiv") as HTMLDivElement;

// Kelime sayısını hesapla
myButton.addEventListener("click", (event) => {
  event.preventDefault(); // Formun submit olmasını engelle

  const text = myTextarea.value.trim(); // Metni al ve baştaki-sondaki boşlukları temizle
  const kelimeSayisi = text ? text.split(/\s+/).length : 0; // Boşluklara göre böl ve kelime sayısını bul

  myDiv.textContent = `Word Count: ${kelimeSayisi}`; // Sonucu ekranda göster
  console.log(kelimeSayisi);

  if (kelimeSayisi < 2) {
    alert("Please enter more than 2 words!"); // Kullanıcıyı bilgilendir
  } else {
    console.log("Provides the conditions...");
  }
});

// "Temizle" butonuna tıklanınca textarea ve sonucu sıfırla
myClearButton.addEventListener("click", (event) => {
  event.preventDefault(); // Formun submit olmasını engelle
  myTextarea.value = ""; // Textarea içeriğini temizle
  myDiv.textContent = "Word Count: 0"; // Kelime sayısını sıfırla
});
