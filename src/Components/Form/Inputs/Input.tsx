interface InputProps {
  label: string;
  id: string;
  value: number;
  onChange: (key: string, e: string) => void;
  icon?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
}

const Input = ({
  label,
  id,
  value,
  onChange,
  icon,
  isError,
  errorMessage,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-preset5 text-grey-500 flex justify-between"
      >
        {label}
        {isError && (
          <span className="text-orange-400 text-preset5">{errorMessage}</span>
        )}
      </label>
      <div
        className={`flex items-center gap-2 rounded-[5px] px-4 py-2 bg-grey-50 border-2 ${
          isError ? "border-orange-400" : "border-transparent"
        } focus-within:border-green-400`}
      >
        <span className="text-grey-500">{icon}</span>
        <input
          type="number"
          id={id}
          placeholder="0"
          className="bg-transparent text-preset3 text-right outline-none min-w-0 caret-green-400"
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          min={0}
        />
      </div>
    </div>
  );
};

export default Input;
