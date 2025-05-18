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
      className="bg-green-400 rounded-[5px] py-[8px] text-preset4 border-none hover:bg-green-200 disabled:bg-green-750 disabled:cursor-none"
      onClick={handleClick}
      disabled={disabled}
    >
      RESET
    </button>
  );
};

export default ResetButton;
