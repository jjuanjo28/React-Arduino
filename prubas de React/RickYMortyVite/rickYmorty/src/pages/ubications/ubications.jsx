import React from "react";
import { useNavigate } from "react-router-dom";

const Ubications = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>ubications</h1>
            <div>
        <button
          onClick={() => navigate("/rickAndMorty/ubications/allUbications")}
          className="btn btn-lg btn-danger "
          style={{margin:"20px"}}
        >
          All Ubications
        </button>
      </div>
        </div>
    );
}

export default Ubications;
