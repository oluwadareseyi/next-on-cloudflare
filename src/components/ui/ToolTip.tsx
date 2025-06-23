type ToolTipTypes = {
  children: React.ReactNode;
  dialogBody?: React.ReactNode;
};

const ToolTip = ({ children, dialogBody }: ToolTipTypes) => {
  return (
    <div className="group relative">
      {children}
      <div className="absolute top-[120%] left-1/2 -translate-x-1/2 z-[3] px-4 py-1 rounded-[90px] text-white text-[12px] font-geist font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-[#33333380] text-center w-max max-w-[250px]">
        {dialogBody}
      </div>
    </div>
  );
};

export default ToolTip;
