import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <body>
      <div className="mx-16">
        <Navbar />
        <section className="flex flex-row gap-64">
          <p className="font-serif">
            Velkommen hit min venn.
            <br /> Klara, 21 år gammel, progg4life, cez4prez
          </p>
        </section>
        <img className="w-96" src="meg.jpg" alt="meg uten tenner" />
        <img className="" src="kokko.jpeg" alt="meg uten tenner" />
      </div>
    </body>
  );
}

export default App;
