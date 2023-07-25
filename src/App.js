import Navbar from "./components/navbar/Navbar";
import Hjem from "./sider/Hjem";
import React from "react";
import Bildekant from "./components/Bildekant/Bildekant";
import Meg from "./sider/Meg";

function App() {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <div className=" w-3/4 font-mono mx-20">
          <Hjem />
          <Meg />
        </div>
        <div className="w-1/4">
          <Bildekant />
        </div>
      </div>
    </main>
  );
}

export default App;
