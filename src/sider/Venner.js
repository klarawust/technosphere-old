import Navbar from "../components/navbar/Navbar";
import React from "react";
import List from "../components/list/List";
import isak from "../images/venner/isak.webp";
import mikkel from "../images/venner/mikkel_1280.webp";

function Venner() {
  const venner = [
    { name: "Magnus", url: "https://www.magnus.ouren.no" },
    { name: "Isak", url: "https://isaks.io/", bilde: isak },
    { name: "Nuutti", url: "https://nuutti.no" },
    { name: "Mattias", url: "https://www.mattiastofte.dev" },
    { name: "Mikkel (bror)", url: "https://www.mikkel.no", bilde: mikkel },
  ];

  return (
    <body>
      <Navbar />
      <div className="mx-16">
        <List entries={venner} title="" link={venner}></List>
      </div>
    </body>
  );
}

export default Venner;
