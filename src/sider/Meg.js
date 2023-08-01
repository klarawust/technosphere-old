import React from "react";
import Cover from "../components/kort/Cover";
import barn from "../../src/images/annet/meg.jpg";
import skintyfia from "../../src/images/cover/skintyfia_1280.webp";
import helvete from "../../src/images/cover/helvete_1280.webp";

function Meg() {
  return (
    <body>
      <div className="flex flex-col gap-12 text-xl">
        <h1 className="text-4xl text-sky-600">OM MEG</h1>
        <div className="flex flex-row gap-16">
          <div className="text-sm font-sans font-thin">
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
        <div>
          <h2 className="mt-10">Noen album jeg liker</h2>
          <div className="flex flex-row flex-nowrap w-full gap-10 overflow-x-scroll">
            <Cover
              name="Skinty Fia"
              artist="Fontaines D.C."
              year="2022"
              image={skintyfia}
            />
            <Cover
              name="Skinty Fia"
              artist="Fontaines D.C."
              year="2022"
              image={skintyfia}
            />
          </div>
        </div>
        <div>
          <h2>Noen bøker jeg liker</h2>
          <div className="flex flex-row flex-nowrap w-full gap-10 overflow-x-scroll">
            <Cover
              name="Helvete"
              artist="Erlend Loe"
              year="norsk"
              image={helvete}
            />
            <Cover
              name="Helvete"
              artist="Erlend Loe"
              year="norsk"
              image={helvete}
            />
            <Cover
              name="Helvete"
              artist="Erlend Loe"
              year="norsk"
              image={helvete}
            />
          </div>
        </div>
        <div>
          <h2>Noen steder jeg har bodd</h2>
          <div className="flex flex-row flex-nowrap w-full gap-10 overflow-x-scroll">
            <Cover name="OSLO" artist="2001-2018" year="" image={""} />
            <Cover name="BERLIN" artist="2018-2019" year="" image={""} />
            <Cover name="TRONDHEIM" artist="2021-2023" year="" image={""} />
            <Cover name="ATHEN" artist="2023-2024" year="" image={""} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Meg;
