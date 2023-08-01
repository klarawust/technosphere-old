import React from "react";
import Album from "../components/kort/Album";
import barn from "../../src/images/annet/meg.jpg";
import skintyfia from "../../src/images/album/skintyfia_1280.webp";

function Meg() {
  return (
    <body>
      <div className="flex flex-col gap-12 text-xl">
        <h1 className="text-4xl text-sky-600">OM MEG</h1>
        <div className="flex flex-row gap-24">
          <div className="text-md font-sans font-thin">
            <p>Klara Wüstenberg</p>
            <p>29.05.2001</p>
            <p>Oslo</p>
            <p>48115704</p>
          </div>
          <img
            className="h-28 border-8 border-amber-200"
            src={barn}
            alt="mistet tann"
          />
        </div>
        <div className="mt-16 flex flex-col gap-5">
          <h2>Noen album jeg liker</h2>
          <div className="flex flex-row gap-10 w-80 overflow-scroll">
            <Album
              name="Skinty Fia"
              artist="Fontaines D.C."
              year="2022"
              image={skintyfia}
            />
            <Album
              name="Skinty Fia"
              artist="Fontaines D.C."
              year="2022"
              image={skintyfia}
            />
          </div>
        </div>
        <div>
          <h2>Noen bøker jeg liker</h2>
        </div>
        <div>
          <h2>Noen steder jeg har bodd</h2>
        </div>
      </div>
    </body>
  );
}

export default Meg;
