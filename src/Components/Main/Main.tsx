import { useState } from "react";
import Form from "../Form/Form";
import Results from "../Results/Results";

const INITIAL_STATE = {
  billValue: 0,
  numberOfPeople: 0,
  tipPercentage: 0,
};

const Main = () => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  const { billValue, numberOfPeople, tipPercentage } = formValues;

  const tipValuePerPerson = (billValue * tipPercentage) / 100 / numberOfPeople;
  const totalPerPerson = tipValuePerPerson + billValue / numberOfPeople;

  const handleReset = () => {
    setFormValues(INITIAL_STATE);
  };

  return (
    <main className="bg-white mt-10  px-6 py-8 flex flex-col gap-8 rounded-t-[25px] md:rounded-[25px] md:min-w-[608px] md:mx-auto lg:flex-row lg:gap-12 lg:min-w-[920px]">
      <Form />
      <Results
        onClick={handleReset}
        tipValue={tipValuePerPerson}
        totalValue={totalPerPerson}
      />
    </main>
  );
};

export default Main;
