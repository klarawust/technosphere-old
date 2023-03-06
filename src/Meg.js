import Navbar from "./components/navbar/Navbar";
import React from "react";

function Meg() {
  return (
    <body>
      <div className="mx-16">
        <Navbar />
        <section className="flex flex-row gap-12">
          <img className="w-96" src="meg.jpg" alt="meg uten tenner" />
          <p className="text-3xl">Klara Wüstenberg</p>
        </section>
      </div>
    </body>
  );
}

export default Meg;
