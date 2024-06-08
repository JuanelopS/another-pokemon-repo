import not_found from "../../../public/not_found.gif";

const Error = () => {
  return (
    <>
      <div>
        <h2>Pokemon no encontrado...</h2>
        <img src={not_found} alt="Ocurrió un error" width="200px" />
      </div>
    </>
  );
};

export default Error;
