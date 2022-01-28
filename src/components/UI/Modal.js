import classes from "./Card.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}></div>
    </div>
  );
};

export default Modal;
