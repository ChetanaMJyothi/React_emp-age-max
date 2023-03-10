import Card from '../UI/Card.js'
import Button from '../UI/Button.js'
import classes from './AddUser.module.css'
import ErrorModule from '../UI/ErrorModule.js';
import { useState } from 'react';
function AddUser(props) {
  const [enteredName, setEnteredName ] =useState('');
  const [enteredAge, setEnteredAge] =useState('');
const[errorMsg, setErrorMsg] = useState('');
  function addUserHandler(event){
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setErrorMsg({
        errorTitle:"Invalid Title And Age",
        errorMessage:"Name And Age Should Be >0"
      })
      return ;
    }
    if(+enteredAge < 1){
      setErrorMsg({
        errorTitle:"Invalid Age",
        errorMessage:"Age Should Be >1"
      })
      return ;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge('');
    setEnteredName('');
    
  }
  function onOkayClick(){
    setErrorMsg('');
  }
  function nameHandler(event){
    event.preventDefault();
      setEnteredName(event.target.value);
      console.log(enteredName);
      
  }
  function ageHandler(event){
    event.preventDefault();
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  }
  return (
    <div>
    {errorMsg && <ErrorModule text={errorMsg.errorTitle} errorMsg={errorMsg.errorMessage} onOkay={onOkayClick}></ErrorModule>}
    <Card>
      <form>
        <label htmlFor="userName">Enter Name:</label>
        <input type="text" id="userName" value={enteredName} onChange={nameHandler}></input>
        <label htmlFor="userAge">Enter Age:</label>
        <input type="number" id="userAge" value={enteredAge} onChange={ageHandler}></input>
        <Button className={classes.buttonC} onClick={addUserHandler}>Click Me!</Button>
      </form>
      </Card> 
      </div>
  );
}

export default AddUser;
