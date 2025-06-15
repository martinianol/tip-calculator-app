import Input from "./Inputs/Input";
import iconPerson from "../../../images/icon-person.svg";
import iconDollar from "../../../images/icon-dollar.svg";
import { useState, type FormEventHandler } from "react";
import TipButtonsInput from "./TipButtonsInput/TipButtonsInput";
interface FormProps {
  onChange: (keyValue: string, value: string) => void;
  totalValue: number;
  numberOfPeople: number;
}

const PersonIcon = (
  <img src={iconPerson} alt="" className="w-3 h-4 max-w-none" />
);
const DollarIcon = (
  <img src={iconDollar} alt="" className="w-3 h-4 max-w-none" />
);

const Form = ({ onChange, totalValue, numberOfPeople }: FormProps) => {
  const [tipPercentage, setTipPercentage] = useState<number | string | null>(
    null
  );
  const handleSelectTip = (val: number | string) => setTipPercentage(val);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) =>
    e.preventDefault();

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <Input
        label="Bill"
        id="billValue"
        value={totalValue}
        onChange={onChange}
        icon={DollarIcon}
      />
      <TipButtonsInput
        tipPercentage={tipPercentage}
        onSelectTip={handleSelectTip}
      />
      <Input
        label="Number of People"
        id="numberOfPeople"
        value={numberOfPeople}
        onChange={onChange}
        errorMessage="Can't be zero"
        isError={numberOfPeople === 0}
        icon={PersonIcon}
      />
    </form>
  );
};

export default Form;
