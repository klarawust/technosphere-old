import React from "react";
import Tittel from "../components/CVtekst/Tittel";
import Beskrivelse from "../components/CVtekst/Beskrivelse";
import helloklara from "../images/projects/helloklara_1280.webp";
import greekingout from "../images/projects/greekingout_1280.webp";

function Prosjekter() {
  return (
    <body>
      <div className="flex flex-col gap-20 mt-20 text-xl">
        <h1 className="text-4xl mt-20 text-sky-600">PROSJEKTER</h1>
        <div className="flex flex-col gap-2">
          <Tittel>helloklara.com</Tittel>
          <Beskrivelse>
            Denne nettsiden er mitt første personlige prosjekt. Her kan du bli
            litt kjent med meg og hva jeg driver med. Jeg har laget nettsiden i
            React ved bruk av Tailwind. Designet har jeg laget i Figma.{" "}
          </Beskrivelse>
          <img
            className="border-2 border-yellow"
            src={helloklara}
            alt="bilde av nettsiden min"
          ></img>
        </div>
        <div className="flex flex-col gap-2">
          <Tittel>greekingout.lol</Tittel>
          <Beskrivelse>
            Dette er reisebloggen for utvekslingssemesteret vårt. Her kommer vi
            til å oppdatere litt om hva vi gjør, lærer og ser. I dette
            prosjektet har vi prøvd å lære oss en ny teknologi, nemlig Astro,
            som har vært veldig kult!
          </Beskrivelse>
          <img
            className="border-2 border-yellow"
            src={greekingout}
            alt="bilde av greekingout"
          ></img>
        </div>
        <div className="flex flex-col gap-2">
          <Tittel>toolhub</Tittel>
          <Beskrivelse>
            Prosjekt i faget Programvareutvikling gjennomført vår 2023. Her
            lagde vi en verktøy-utleie-plattform for en "kunde". Prosjektet var
            tverrfaglig med 6 studenter fra studiene Industriell økonomi,
            Kommunikasjonsteknologi og Digital sikkerhet, Datateknologi og
            Informatikk.
          </Beskrivelse>
          <img
            className="border-2 border-yellow"
            src={greekingout}
            alt="bilde av toolhub"
          ></img>
        </div>
      </div>
    </body>
  );
}

export default Prosjekter;
