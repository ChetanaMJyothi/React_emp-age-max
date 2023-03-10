
import classes from '../UI/Card.module.css'
function ListUser(props){

return(
  <div >
  <ul>
  {props.users.map((user)=>(
    <div className={classes.listDiv}>
    <li>{user.userName} {user.age}</li>
    </div>
  ))} 
  </ul>
  </div>
)
}

export default ListUser;