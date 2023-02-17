import "./App.css";
import List from "./components/List";
import Navbar from "./components/Navbar";


function App() {
  const venner = ["Tale", "Aurora", "Frida", "Johanna"];
  const bikkjer = ["Labradoodle", "Aurora", "Frida", "Johanna"];
  return (
    <div>
      <List entries={venner} title="Venner" />
      <List entries={bikkjer} title="Bikkjene mine" />
      <img src="meg.png" alt="meg"></img>
      <Navbar />
    </div>
  );
}

export default App;
