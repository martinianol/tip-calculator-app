const Main = () => {
  return (
    <main className="bg-white px-6 py-8 flex flex-col flex-1 mt-10 rounded-t-[25px] md:rounded-[25px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="bill" className="text-preset1">
          Bill
        </label>
        <input type="number" id="bill" placeholder="0" className="" />
      </div>
      <div>
        Select Tip %<button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <button>Custom</button>
      </div>
      <div>Number of People</div>
      <div>
        Tip Amount / person Total / person
        <button>Reset</button>
      </div>
    </main>
  );
};

export default Main;
