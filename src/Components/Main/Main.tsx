import { useState } from "react";
import Form from "../Form/Form";
import Results from "../Results/Results";

const INITIAL_STATE = {
  billValue: null,
  numberOfPeople: null,
  tipPercentage: 0,
};

const Main = () => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  const { billValue, numberOfPeople, tipPercentage } = formValues;

  const tipValuePerPerson =
    numberOfPeople === null || billValue === null || numberOfPeople === 0
      ? 0
      : (billValue * tipPercentage) / (100 * numberOfPeople);

  const totalPerPerson =
    numberOfPeople === null || billValue === null || numberOfPeople === 0
      ? 0
      : tipValuePerPerson + billValue / numberOfPeople;

  const handleReset = () => {
    setFormValues(INITIAL_STATE);
  };

  const handleInputChange = (key: string, value: string | number) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [key]: Number(value),
      };
    });
  };

  const canReset = Object.keys(INITIAL_STATE).some(
    (key) =>
      formValues[key as keyof typeof INITIAL_STATE] !==
      INITIAL_STATE[key as keyof typeof INITIAL_STATE]
  );
  return (
    <main className="bg-white mt-10  px-6 py-8 flex flex-1 flex-col gap-8 rounded-t-[25px] md:rounded-[25px] md:min-w-[608px] md:mx-auto lg:flex-row lg:gap-12 lg:min-w-[920px]">
      <Form
        onChange={handleInputChange}
        totalValue={billValue}
        numberOfPeople={numberOfPeople}
        tipPercentage={tipPercentage}
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
