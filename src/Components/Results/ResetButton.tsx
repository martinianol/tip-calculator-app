const ResetButton = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="bg-green-400 rounded-[5px] px-8 py-2 text-preset4 text-green-800 border-none hover:bg-green-200 hover:text-green-900 disabled:bg-green-750 disabled:cursor-none disabled:hover:text-green-800"
      onClick={handleClick}
      disabled={disabled}
    >
      RESET
    </button>
  );
};

export default ResetButton;
