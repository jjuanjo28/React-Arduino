import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./pure/Pagination";

const PersonajeDesconocidoDos = () => {
    const [personas, setPersonas] = useState(null);

    const totalPersonas = personas ? personas.length : 0;
  
    const [personPerPage, setPersonPerPage] = useState(20);
    const [actualPage, setActualPage] = useState(1);
  
    const lastIndex = actualPage * personPerPage;
    const firstIndex = lastIndex - personPerPage;
  
    useEffect(() => {
      buscarMuertos();
    }, []);
    
    const buscarMuertos = async () => {
      let array = [];
      for (let i = 0; i <= 42; i++) {
        var todos = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${i}`
        );
        todos = await todos.json();
        array.push(todos.results);
      }
      array.shift();
      let set = array.flat(Infinity);
      let mujeres = set.filter((e)=>e.gender == 'unknown' )
      setPersonas(mujeres);
    };
  
    return (
      <div  >
       
        <Pagination 
          
          personPerPage={personPerPage}
          actualPage={actualPage}
          setActualPage={setActualPage}
          totalPersonas={totalPersonas}
        />
        <div 
            style={{
            margin: "20px",  
            display: "grid",
            gridTemplateColumns: "300px 300px 300px 300px",
          }}
        >
          {personas
            ? personas
                .map((e) =>(
                  
                   <Card key={e.id} personaje={e} />
                  ))
                .slice(firstIndex, lastIndex)
            : null}
        </div>
      </div>
    );
}

export default PersonajeDesconocidoDos;
