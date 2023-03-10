import classes from './Error.module.css';
import Button from './Button';
import Card from './Card';
function ErrorModule(props){
  function clearErrorMsg(){
  props.onOkay();

  }
return (
  <div className={classes.divClass} onClick={clearErrorMsg}>
    <Card className={classes.cardDiv}>
    <h1>{props.text}</h1>
    <p>{props.errorMsg}</p>
    <Button onClick={clearErrorMsg}>Okay!</Button>
    </Card>
  </div>
)
}

export default ErrorModule;