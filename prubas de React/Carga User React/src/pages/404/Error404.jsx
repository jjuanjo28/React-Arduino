import React from 'react';
import {useNavigate} from "react-router-dom"

const Error404 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Error404 Page</h1>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    );
}

export default Error404;
