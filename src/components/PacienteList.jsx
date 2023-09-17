import Pacient from "./Pacient";

function PacienteList({ pacients, setPacient, deletePacient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacients && pacients.length ? (
        <>
          <h2 className="font-black text-2xl text-gray-800 text-center">
            Pacient List
          </h2>

          <p className="text-lg mt-5 text-center">
            Adminstrate your {""}
            <span className="text-indigo-600 font-bold text-lg">
              Pacients & Appointments
            </span>
          </p>

          {pacients.map((pacient) => (
            <Pacient
              key={pacient.id}
              pacient={pacient}
              setPacient={setPacient}
              deletePacient={deletePacient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-gray-800 text-center">
            No Pacients
          </h2>

          <p className="text-lg mt-5 text-center">
            Start by adding pacients {""}
            <span className="text-indigo-600 font-bold text-lg">
              and they'll show up here!
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default PacienteList;
