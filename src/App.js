import Navbar from "./components/navbar/Navbar";
import React from "react";

function App() {
  return (
    <main>
      <div className="mx-16">
        <Navbar />
        <section className="flex flex-row gap-72">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl">klara.dev</h1>
            <p className="font-sans text-md">
              Velkommen, her vil du kunne lese litt om meg og få et innblikk i
              prosjekter jeg har gående.
            </p>
            <p className="font-sans text-md">
              Denne nettsiden er laget med React, Javascript og Tailwind.
            </p>
          </div>
          <img className="w-96" src="kokko.jpeg" alt="mann med fugl på hodet" />
        </section>
      </div>
    </main>
  );
}

export default App;
