import { useState } from "react";
import Form from "../Form/Form";
import Results from "../Results/Results";

const Main = () => {
  const [tipValue, setTipValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);


  const handleReset = () => {
    console.log("Reset button clicked...");
  };

  return (
    <main className="bg-white mt-10  px-6 py-8 flex flex-col gap-8 rounded-t-[25px] md:rounded-[25px] md:min-w-[608px] md:mx-auto lg:flex-row lg:gap-12 lg:min-w-[920px]">
      <Form />
      <Results onClick={handleReset} tipValue={tipValue} totalValue={totalValue} />
    </main>
  );
};

export default Main;
