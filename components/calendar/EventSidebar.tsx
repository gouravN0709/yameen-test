interface EventSidebarProps {
    selectedDate: string;
  }
  
  export function EventSidebar({ selectedDate }: EventSidebarProps) {
    return (
      <div className="w-72 border-2 border-t-[#9013FE] bg-white p-4 overflow-y-auto shadow-sm custom-scroll ml-2">
        <div className="mb-4 text-lg font-bold text-slate-800">{selectedDate}</div>
        <div className="mb-4 overflow-hidden bg-[#B3A1F4] shadow-md">
          <div className="border-l-4 border-[#FFCC00] p-2">
            <h3 className="font-bold text-black">Reason for Request:</h3>
            <p className="text-black text-[14px] leading-[18px]">
              I have a prior commitment on this date and would appreciate a shift
            </p>
            <h3 className="mt-3 font-bold text-black">Description:</h3>
            <p className="text-black text-[14px] leading-[18px]">
              I would like to request a shift change due to medical appointment.
            </p>
            <h3 className="mt-3 font-bold text-black">Date of Vacation:</h3>
            <p className="text-black text-[14px] leading-[18px]">06/02/2025</p>
          </div>
        </div>
        <div className="mb-4 overflow-hidden bg-[#E0427678] shadow-md">
          <div className="border-l-4 border-[#FFCC00] p-4">
            <h3 className="font-bold text-black">Reason for Request:</h3>
            <p className="text-black text-[14px] leading-[18px]">
              I have planned a family trip and would like to take leave on these dates.
            </p>
            <h3 className="mt-3 font-bold text-black">Description:</h3>
            <p className="text-black text-[14px] leading-[18px]">
              I would like to request vacation leave due to family event.
            </p>
            <h3 className="mt-3 font-bold text-black">Date of Vacation:</h3>
            <p className="text-black text-[14px] leading-[18px]">07/02/2025</p>
          </div>
        </div>
        <div className="overflow-hidden bg-[#A1F4EC] shadow-md">
          <div className="border-l-4 border-[#FFCC00] p-4">
            <h3 className="font-bold text-black">Reason for Request:</h3>
            <p className="text-black text-[14px] leading-[18px]">
              I have planned a family trip and would like to take leave on these dates.
            </p>
            <h3 className="mt-3 font-bold text-black">Description:</h3>
            <p className="text-black text-[14px] leading-[18px]">
              I would like to request vacation leave due to family event.
            </p>
            <h3 className="mt-3 font-bold text-black">Date of Vacation:</h3>
            <p className="text-black text-[14px] leading-[18px]">08/02/2025</p>
          </div>
        </div>
      </div>
    );
  }