import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = "https://pokeapi.co/api/v2/pokemon/";

const Detalle = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(URL + name);
      const results = await response.json();
      setPokemon(results);
    } catch (error) {
      console.log("No hay pokemones");
    }
    console.log(pokemon);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return (
    <>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites?.front_default} />
    </>
  );
};

export default Detalle;
