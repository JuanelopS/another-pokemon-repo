import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../utils/Spinner";
import { capitalizeFLetter } from "../helpers/capitalizeFLetter";

type PokemonData = {
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  cries: {
    legacy: string;
    latest: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
};

const Pokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<PokemonData>();
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetPokemon = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase().trim()}`
      );
      const json = await data.json();
      setPokemon(json as PokemonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      navigate("/error");
      setPokemon(undefined);
      setLoading(false);
    }
  };

  const handleImageShiny = () => {
    setIsShiny(!isShiny);
  };

  useEffect(() => {
    setIsShiny(false);
    handleGetPokemon();
  }, [name]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="title-and-type">
            <h2 className="title">
              {pokemon?.species.name && capitalizeFLetter(pokemon.species.name)}
            </h2>
            {pokemon?.types.map((type) => (
              <span key={type.slot} className={`type ${type.type.name}`}>
                <img
                  src={`../../public/icons/${type.type.name}.svg`}
                  alt={type.type.name}
                  className="type-image"
                  title={type.type.name}
                />{" "}
                {/*type-icons from: https://github.com/partywhale/pokemon-type-icons */}
              </span>
            ))}
          </div>
          <div>
            {pokemon && (
              <img
                className="pokemon-image"
                src={
                  !isShiny
                    ? pokemon?.sprites.front_default
                    : pokemon?.sprites.front_shiny
                }
                alt={name}
                onClick={handleImageShiny}
              />
            )}
          </div>
          <audio
            src={pokemon?.cries.latest}
            controls
            style={{ marginTop: "-15px" }}
          />
        </section>
      )}
    </>
  );
};

export default Pokemon;
