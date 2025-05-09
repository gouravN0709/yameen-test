interface CreateEventModalProps {
    isOpen: boolean;
    newEvent: { title: string; reason: string; description: string; date: string };
    setNewEvent: (event: {
      title: string;
      reason: string;
      description: string;
      date: string;
    }) => void;
    onCreate: () => void;
    onClose: () => void;
  }
  
  export function CreateEventModal({
    isOpen,
    newEvent,
    setNewEvent,
    onCreate,
    onClose,
  }: CreateEventModalProps) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 shadow-md w-96">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Create New Event</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-800 mb-1">Title</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full px-3 py-2 border rounded-sm text-slate-800"
              placeholder="Enter event title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-800 mb-1">
              Reason for Request
            </label>
            <textarea
              value={newEvent.reason}
              onChange={(e) => setNewEvent({ ...newEvent, reason: e.target.value })}
              className="w-full px-3 py-2 border rounded-sm text-slate-800"
              placeholder="Enter reason for request"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-800 mb-1">Description</label>
            <textarea
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-sm text-slate-800"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-800 mb-1">Date</label>
            <input
              type="text"
              value={newEvent.date}
              readOnly
              className="w-full px-3 py-2 border rounded-sm text-slate-800 bg-gray-100"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={onCreate}
              className="px-4 py-2 bg-[#9013FE] text-white rounded-sm shadow-md hover:from-purple-700 hover:to-indigo-700"
            >
              Create
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-slate-800 rounded-sm shadow-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }