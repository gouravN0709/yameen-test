import { useState } from "react";
import { useEventStore, useFilterStore } from "@/lib/zustand/store";

interface LeaveSummarySidebarProps {
  selectedDate: string; // Format: "YYYY-MM-DD"
}

export function LeaveSummarySidebar({
  selectedDate,
}: LeaveSummarySidebarProps) {
  const { events, setEventStatus } = useEventStore();
  const { employees } = useFilterStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [actionType, setActionType] = useState<"accept" | "reject" | null>(
    null
  );

  // Filter events for the selected date
  const leaveEvents = events.filter((event) => event.date === selectedDate);

  // Handle button clicks to open modal
  const handleActionClick = (eventId: string, action: "accept" | "reject") => {
    setSelectedEventId(eventId);
    setActionType(action);
    setIsModalOpen(true);
  };

  // Handle modal confirmation
  const handleConfirmAction = () => {
    if (selectedEventId && actionType) {
      setEventStatus(
        selectedEventId,
        actionType === "accept" ? "accepted" : "rejected"
      );
      setIsModalOpen(false);
      setSelectedEventId(null);
      setActionType(null);
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEventId(null);
    setActionType(null);
  };

  return (
    <div className="w-72 border-2 h-[100vh] border-t-[#9013FE] bg-white p-6 overflow-y-auto shadow-lg ml-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 custom-scroll">
      <div className="mb-6 text-xl font-semibold text-slate-800">
        Leaves for{" "}
        {new Date(selectedDate).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>
      {leaveEvents.length === 0 ? (
        <div className="text-sm text-slate-500 italic">
          No leaves scheduled.
        </div>
      ) : (
        leaveEvents.map((event) => {
          const employee = employees.find((emp) => emp.id === event.employeeId);
          console.log("event", event);
          return (
            <div
              key={event.id}
              style={{ backgroundColor: event.color || "#e2e8f0" }}
              className={`mb-4  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200`}
            >
              <div className="border-l-4 border-[#FFCC00] p-4">
                <h3 className="text-lg font-bold text-black">{event.title}</h3>
                <p className="text-sm text-black mt-1">
                  <span className="font-medium">Employee:</span>{" "}
                  {employee?.label || "Unknown"}
                </p>
                {event.reason && (
                  <>
                    <h4 className="mt-4 text-sm font-semibold text-black">
                      Reason for Request:
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      {event.reason}
                    </p>
                  </>
                )}
                {event.description && (
                  <>
                    <h4 className="mt-4 text-sm font-semibold text-black">
                      Description:
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      {event.description}
                    </p>
                  </>
                )}
                {event.status && (
                  <>
                    <h4 className="mt-4 text-sm font-semibold text-black">
                      Status:
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      {event.status}
                    </p>
                  </>
                )}
                {event?.status === "pending" ? (
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={() => handleActionClick(event.id, "accept")}
                      className="px-4 py-1.5 bg-[#2ecc71] text-white text-sm font-medium rounded-md hover:bg-[#27ae60] transition-colors duration-200"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleActionClick(event.id, "reject")}
                      className="px-4 py-1.5 bg-[#e74c3c] text-white text-sm font-medium rounded-md hover:bg-[#c0392b] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })
      )}

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-96 transform transition-all duration-300 scale-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Confirm {actionType === "accept" ? "Accept" : "Reject"}
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Are you sure you want to {actionType} this leave request?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-slate-700 text-sm font-medium rounded-md hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors duration-200 ${
                  actionType === "accept"
                    ? "bg-[#2ecc71] hover:bg-[#27ae60]"
                    : "bg-[#e74c3c] hover:bg-[#c0392b]"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
