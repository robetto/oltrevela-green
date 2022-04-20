import "./App.css";
import day_img from "./oltrevela_giornata_della_terra.png";
import { motion } from "framer-motion"

import Logo from "./components/Logo";
import Testo from "./components/Testo";

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <h1>Giornata della Terra</h1>
      </header>
      <main>
          <img
            src={day_img}
            style={{ maxWidth: "450px", margin: "0 auto 20px auto" }}
          />
        <Testo />
      </main>
      <footer>
        «Non ci sono passeggeri sul 'Battello Terra'. Siamo tutti membri
        dell'equipaggio»
        <br />
        Marshall McLuhan
      </footer>
    </div>
  );
}

export default App;
