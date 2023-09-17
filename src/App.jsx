import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PacienteList from "./components/PacienteList";

function App() {
  //Add whats in local storage to pacient list
  const [pacients, setPacients] = useState(
    JSON.parse(localStorage.getItem("pacients")) ?? []
  );
  const [pacient, setPacient] = useState({});

  //EFFECTS HAPPEN IN ORDER

  //Check pacient list
  useEffect(() => {
    localStorage.setItem("pacients", JSON.stringify(pacients));
  }, [pacients]);

  const deletePacient = (id) => {
    const updatedPacients = pacients.filter((pacient) => pacient.id !== id);
    setPacients(updatedPacients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacients={setPacients}
          pacient={pacient}
          setPacient={setPacient}
        />
        <PacienteList
          pacients={pacients}
          setPacient={setPacient}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  );
}

export default App;
