export const HomeProductionLayout = () => {
  const d = new Date(2025, 10, 2, 5, 51, 22);
  return (
    <div className="min-w-fit max-sm:mb-2 text-2xl dark:bg-blue-950  font-sans  bg-blue-400 rounded-2xl m-1 text-white">
      <small className="flex  justify-end w-full text-[10px] p-2 ">{`${d.getFullYear()}/${d.getMonth()}/${d.getUTCDate()}/${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</small>
      <div className="flex justify-between items-center justify-items-center w-full pt-2 pl-2 pr-2 pb-2">
        <h1 className="pr-2 font-bold">Production</h1>
        <span className="text-xl">Items : 71</span>
      </div>
      <div className="text-[20px] w-full flex p-2 font-light items-start justify-end">
        <button
          type="button"
          className="p-3 mr-2 rounded-2xl bg-purple-500 hover:bg-purple-300 hover:text-black"
        >
          Edit
        </button>
        <button
          type="button"
          className="p-3 mr-2 rounded-2xl bg-green-500 hover:bg-green-300 hover:text-black"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export const HomeSelesLayput = () => {
  return (
    <div className="max-w-full max-sm:mb-2 font-sans dark:bg-red-950 text-white bg-red-400 rounded-2xl mr-1 ml-1">
      <div className="upper w-full flex justify-between text-[10px] p-2">
        <span className="pl-2">Seles Form</span>
        <span className="">
          2025-10-1 /<time>10:22</time>
        </span>
      </div>
      <div className="container  flex justify-between items-center p-2 text-2xl">
        <div className="name p-2">Ahmad</div>
        <div className="items text-xl">Items : 8</div>
      </div>
      <div className="buttons w-full flex justify-end p-2 text-[20px] font-light  text-white ">
        <button
          type="button"
          className="p-3 mr-2 rounded-2xl bg-purple-500 hover:bg-purple-300 hover:text-black"
        >
          Edit
        </button>
        <button
          type="button"
          className="pr-2 pl-2 mr-2 rounded-2xl bg-green-500 hover:bg-green-300 hover:text-black"
        >
          Save
        </button>
      </div>
    </div>
  );
};
