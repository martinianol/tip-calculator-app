import Input from "./Inputs/Input";
interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  totalValue: number;
}

const Form = ({ onChange, totalValue }: FormProps) => {
  return (
    <form className="flex flex-col">
      <Input label="bill" value={totalValue} onChange={onChange} />
      <div>
        Select Tip %<button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <button>Custom</button>
      </div>
      <Input label="number of people" value={totalValue} onChange={onChange} />
    </form>
  );
};

export default Form;
