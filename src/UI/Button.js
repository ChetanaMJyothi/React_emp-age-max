import classes from './Button.module.css';
function Button(props){

  return(
    <button type={props.type || "button"} className={`${classes.button71Class} `} onClick={props.onClick}>{props.children} </button>
  )
}

export default Button;