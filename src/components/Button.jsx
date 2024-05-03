import style from "./Button.module.css";
const Button = ({ onButtonClick }) => {
  let buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.button_container}>
      {buttons.map((button) => (
        <button className={style.button} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};
export default Button;
