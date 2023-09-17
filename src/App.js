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
      <div className="sm:grid grid-cols-8">
        <div className="col-span-8 sm:col-span-6 font-mono mx-[10vw]">
          <Hjem />
          <Meg />
          <Prosjekter />
        </div>
        <div className="col-span-1 font-mono">
          {window.innerWidth > 640 ? (
            <>
              <Bildekant />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;
