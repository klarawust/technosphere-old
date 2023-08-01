import tbane from "../../images/bildekant/tbane_1280.webp";
import opera from "../../images/bildekant/opera_1280.webp";
import asparges from "../../images/bildekant/asparges_1280.webp";
import trikk from "../../images/bildekant/trikk_1280.webp";
import sykkel from "../../images/bildekant/sykkel_1280.webp";
import paraply from "../../images/bildekant/paraply_1280.webp";
import roskilde from "../../images/bildekant/roskilde_1280.webp";
import måltid from "../../images/bildekant/måltid_1280.webp";
import hageselfie from "../../images/bildekant/hageselfie_1280.webp";
import bracket from "../../images/bildekant/bracket_1280.webp";
import bursdag from "../../images/bildekant/bursdag_1280.webp";
import digitalisering from "../../images/bildekant/digitalisering_1280.webp";
import eng from "../../images/bildekant/eng_1280.webp";
import fasade from "../../images/bildekant/fasade_1280.webp";
import grossmami from "../../images/bildekant/grossmami_1280.webp";
import isak from "../../images/bildekant/isak.webp";
import reke from "../../images/bildekant/reke_1280.webp";
import vinter from "../../images/bildekant/vinter_1280.webp";

function Bildekant() {
  const images = [
    tbane,
    opera,
    trikk,
    sykkel,
    paraply,
    roskilde,
    måltid,
    asparges,
    hageselfie,
    bracket,
    bursdag,
    digitalisering,
    eng,
    fasade,
    grossmami,
    isak,
    reke,
    vinter,
  ];

  return (
    <>
      <ul className="flex flex-col mt-10 self-end">
        {images.map((img, index) => (
          <li key={index}>
            <img src={img} alt="bilde" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bildekant;
