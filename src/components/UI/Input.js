import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} />
    </div>
  );
};

export default Input;
