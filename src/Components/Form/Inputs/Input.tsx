interface InputProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="bill" className="text-preset5">
        {label}
      </label>
      <input
        type="number"
        id={label}
        placeholder="0"
        className=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
