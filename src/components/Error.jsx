function Error({ message }) {
  return (
    <div className="bg-red-700 p-3 font-bold text-center text-white uppercase rounded-md mb-2">
      <p>{message}</p>
    </div>
  );
}

export default Error;
