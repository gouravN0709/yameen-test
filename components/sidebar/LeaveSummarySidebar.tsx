import { useEventStore } from "@/lib/zustand/useEventStore";

interface LeaveSummarySidebarProps {
  selectedDate: string; // Format: "YYYY-MM-DD"
}

export function LeaveSummarySidebar({
  selectedDate,
}: LeaveSummarySidebarProps) {
  const { events } = useEventStore();

  // Filter events for the selected date
  const leaveEvents = events.filter((event) => event.date === selectedDate);

  console.log(leaveEvents);

  return (
    <div className="w-72 border-2 border-t-[#9013FE] bg-white p-4 overflow-y-auto shadow-sm custom-scroll ml-2">
      <div className="mb-4 text-lg font-bold text-slate-800">
        Leaves for{" "}
        {new Date(selectedDate).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>
      {leaveEvents.length === 0 ? (
        <div className="text-sm text-slate-600">No leaves scheduled.</div>
      ) : (
        leaveEvents.map((event) => (
          <div
            key={event.id}
            className="mb-4 overflow-hidden bg-[#B3A1F4] shadow-md"
          >
            <div className="border-l-4 border-[#FFCC00] p-2">
              <h3 className="font-bold text-black">{event.title}</h3>
              {event.reason && (
                <>
                  <h4 className="mt-3 font-bold text-black">
                    Reason for Request:
                  </h4>
                  <p className="text-black text-[14px] leading-[18px]">
                    {event.reason}
                  </p>
                </>
              )}
              {event.description && (
                <>
                  <h4 className="mt-3 font-bold text-black">Description:</h4>
                  <p className="text-black text-[14px] leading-[18px]">
                    {event.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
