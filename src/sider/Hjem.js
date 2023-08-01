import React from "react";
import storstjerne from "../images/annet/storstjerne.png";
import litenstjerne from "../images/annet/stjerne.png";

function Hjem() {
  return (
    <div className=" h-[45vw]">
      <div className="w-[40vw] ml-[8vw] pt-[8vw]">
        <div className="flex flex-col absolute m-[10vw] text-[1vw] text-blue-400 underline z-10">
          <a className="hover:text-sm" href="https://github.com/klarawust">
            github.com/klarawust
          </a>
          <a
            className="hover:text-sm"
            href="https://www.instagram.com/klarawustenberg"
          >
            instagram.com/klarawustenberg
          </a>
          <a className="hover:text-sm" href="www.linkedin.com/in/klarawust">
            linkedin.com/klarawust
          </a>
        </div>
        <img
          className="z-0"
          src={storstjerne}
          alt="stor stjerne illustrasjon"
        ></img>
      </div>
      <div className="w-[15vw] absolute right-96">
        <img
          className="z-0"
          src={litenstjerne}
          alt="liten stjerne illustrasjon"
        ></img>
      </div>
    </div>
  );
}

export default Hjem;
