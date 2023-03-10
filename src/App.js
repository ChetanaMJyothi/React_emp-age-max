import AddUser from './user/AddUser.js';
import './App.css';
import ListUser  from './user/ListUser.js';
import { useState } from 'react';

function App() {
  const [addUser, setAddUser]=useState([]);
  function addUserHandler(uName, uAge){
    setAddUser((prevAddUser)=>{
      return [...prevAddUser,{userName:uName, age:uAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <ListUser users={addUser}/>
    </div>
  );
}

export default App;
