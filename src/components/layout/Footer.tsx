import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <p>Juan Gavira {new Date().getFullYear()}</p>
      <p>
        <Link to="https://pokeapi.co" target="_blank">PokeApi &#169;</Link>
      </p>
    </footer>
  );
}

export default Footer