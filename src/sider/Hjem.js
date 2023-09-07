import React from "react";
import storstjerne from "../images/annet/storstjerne.png";
import litenstjerne from "../images/annet/stjerne.png";

function Hjem() {
  return (
    <div className="sm:h-[45vw]">
      <div className="sm:w-[40vw] sm:ml-[8vw] pt-[8vw] w-full">
        <div className="flex flex-col absolute sm:m-[10vw] m-[18vw] sm:text-[1vw] text-[3vw]  text-blue-400 underline z-10">
          <a
            className="hover:text-amber-300"
            href="https://github.com/klarawust"
          >
            github.com/klarawust
          </a>

          <a
            className="hover:text-amber-300"
            href="https://www.linkedin.com/in/klarawust"
          >
            linkedin.com/klarawust
          </a>
          <a
            className="hover:text-amber-300"
            href="https://www.instagram.com/klarawustenberg"
          >
            instagram.com/klarawustenberg
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
        {/* <a className="hover:text-sm" href="https://www.greekingout.lol">
          greekingout.lol
        </a> */}
      </div>
    </div>
  );
}

export default Hjem;
