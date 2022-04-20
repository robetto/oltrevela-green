import React from "react";
import arth_img from "./../oltrevela_earth.png";
import { motion } from "framer-motion";

const Testo = () => {
  return (
    <div>
      <p>
        L’ Earth Day è la giornata mondiale della Terra, in cui tutti i suoi
        abitanti si uniscono per celebrare la Terra e promuoverne la
        salvaguardia.
        <br />
        Risulta difficile festeggiare in questa giornata dal momento che stiamo
        lentamente distruggendo il nostro pianeta e andando incontro ad
        un’irreversibile crisi climatica. È responsabilità di tutte le persone
        tenerlo pulito, equilibrato, sostenibile.
      </p>
      <p>
        In Oltrevela ci siamo sempre impegnati per mantenere al minimo le
        emissioni e azzerare gli sprechi, attraverso tanti piccoli accorgimenti
        che, come i tasselli di un mosaico, forniscono il loro contributo alla
        lotta all’inquinamento: i cartoni e gli imballaggi usati per le
        spedizioni sono riciclati dalle aziende limitrofe e cerchiamo di ridurre
        al minimo l’uso della plastica inserita nei pacchi.
        <br /> 
          <motion.img drag
            src={arth_img}
            style={{ maxWidth: "350px", margin: "0 auto 10px auto" }}
          /> 
        <br />
        Il nostro impegno non si ferma solamente al materiale per le spedizioni:
        i nostri uffici ed ambienti sono alimentati da luci a led a basso
        consumo e le dinamiche lavorative sono completamente digitalizzate.
        Quando possibile preferiamo offrire ai nostri clienti la spedizione in
        dropshipping per limitare le alte emissioni dei corrieri.
      </p>
      <p>
        L’ obiettivo in futuro è la completa eliminazione degli imballaggi in
        plastica sostituendoli con materiali vegetali riciclati e la stampa dei
        documenti con carta da macero. Siamo comunque consapevoli che davanti a
        una tale problematica il nostro apporto non sarà mai abbastanza e
        continueremo a sviluppare nuovi metodi per migliorare il nostro aspetto
        ecologico.
      </p>
      <p>
        Tutti dobbiamo rimboccarci le maniche per rendere il mondo, ossia la
        nostra casa, un posto più pulito.
        <br />
        Per noi. Per le generazioni future.
      </p>
      <p>Buona festa della Terra</p>
    </div>
  );
};

export default Testo;
