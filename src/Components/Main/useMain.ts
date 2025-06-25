import { useState } from "react";

type FormValues = {
  billValue: number | null;
  numberOfPeople: number | null;
  tipPercentage: number;
  isCustom: boolean;
};

const INITIAL_STATE = {
  billValue: null,
  numberOfPeople: null,
  tipPercentage: 0,
  isCustom: false,
};

const useMain = () => {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_STATE);

  const { billValue, numberOfPeople, tipPercentage, isCustom } = formValues;

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

  const handleInputChange = (key: string, value: string | number | boolean) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [key]: value,
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
    tipPercentage,
    isCustom,
    tipValuePerPerson,
    totalPerPerson,
  };
};

export default useMain;
