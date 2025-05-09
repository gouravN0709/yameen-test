interface EventManagementModalProps {
  isOpen: boolean;
  selectedEvent: any;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export function EventManagementModal({
  isOpen,
  selectedEvent,
  onClose,
  onApprove,
  onReject,
}: EventManagementModalProps) {
  if (!isOpen || !selectedEvent) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-md w-96">
        <h3 className="text-lg font-bold text-slate-800 mb-4">
          Manage Event: {selectedEvent.title}
        </h3>
        <div className="flex justify-between mb-4">
          <button
            onClick={onApprove}
            className="px-4 py-2 bg-[#378000] text-white rounded-sm shadow-md hover:bg-green-700"
          >
            Approve
          </button>
          <button
            onClick={onReject}
            className="px-4 py-2 bg-[#FF0000] text-white rounded-sm shadow-md hover:bg-red-700"
          >
            Reject
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-gray-200 text-slate-800 rounded-sm shadow-md hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
