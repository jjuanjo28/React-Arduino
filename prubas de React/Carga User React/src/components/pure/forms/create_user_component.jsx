import React, { useRef } from "react";
import PropTypes from "prop-types";
import { User } from "../../../models/user.class";

const CreateUserComponent = ({ add }) => {
  const newName = useRef("");
  const newEmail = useRef("");

  function addUser(e) {
    e.preventDefault();
    const nuevoUsuario = new User(
      newName.current.value,
      newEmail.current.value,
      false
    );
    add(nuevoUsuario);
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <input ref={newName} placeholder="Ingrese usuario" />
        <input ref={newEmail} placeholder="Ingrese email" />
        <button className="btn btn-primary" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
};

CreateUserComponent.propTypes = {
    add: PropTypes.func.isRequired,
};

export default CreateUserComponent;
