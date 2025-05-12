
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
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-96 transform transition-all duration-300 scale-100">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Manage Event: {selectedEvent.title}
        </h3>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-slate-700 text-sm font-medium rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onApprove}
            className="px-4 py-2 bg-[#2ecc71] text-white text-sm font-medium rounded-md hover:bg-[#27ae60] transition-colors duration-200"
          >
            Approve
          </button>
          <button
            onClick={onReject}
            className="px-4 py-2 bg-[#e74c3c] text-white text-sm font-medium rounded-md hover:bg-[#c0392b] transition-colors duration-200"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
