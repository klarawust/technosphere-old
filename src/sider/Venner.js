import Navbar from "../components/navbar/Navbar";
import React from "react";
import List from "../components/list/List";
import isak from "../images/venner/isak_1280.webp";
import mikkel from "../images/venner/mikkel_1280.webp";
import magnus from "../images/venner/magnus_1280.webp";
import aurora from "../images/venner/aurora_1280.webp";
import nuutti from "../images/venner/nuutti_1280.webp";
import mattias from "../images/venner/mattias_1280.webp";

function Venner() {
  const venner = [
    { name: "Aurora", url: "", bilde: aurora },
    { name: "Mikkel", url: "", bilde: mikkel },
    { name: "Isak", url: "https://isaks.io/", bilde: isak },
    { name: "Magnus", url: "https://www.magnus.ouren.no", bilde: magnus },
    { name: "Nuutti", url: "https://nuutti.no", bilde: nuutti },
    { name: "Mattias", url: "https://www.mattiastofte.dev", bilde: mattias },
  ];

  return (
    <body>
      <Navbar />
      <div className="m-16 flex justify-center">
        <List entries={venner} title="" link={venner}></List>
      </div>
    </body>
  );
}

export default Venner;
