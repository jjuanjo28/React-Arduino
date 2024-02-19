import React from "react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div >
        <button
          onClick={() => navigate("/rickAndMorty/characters/allCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"20px"}}
        >
          All Characters
        </button>
      </div>
      <div>
        <div style={{opacity:"70%", backgroundColor:"white",border:"2px solid blue", borderRadius:"5px"}}>
            <h2> Estados de vida </h2>
        </div>
        <button
          onClick={() => navigate("/rickAndMorty/characters/status/aliveCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
          Vivos
        </button>
        <button
          onClick={() => navigate("/rickAndMorty/characters/status/deadCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
          Muertos
        </button>
        <button
          onClick={() => navigate("/rickAndMorty/characters/status/unknownCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
          Estado desconocido
        </button>
      </div>
      <div>
        <div style={{opacity:"70%", backgroundColor:"white",border:"2px solid blue", borderRadius:"5px"}}>
            <h2> Generos </h2>
        </div>
        <button
          onClick={() => navigate("/rickAndMorty/characters/gender/femaleCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
          Mujeres
        </button>
        <button
          onClick={() => navigate("/rickAndMorty/characters/gender/maleCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
          Hombres
        </button>
        <button
          onClick={() => navigate("/rickAndMorty/characters/gender/genderlessCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
          Sin Genero
        </button>
        <button
          onClick={() => navigate("/rickAndMorty/characters/gender/unknownCharacters")}
          className="btn btn-lg btn-danger "
          style={{margin:"10px"}}
        >
         desconocido
        </button>
      </div>
    </div>
  );
};

export default Characters;
