import barn from "../../images/bildekant/meg.jpg";
import tbane from "../../images/bildekant/tbane_1280.webp";
import opera from "../../images/bildekant/opera_1280.webp";
//import asparges from "../../images/bildekant/asparges_1280.webp";
import trikk from "../../images/bildekant/trikk_1280.webp";
import sykkel from "../../images/bildekant/sykkel_1280.webp";
//import hageselfie from "../../images/bildekant/hageselfie_1280.webp";

function Bildekant() {
  return (
    <ul className="flex flex-col mt-10 pr-28 self-end">
      <img src={tbane} alt="aurora og meg på banen" />
      <img src={opera} alt="ligger på operataket" />
      <img src={sykkel} alt="meg på sykkel" />
      <img src={barn} alt="mistet tann" />
      <img src={trikk} alt="nathalie + trikk" />

      {/* <img
        className="w-56 rotate-90 self-end"
        src={hageselfie}
        alt="hageselfie"
      /> */}
    </ul>
  );
}

export default Bildekant;
