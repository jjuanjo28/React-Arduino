import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { User } from "../../models/user.class";

const UserComponent = ({ user,change,erase }) => {
  useEffect(() => {
    console.log("el user:", user, " a cambiado");
    return () => {
      console.log("se desmonto el user");
    };
  }, [user]);

  function verifyState(user) {
    if (user.estado) {
      return (
        <i
          onClick={()=>change(user)}
          className="bi bi-calendar-check"
          style={{ color: "green", marginRight: "15px" }}
        ></i>
      );
    } else {
      return (
        <i
           onClick={()=>change(user)}
          className="bi bi-calendar"
          style={{ color: "red", marginRight: "15px" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <td>
        <span className="ms-2">{user.name}</span>
      </td>

      <td>
        <span>{user.email}</span>
      </td>
      <td style={{cursor:"pointer"}}>
        <span>{verifyState(user)}</span>
        <i onClick={()=>erase(user)} className="bi bi-trash3" style={{ color: "red" }}></i>
      </td>
    </tr>
  );
};

UserComponent.propTypes = {
  user: PropTypes.instanceOf(User),
};

export default UserComponent;
