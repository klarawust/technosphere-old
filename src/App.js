import React from "react";
import Navbar from "./components/navbar/Navbar";
import Bildekant from "./components/Bildekant/Bildekant";
import Hjem from "./sider/Hjem";
import Meg from "./sider/Meg";
import Prosjekter from "./sider/Prosjekter";

function App() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-8">
        <div className="col-span-6 font-mono mx-20">
          <Hjem />
          <Meg />
          <Prosjekter />
        </div>
        <div className="col-span-1">
          <Bildekant />
        </div>
      </div>
    </main>
  );
}

export default App;
