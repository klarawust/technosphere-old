import Navbar from "../components/navbar/Navbar";
import React from "react";
import List from "../components/list/List";

function Venner() {
  const venner = [
    { name: "Magnus", url: "https://www.magnus.ouren.no" },
    { name: "Isak", url: "https://isaks.io/" },
    { name: "Nuutti", url: "https://nuutti.no" },
    { name: "Mattias", url: "https://www.mattiastofte.dev" },
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
