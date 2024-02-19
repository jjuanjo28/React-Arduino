import React from "react";

const Card = ({ personaje }) => {

  return (
    <div key={personaje.id}
      style={{
        width: "230px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
            <div className="card" style={{width: "280px",height:"520px" , backgroundColor:"yellow", margin:"10px"}}>
              <h3 className="card-title">{personaje.name}</h3>
              <img style={{ width: "auto" }} src={personaje.image} alt={personaje.image} />
              <div>
               {personaje.status == "Alive" ? (<h3 style={{margin:"10px"}}><span class="badge bg-success">Vivo</span></h3>):(<h3><span class="badge bg-danger">Muerto</span></h3>)} 
              </div>

            
              <div className="card-body">
                <h5 className="card-title">Specie: {personaje.species}</h5>
                <h5 className="card-text">Genero: {personaje.gender}</h5>
                <h5 className="card-text" >Origen: {personaje.origin.name}</h5>
              </div>
            </div>
         
       
    </div>
  );
};

export default Card;
