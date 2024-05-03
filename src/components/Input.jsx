import style from "./Input.module.css";
function Input({ displayVal }) {
  return (
    <input
      type="text"
      className={style.innerbox}
      value={displayVal}
      readOnly
    ></input>
  );
}
export default Input;
