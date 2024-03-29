import Navbar from "../components/navbar/Navbar";
import React from "react";
import List from "../components/list/List";
import isak from "../images/venner/isak_1280.webp";
import magnus from "../images/venner/magnus_1280.webp";
import nuutti from "../images/venner/nuutti_1280.webp";
import mattias from "../images/venner/mattias_1280.webp";
import aurora from "../images/venner/aurora_1280.webp";

function Venner() {
  const venner = [
    { name: "Isak", url: "https://isak.me/", bilde: isak },
    { name: "Aurora", url: "https://kennedy.no", bilde: aurora },
    { name: "Magnus", url: "https://www.magnus.ouren.no", bilde: magnus },
    { name: "Nuutti", url: "https://nuutti.no", bilde: nuutti },
    {
      name: "Mattias",
      url: "https://www.mattiastofte.dev",
      bilde: mattias,
    },
  ];

  return (
    <body className="font-sans">
      <Navbar />
      <p className="mt-10 text-center">
        Noen av vennene mine og deres nettsider:
      </p>
      <div className="mt-10">
        <List entries={venner} link={venner}></List>
      </div>
    </body>
  );
}

export default Venner;
