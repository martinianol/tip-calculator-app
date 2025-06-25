import Input from "./Inputs/Input";
import iconPerson from "../../../images/icon-person.svg";
import iconDollar from "../../../images/icon-dollar.svg";
import { type FormEventHandler } from "react";
import TipButtonsInput from "./TipButtonsInput/TipButtonsInput";
interface FormProps {
  onChange: (keyValue: string, value: string | number | boolean) => void;
  totalValue: number | null;
  numberOfPeople: number | null;
  tipPercentage: number;
  isCustom: boolean;
}

const PersonIcon = (
  <img src={iconPerson} alt="" className="w-3 h-4 max-w-none" />
);
const DollarIcon = (
  <img src={iconDollar} alt="" className="w-3 h-4 max-w-none" />
);

const Form = ({
  onChange,
  totalValue,
  numberOfPeople,
  tipPercentage,
  isCustom,
}: FormProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) =>
    e.preventDefault();

  return (
    <form
      className="flex flex-col gap-8 px-2 md:px-0 md:gap-6 lg:flex-1 lg:justify-center lg:gap-10"
      onSubmit={handleSubmit}
    >
      <Input
        label="Bill"
        id="billValue"
        value={totalValue}
        onChange={onChange}
        icon={DollarIcon}
      />
      <TipButtonsInput
        tipPercentage={tipPercentage}
        isCustom={isCustom}
        onSelectTip={onChange}
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
