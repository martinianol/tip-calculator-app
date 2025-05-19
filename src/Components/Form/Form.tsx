import Input from "./Inputs/Input";
import iconPerson from "../../../images/icon-person.svg";
import iconDollar from "../../../images/icon-dollar.svg";
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
  return (
    <form className="flex flex-col">
      <Input
        label="Bill"
        id="billValue"
        value={totalValue}
        onChange={onChange}
        icon={DollarIcon}
      />
      <div>
        Select Tip %<button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <button>Custom</button>
      </div>
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
