import Navbar from "./components/navbar/Navbar";
import React from "react";

function App() {
  return (
    <body>
      <div className="mx-16">
        <Navbar />
        <section className="flex flex-row gap-72">
          <div className="flex flex-col">
            <p className="font-sans text-lg">Vekommen hit min venn.</p>
            <p>
              Jeg heter Klara, er 21 år og kommer fra Oslo. Jeg studerer
              informatikk i Trondheim.
            </p>
          </div>
          <img className="w-96" src="meg.jpg" alt="meg uten tenner" />
        </section>
        <img src="kokko.jpeg" alt="meg uten tenner" />
      </div>
    </body>
  );
}

export default App;
