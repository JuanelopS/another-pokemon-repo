import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type PokemonData = {
  species: {
    name: string;
  },
  sprites: {
    front_default: string;
  };
  cries: {
    legacy: string;
    latest: string;
  }
};

const Pokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<PokemonData>();

  const handleGetPokemon = async () => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const json = await data.json();
      setPokemon(json as PokemonData);
    } catch (error) {
      console.error(error);
      navigate("/error");
      setPokemon(undefined);
    }
  };

  useEffect(() => {
    handleGetPokemon();
  }, [name]);

  return (
    <>
      <h1>{pokemon?.species.name}</h1>
      <div>
        {pokemon && (
          <img
            className="pokemon-image"
            src={pokemon?.sprites.front_default}
            alt={name}
          />
        )}
      </div>
      <audio src={pokemon?.cries.legacy} controls autoPlay />
    </>
  );
};

export default Pokemon;
