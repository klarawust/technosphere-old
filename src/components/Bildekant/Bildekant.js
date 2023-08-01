import tbane from "../../images/bildekant/tbane_1280.webp";
import opera from "../../images/bildekant/opera_1280.webp";
//import asparges from "../../images/bildekant/asparges_1280.webp";
import trikk from "../../images/bildekant/trikk_1280.webp";
import sykkel from "../../images/bildekant/sykkel_1280.webp";
import paraply from "../../images/bildekant/paraply_1280.webp";
import roskilde from "../../images/bildekant/roskilde_1280.webp";
import måltid from "../../images/bildekant/måltid_1280.webp";
//import hageselfie from "../../images/bildekant/hageselfie_1280.webp";

function Bildekant() {
  const images = [tbane, opera, trikk, sykkel, paraply, roskilde, måltid];

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
