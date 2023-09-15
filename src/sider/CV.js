import React from "react";
import Navbar from "../components/navbar/Navbar";
import Tittel from "../components/CVtekst/Tittel";
import Kategori from "../components/CVtekst/Kategori";
import Beskrivelse from "../components/CVtekst/Beskrivelse";

function CV() {
  return (
    <body className="font-mono">
      <Navbar />
      <div className="mt-20 ml-80 mr-96 pr-40 mb-20">
        <Kategori>Erfaring</Kategori>
        <Tittel>Utvikler kateter sommerinternship ‑ 2023</Tittel>
        <Beskrivelse>
          Kateter er en oppstart som lager kurs av og for studenter. Jobben min
          gikk ut på å programmere et illustrasjonsbibliotek for bruk i
          kursproduksjonen. Prosjektet ble gjennomført i et lite team på 3
          medlemmer og jeg fikk derfor muligheten til å være selvstendig og
          sette meg godt inn i teknologien som ble brukt i prosjektet.{" "}
        </Beskrivelse>
        <Tittel>Læringsassistent NTNU ‑ 2022-2023</Tittel>
        <Beskrivelse>
          V2023: Læringsassistent i TDT4180- Menneske-maskin-interaksjon
          <br />
          H2022: Læringsassistent i IT2805 - Webteknologi <br />I disse fagene
          har jeg assistert førsteårsstudenter med å forbedre sine kunnskaper i
          HTML, CSS, Javascript og Canvas, og hjulpet studenter å lære mer om
          designvalg i programvareutvikling, normer og heuristikker.
        </Beskrivelse>
        <Tittel>Laboratorieassistent Ullevål sykehus ‑ 2019-dags dato</Tittel>
        <Beskrivelse>
          Fast vikar i ferier. Arbeidsoppgaver går ut på å bestille varer og
          utstyr til nyfødtavdelingen, vaske kuvøser, instrumenter og klær.{" "}
          <br />I tillegg har jeg bidratt i datasamling på et forskningsprosjekt
          om premature barn. Her har jeg utformet spørreskjemaer som skal brukes
          for å lagre data korrekt i en database. I tillegg har jeg plottet
          disse.
        </Beskrivelse>
        <Tittel>
          Bedriftskomiteen linjeforeningen Online ‑ 2021-dags dato
        </Tittel>
        <Beskrivelse>
          Frivillig jobb i Linjeforeningen Online som bedriftskontakt. Her har
          jeg arbeidsoppgaver som å jevnlig svare på mails, publisere
          stillingsannonser og ha hovedansvar for én bedriftspresentasjon på opp
          til 80 deltakere per semesteret. Tidligere var jeg også
          økonomiansvarlig i komiteen.
        </Beskrivelse>
        <Kategori>Utdanning</Kategori>
        <Beskrivelse>
          Norges tekniske og naturvitenskaplige universitet, Trondheim ‑
          Bachelor i Informatikk <br />
          Elvebakken videregående skole, Oslo ‑ 2017-2020
        </Beskrivelse>
        <Kategori>Andre Kvalifikasjoner</Kategori>
        <Beskrivelse>
          Programmeringsspråkene jeg har erfaring med er: HTML, CSS, Javascript,
          Python, Java, React, Next.js, Typescript, Astro
          <br />
          Annet:{" "}
          <ul>
            <li>Svært gode språkkunnskaper i engelsk og tysk</li>
            <li> Førerkort klasse B</li>
          </ul>{" "}
        </Beskrivelse>
      </div>
    </body>
  );
}

export default CV;
