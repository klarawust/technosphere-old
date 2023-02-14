import "./App.css";
import List from "./components/List";

function App() {
  const venner = ["Tale", "Aurora", "Frida", "Johanna"];
  const bikkjer = ["Labradoodle", "Aurora", "Frida", "Johanna"];
  return (
    <div>
      <List entries={venner} title="Venner" />
      <List entries={bikkjer} title="Bikkjene mine" />
    </div>
  );
}

export default App;
