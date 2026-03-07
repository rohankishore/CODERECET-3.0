export default function RegisterButton({ className = "" }) {
  const handleClick = () => {
    window.open("https://code-recet-3.devfolio.co/application", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#d58f15] relative rounded-[30px] cursor-pointer transition-all duration-300 ease-in-out group px-6 sm:px-8 w-[200px] h-[50px] sm:w-[250px] sm:h-[60px] ${className}`}
    >
      <div className="overflow-clip relative size-full">
        <div className="absolute font-satoshi_v leading-[0] left-1/2 not-italic text-[#000000] text-[18px] sm:text-[24px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <p className="block leading-[normal] whitespace-pre">REGISTER NOW</p>
        </div>
      </div>
      <div className="absolute border-[#e6e6fa] border-[3px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="absolute border-[#e6e6fa] border-[3px] border-solid inset-0 pointer-events-none rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-[0px_0px_25px_0px_rgba(213,143,21,0.698)]" />
    </button>
  );
}
