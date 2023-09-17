import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ pacients, setPacients, pacient, setPatient }) {
  //Create each variable of the pet object
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  //Variable for the error component
  const [error, setError] = useState(false);

  //Hook that react when a state changes
  useEffect(() => {
    //Checks that pacients isnt empty
    if (Object.keys(pacient).length > 0) {
      //Set form with the pet's info
      setPet(pacient.pet);
      setOwner(pacient.owner);
      setEmail(pacient.email);
      setDate(pacient.date);
      setSymptoms(pacient.symptoms);
    }
    //In the [] is the value that it will be checking - If it's empty, it only happens once
  }, [pacient]);

  //Create an id for each object in the list to differenciate
  const createId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate the form
    if ([pet, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Create pet object
    const petPacient = {
      pet,
      owner,
      email,
      date,
      symptoms,
    };

    console.log(pacient.id);
    //If patient already has id, then it already exists
    if (pacient.id) {
      //Editing patiente
      petPacient.id = pacient.id;

      //Look for pacient that's being changed
      const updatedPatients = pacients.map((p) =>
        p.id === pacient.id ? petPacient : p
      );

      //Set up pacient list
      setPacients(updatedPatients);
      //Just to clean up the state
      setPatient({});
    } else {
      //Add id to object for when adding new patient
      petPacient.id = createId();
      //Add to list (bring list and then add the current pet to the list)
      setPacients([...pacients, petPacient]);
    }

    //Reset form
    setPet("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-2xl text-gray-800 text-center">
        Check-up Pacients
      </h2>

      <p className="text-lg mt-5 text-center">
        Add Pacients & {""}
        <span className="text-indigo-600 font-bold text-lg">Administrate</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error message="All spaces are required*" />}
        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold"
            htmlFor="pet"
          >
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold"
            htmlFor="name"
          >
            Owner Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Owner Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold"
            htmlFor="Release"
          >
            Release
          </label>
          <input
            id="Release"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold"
            htmlFor="symptoms"
          >
            symptoms
          </label>
          <textarea
            name=""
            id="symptoms"
            placeholder="Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          value={pacient.id ? "Edit pacient" : "Add pacient"}
        />
      </form>
    </div>
  );
}

export default Form;
