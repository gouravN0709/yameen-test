import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onViewChange: (view: string) => void;
  currentMonthYear: string;
}

export function CalendarHeader({
  onPrev,
  onNext,
  onToday,
  onViewChange,
  currentMonthYear,
}: CalendarHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-l-sm bg-[#320759] text-white hover:bg-purple-800 border-none shadow-md"
          onClick={onPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-r-sm bg-[#320759] text-white hover:bg-purple-800 border-none shadow-md"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          className="ml-2 rounded-sm px-6 py-2 bg-[#9013FE] text-white shadow-md hover:from-purple-700 hover:to-indigo-700"
          onClick={onToday}
        >
          Today
        </button>
      </div>
      <h2 className="text-2xl font-bold text-[#515151]">{currentMonthYear}</h2>
      <div className="flex bg-white p-1 rounded-full shadow-sm">
        <button
          className="rounded-l-sm px-4 py-2 bg-[#9013FE] text-white shadow-md hover:from-purple-700 hover:to-indigo-700"
          onClick={() => onViewChange("dayGridMonth")}
        >
          Month
        </button>
        <button
          className="px-4 py-2 bg-[#9013FE] text-white"
          onClick={() => onViewChange("timeGridWeek")}
        >
          Week
        </button>
        <button
          className="px-4 py-2 bg-[#9013FE] text-white"
          onClick={() => onViewChange("timeGridDay")}
        >
          Day
        </button>
        <button
          className="rounded-r-sm px-4 py-2 bg-[#9013FE] text-white "
          onClick={() => onViewChange("listWeek")}
        >
          Event
        </button>
      </div>
    </div>
  );
}
