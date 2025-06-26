import Form from "../Form/Form";
import Results from "../Results/Results";
import useMain from "./useMain";

const Main = () => {
  const {
    billValue,
    canReset,
    tipPercentage,
    isCustom,
    handleInputChange,
    handleReset,
    numberOfPeople,
    tipValuePerPerson,
    totalPerPerson,
  } = useMain();

  return (
    <main className="bg-white px-6 py-8 flex flex-col gap-8 rounded-t-[25px] md:px-20 md:py-12 md:gap-10 md:rounded-[25px] md:max-w-[608px] md:mx-auto lg:flex-row lg:gap-12 lg:max-w-[920px] lg:p-8">
      <Form
        onChange={handleInputChange}
        totalValue={billValue}
        numberOfPeople={numberOfPeople}
        tipPercentage={tipPercentage}
        isCustom={isCustom}
      />
      <Results
        onClick={handleReset}
        tipValue={tipValuePerPerson}
        totalValue={totalPerPerson}
        canReset={canReset}
      />
    </main>
  );
};

export default Main;
