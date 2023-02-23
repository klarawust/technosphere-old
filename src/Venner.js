import Navbar from "./components/navbar/Navbar";
import React from "react";
import List from "./components/list/List";

function Venner() {
  const venner = ["Rori"];

  return (
    <body>
      <div className="mx-16">
        <Navbar />
        <List entries={venner} title="Vennebok"></List>
      </div>
    </body>
  );
}

export default Venner;
