import "./ButtonIncrement.css";
import { ButtonIncrementProps } from "./buttonIncrementProps";

export const ButtonIncrement = ({
  incrementButton = () => {},
}: ButtonIncrementProps) => {
  return (
    <div className="card">
      <button onClick={() => incrementButton(10)}>+</button>
    </div>
  );
};
