import React from "react";
import splashImage from "..//images/splash.png";

function Hjem() {
  return (
    <div className="">
      <img
        className="absolute ml-48 mt-16"
        src={splashImage}
        alt="stjerneillustrasjon"
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
