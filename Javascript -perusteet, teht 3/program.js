const Urheilija = require("./Urheilija");

// Esimerkkejä Urheilija-olioista
const urheilija1 = new Urheilija(
  "Matti",
  "Meikäläinen",
  "Masa",
  1990,
  "https://kuva1.com",
  80,
  "Juoksu",
  ["SM-kulta", "EM-hopea"]
);
const urheilija2 = new Urheilija(
  "Liisa",
  "Laukkanen",
  "Liisu",
  1985,
  "https://kuva2.com",
  65,
  "Uinti",
  ["MM-kulta", "Olympiakulta"]
);

// Tulostetaan esimerkkien tiedot konsolille
console.log(urheilija1);
console.log(urheilija2);

// Käytä gettereitä ja settereitä
urheilija1.setOmaPaino(85);
console.log(urheilija1.getOmaPaino()); // Tulostaa: 85
