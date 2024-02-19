import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Header } from "./components/Header"
import { Email } from "./components/Email"
 
import './App.css'
import { addUser } from "./redux/userSlice"

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
    .then((response)=> response.json())
    .then ((data) => dispatch(addUser(data)))
    .catch ((error) => console.log(error))
  }, [])

  return <div className='App'>
  <Header />
  <Email />
  </div>
}

export default App
