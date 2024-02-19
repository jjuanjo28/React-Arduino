import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav  className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         
                    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li style={{margin:"10px"}}>
             <button onClick={()=> navigate("/")} className="btn btn-lg btn-danger " >Home Page</button>
             </li>
             <li style={{margin:"10px"}}>
             <button onClick={()=> navigate("/rickAndMorty/characters")} className="btn btn-lg btn-warning " >Personajes</button>
             </li>
             <li style={{margin:"10px"}}>
             <button onClick={()=> navigate("/rickAndMorty/ubications")} className="btn btn-lg btn-warning " >Filtrados</button>
             </li>
             <li style={{margin:"10px"}}>
             <button onClick={()=> navigate("/")} className="btn btn-lg btn-warning " >Episodios</button>
             </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
}

export default NavBar;
