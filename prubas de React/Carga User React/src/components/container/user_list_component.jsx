import React, {useState, useEffect } from 'react';
import { User } from '../../models/user.class';
import CreateUserComponent from '../pure/forms/create_user_component';
import CreateUserFormikComponent from '../pure/forms/create_user_Formik_component';
import LinkUserFormik from '../pure/forms/link_user_Formik';
import UserComponent from '../pure/user_component';
import { useHref } from "react-router-dom"

const UserListComponent = () => {
const userOne = new User("Juanjo","como@gmail.com","123456",false)
const userTwo = new User("Juanjo2","como@gmail.com","123456",false)
const userThree = new User("Juanjo3","como@gmail.com","123456",false)

    const [userList, setUserList] = useState([userOne,userTwo,userThree])
    let userState = false;
    let navigate = useHref()
    function clearUser(user) {
      let index = userList.indexOf(user)
      let userListTemp = [...userList]
      userListTemp.splice(index,1)
      setUserList(userListTemp)
     }
     function changeState(user) {
      let userListTemp = [...userList]
      user.estado = !user.estado
      setUserList(userListTemp)
     }
     function addUser(user) {
     user.estado = true
     const userListTemp = [...userList]
     const userRep = userListTemp.find(e=>e.name === user.name || e.email === user.email)
     if(!userRep){
       userListTemp.push(user)
       localStorage.setItem("algo", JSON.stringify(user))
       let algo = localStorage.getItem("algo")
       algo = JSON.parse(algo)
       setUserList(userListTemp)
        } else {
      alert("el user ya existe")
     }
    }
    function checkUser(user) {
      user.estado = "true"
      console.log(user) 
      console.log(userList)
      const check = userList.some((e) => e.name === user.name && e.password === user.password)
      console.log("soy check:" ,check)
      if(check){
        console.log("encontre el usuario")
        userState = true
        console.log(navigate)    
      } else {
        alert("el usuario no se a encontrado")
      }
    }



    return (
        <div className='card'>
        <div className='card-title'>
        <h2 style={{paddingTop:"25px", fontWeight:"bold", color:"green"}}>Listado de Usuarios</h2>
        </div>
        <div className='card-body'>
        <table className='table'>
        <thead>
        <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Estado</th>
        </tr>
        </thead>

        <tbody>
       
        {userList.map((user,index)=>{
       
         return(
          <UserComponent
            user={user}
            key={index}
            erase={clearUser}
            change={changeState}
            ></UserComponent>
         )
     
        })}
    </tbody>
        </table>
        </div>
        <br/>{navigate === "/users" ? <LinkUserFormik verify={checkUser}></LinkUserFormik> : <CreateUserFormikComponent add={addUser}></CreateUserFormikComponent> }

        {/* <CreateUserFormikComponent add={addUser}></CreateUserFormikComponent> 
        <LinkUserFormik verify={checkUser}></LinkUserFormik> */}
        {/* <CreateUserComponent add={addUser}></CreateUserComponent> */}
         </div>
    );
};

export default UserListComponent;
