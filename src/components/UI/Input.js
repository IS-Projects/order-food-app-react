import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className || ""}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* props.input is an object, and using the spread operator will
      allow us to access each element in that object and add them here */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
