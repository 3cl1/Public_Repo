const Henkilo = require("./Henkilo");

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    // Kutsutaan yliluokan konstruktoria
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);

    // Urheilija-luokan ominaisuudet
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Getterit ja setterit Urheilija-luokan ominaisuuksille
  getLinkkiKuvaan() {
    return this.linkkiKuvaan;
  }

  setLinkkiKuvaan(linkki) {
    this.linkkiKuvaan = linkki;
  }

  getOmaPaino() {
    return this.omapaino;
  }

  setOmaPaino(paino) {
    this.omapaino = paino;
  }

  getLaji() {
    return this.laji;
  }

  setLaji(laji) {
    this.laji = laji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }

  setSaavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

module.exports = Urheilija;
