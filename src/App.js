import Navbar from "./components/navbar/Navbar";
import Hjem from "./sider/Hjem";
import React from "react";
import Bildekant from "./components/Bildekant/Bildekant";
import Meg from "./sider/Meg";

function App() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-8">
        <div className="col-span-6 font-mono mx-20">
          <Hjem />
          <Meg />
        </div>
        <div className="col-span-1">
          <Bildekant />
        </div>
      </div>
    </main>
  );
}

export default App;
