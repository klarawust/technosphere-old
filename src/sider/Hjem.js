import React from "react";
import storstjerne from "../images/annet/storstjerne.png";
import litenstjerne from "../images/annet/stjerne.png";

function Hjem() {
  return (
    <div className="">
      <img
        className="absolute w-4/12 ml-52 mt-16"
        src={storstjerne}
        alt="stor stjerne illustrasjon"
      ></img>
      <img
        className="absolute justify-self-end w-72 mt-96"
        src={litenstjerne}
        alt="stor stjerne illustrasjon"
      ></img>
      <div className="flex flex-col text-xs text-blue-400 underline absolute ml-96 mt-52">
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
    </div>
  );
}

export default Hjem;
