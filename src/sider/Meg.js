import React from "react";
import Cover from "../components/kort/Cover";
import barn from "../../src/images/annet/meg.jpg";
import skintyfia from "../../src/images/cover/skintyfia_1280.webp";
import barnaveuropa from "../../src/images/cover/barnaveuropa.jpeg";
import blomi from "../../src/images/cover/blomi.jpeg";
import etgodtstupitungtvann from "../../src/images/cover/etgodtstupigruntvann.jpg";
import ifonlyasaghost from "../../src/images/cover/ifonlyasaghost.jpeg";
import helvete from "../../src/images/cover/helvete_1280.webp";
import ekko from "../../src/images/cover/ekko.jpeg";
import stakkar from "../../src/images/cover/stakkar.jpeg";
import menduserikkesykut from "../../src/images/cover/menduserikkesykut.jpeg";
import oslo from "../../src/images/cover/oslo.jpeg";
import berlin from "../../src/images/cover/berlin.jpeg";
import trondheim from "../../src/images/cover/trondheim.jpeg";
import athen from "../../src/images/cover/athen.jpeg";

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
          </div>
          <img
            className="h-28 border-8 border-amber-200"
            src={barn}
            alt="mistet tann"
          />
        </div>
        {/* <div>
          <h2 className="mt-10">Noen album jeg liker</h2>
          <div className="flex flex-row flex-nowrap w-full gap-10 overflow-x-scroll">
            <Cover
              name="Skinty Fia"
              artist="Fontaines D.C."
              year="2022"
              image={skintyfia}
            />
            <Cover
              name="Barn av Europa"
              artist="Cezinando"
              year="2017"
              image={barnaveuropa}
            />
            <Cover
              name="Blomi"
              artist="Susanne Sundfør"
              year="2023"
              image={blomi}
            />
            <Cover
              name="If only as a ghost"
              artist="Jonas Alaska"
              year="2013"
              image={ifonlyasaghost}
            />
            <Cover
              name="Et godt stup i grunt vann"
              artist="Cezinando"
              year="2020"
              image={etgodtstupitungtvann}
            />
          </div>
        </div> */}
        <div>
          <h2>Noen bøker jeg liker</h2>
          <div className="flex flex-row flex-nowrap w-full gap-10 overflow-x-scroll">
            <Cover
              name="Ekko"
              artist="Lena Lindgren"
              year="2021"
              image={ekko}
            />
            <Cover
              name="Helvete"
              artist="Erlend Loe"
              year="2019"
              image={helvete}
            />
            <Cover
              name="Stakkar"
              artist="Matias Faldbakken"
              year="2022"
              image={stakkar}
            />
            <Cover
              name="Men du ser ikke syk ut"
              artist="Ragnhild Holmås"
              year="2020"
              image={menduserikkesykut}
            />
          </div>
        </div>
        <div>
          <h2>Lokasjon</h2>
          <div className="flex flex-row flex-nowrap w-full gap-10 overflow-x-scroll">
            <Cover
              name="OSLO"
              artist="2001-2018"
              year="2019-2021"
              image={oslo}
            />
            <Cover name="BERLIN" artist="2018-2019" year="" image={berlin} />
            <Cover
              name="TRONDHEIM"
              artist="2021-2023"
              year=""
              image={trondheim}
            />
            <Cover name="ATHEN" artist="2023-2024" year="" image={athen} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Meg;
