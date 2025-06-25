import { useState } from "react";

const INITIAL_STATE = {
  billValue: null,
  numberOfPeople: null,
  discretTipPercentage: 0,
  customTipPercentage: null,
};

const useMain = () => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  const {
    billValue,
    numberOfPeople,
    discretTipPercentage,
    customTipPercentage,
  } = formValues;

  const tipPercentage = customTipPercentage || discretTipPercentage;

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

  return {
    billValue,
    canReset,
    handleInputChange,
    handleReset,
    numberOfPeople,
    discretTipPercentage,
    customTipPercentage,
    tipValuePerPerson,
    totalPerPerson,
  };
};

export default useMain;
