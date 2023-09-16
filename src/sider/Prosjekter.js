import React from "react";
import Tittel from "../components/CVtekst/Tittel";
import Beskrivelse from "../components/CVtekst/Beskrivelse";
import helloklara from "../images/projects/helloklara_1280.webp";
import greekingout from "../images/projects/greekingout_1280.webp";
import toolhub from "../images/projects/toolhub_1280.webp";
import phuyen from "../images/projects/phuyen_1280.webp";

function Prosjekter() {
  return (
    <body>
      <div className="flex flex-col gap-16 mt-20 text-xl">
        <h1 className="text-4xl text-sky-600">PROSJEKTER</h1>
        <div className="flex flex-col gap-2">
          <Tittel>helloklara.com</Tittel>
          <Beskrivelse>
            Denne nettsiden er mitt første personlige prosjekt. Nettsiden er
            laget med React og Tailwind. Designet har jeg laget i Figma.{" "}
          </Beskrivelse>
          <img
            className="shadow-lg w-4/5"
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
            className="shadow-lg w-4/5"
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
            className="shadow-lg w-4/5"
            src={toolhub}
            alt="bilde av toolhub"
          ></img>
        </div>
        <div className="flex flex-col gap-2">
          <Tittel>
            <a className="hover:bg-red-300" href="http://www.phuyen.no">
              phuyen.no
            </a>
          </Tittel>
          <Beskrivelse>
            Prosjekt i faget Webteknologi gjennomført høst 2021. Dette var mitt
            aller første prosjekt på NTNU, hvor vi skulle lage en nettside for
            en fiktiv kunde. For å gjøre oppgaven mer engasjerende tok jeg
            kontakt med en ekte restaurant som ikke hadde en eksisterende
            nettside og tilbød å lage en til de. PhuYen likte ideen og nettsiden
            er fortsatt i bruk i dag! Siden er laget i HTML, CSS og Javascript.
          </Beskrivelse>
          <img
            className="shadow-lg w-4/5"
            src={phuyen}
            alt="bilde av phuyen"
          ></img>
        </div>
      </div>
    </body>
  );
}

export default Prosjekter;
