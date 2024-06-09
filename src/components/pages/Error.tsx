import not_found from "/not_found.webp";  // https://giphy.com/stickers/pixel-pixelart-pokemon-ge8V1m6LFNyBg9sIHV

const Error = () => {
  return (
    <>
      <div>
        <h2>Pokemon no encontrado...</h2>
        <img src={not_found} alt="Ocurrió un error" width="200px" className="not-found-gif" />
      </div>
    </>
  );
};

export default Error;
