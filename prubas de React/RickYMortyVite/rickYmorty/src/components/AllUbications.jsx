import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./pure/Pagination";

const AllUbications = () => {
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
          `https://rickandmortyapi.com/api/location/${i}`
        );
        todos = await todos.json();
        array.push(todos);
      }
      array.shift();
      let set = array.flat(Infinity);
      console.log(set)
     // let mujeres = set.filter((e)=>e.gender == 'unknown' )
      setPersonas(set);
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
          {/* {personas
            ? personas
                .map((e) => <Card personaje={e} />)
                .slice(firstIndex, lastIndex)
            : null} */}
        </div>
      </div>
    );
}

export default AllUbications;
