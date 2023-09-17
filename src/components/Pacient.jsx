function Pacient({ pacient, setPacient, deletePacient }) {
  const { pet, owner, email, date, symptoms, id } = pacient;

  const handleDelete = () => {
    const answer = confirm("Do you wish to delete this pacient?");

    if (answer) {
      deletePacient(id);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg m-5 mt-5 px-5 py-10">
        <p className="block text-gray-600 uppercase font-bold">
          Name: {""}
          <span className="font-normal normal-case">{pet}</span>
        </p>

        <p className="block text-gray-600 uppercase font-bold">
          Owner: {""}
          <span className="font-normal normal-case">{owner}</span>
        </p>

        <p className="block text-gray-600 uppercase font-bold">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="block text-gray-600 uppercase font-bold">
          Release: {""}
          <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="block text-gray-600 uppercase font-bold">
          Symptoms: {""}
          <span className="font-normal normal-case">{symptoms}</span>
        </p>

        <div className="flex justify-between mt-2">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md mt-3"
            onClick={() => setPacient(pacient)}
          >
            Edit
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md mt-3"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Pacient;
