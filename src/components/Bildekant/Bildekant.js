import kokko from "../../images//bildekant/kokko.jpeg";
import barn from "../../images/bildekant/meg.jpg";
import tbane from "../../images/bildekant/2023-tbane_1280.webp";

function Bildekant() {
  return (
    <ul className="flex flex-col  mt-10 pr-10">
      <img className="w-56 self-end" src={tbane} alt="aurora og meg på banen" />
      <img className="w-64 self-end" src={barn} alt="meg som barn" />
      <img className="w-32 self-end" src={kokko} alt="mann med fugl på hodet" />
      <img className="w-56 self-end" src={tbane} alt="aurora og meg på banen" />
      <img className="w-56 self-end" src={tbane} alt="aurora og meg på banen" />
    </ul>
  );
}

export default Bildekant;
