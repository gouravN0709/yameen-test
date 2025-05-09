import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EventState {
  events: any[];
  addEvent: (event: any) => void;
  updateEvent: (id: string, updates: any) => void;
  deleteEvent: (id: string) => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: [
        { id: "1", title: "Medical Appointment", date: "2025-02-03", color: "#3788d8", className: "text-white text-xs", reason: "Doctor's visit", description: "Need to attend a medical checkup." },
        { id: "2", title: "Family Event", date: "2025-02-03", color: "#ff49db", className: "text-white text-xs", reason: "Family gathering", description: "Attending a family reunion." },
        { id: "3", title: "Vacation", date: "2025-02-04", color: "#3788d8", className: "text-white text-xs", reason: "Personal time off", description: "Planned vacation." },
        { id: "4", title: "Shift Change", date: "2025-02-04", color: "#ff49db", className: "text-white text-xs", reason: "Prior commitment", description: "Need to swap shifts." },
        { id: "5", title: "Conference", date: "2025-02-04", color: "#00d4ff", className: "text-white text-xs", reason: "Work event", description: "Attending a professional conference." },
        { id: "6", title: "Personal Leave", date: "2025-02-05", color: "#3788d8", className: "text-white text-xs", reason: "Personal matter", description: "Handling personal affairs." },
        { id: "7", title: "Training", date: "2025-02-05", color: "#ff49db", className: "text-white text-xs", reason: "Professional development", description: "Attending a training session." },
        { id: "8", title: "Sick Leave", date: "2025-02-05", color: "#00d4ff", className: "text-white text-xs", reason: "Illness", description: "Recovering from flu." },
        { id: "9", title: "Wedding", date: "2025-02-06", color: "#3788d8", className: "text-white text-xs", reason: "Attending a wedding", description: "Friend's wedding ceremony." },
        { id: "10", title: "Travel", date: "2025-02-06", color: "#ff49db", className: "text-white text-xs", reason: "Trip", description: "Short travel for leisure." },
        { id: "11", title: "Appointment", date: "2025-02-07", color: "#3788d8", className: "text-white text-xs", reason: "Dental appointment", description: "Routine dental checkup." },
        { id: "12", title: "Family Leave", date: "2025-02-07", color: "#ff49db", className: "text-white text-xs", reason: "Family emergency", description: "Need to attend to family matters." },
      ],
      addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
      updateEvent: (id, updates) =>
        set((state) => ({
          events: state.events.map((event) =>
            event.id === id ? { ...event, ...updates } : event
          ),
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
    }),
    {
      name: 'event-storage',
    }
  )
);