import React from "react";
import storstjerne from "../images/annet/storstjerne.png";
import litenstjerne from "../images/annet/stjerne.png";

function Hjem() {
  return (
    <div className="flex flex-col">
      <div className="relative w-xs py-48">
        <div className="flex flex-col text-xs text-blue-400 underline ml-96 z-20">
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
          className="w-6/12 left-52 top-16 absolute z-10"
          src={storstjerne}
          alt="stor stjerne illustrasjon"
        ></img>
      </div>
      <img
        className="justify-self-end w-72 mt-16"
        src={litenstjerne}
        alt="stor stjerne illustrasjon"
      ></img>
    </div>
  );
}

export default Hjem;
