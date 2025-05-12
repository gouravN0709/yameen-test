import { create } from "zustand";
import { persist } from "zustand/middleware";

// Initial data with relationships (unchanged)
const initialDepartments = [
  { id: "reservations", label: "Reservations & Booking", checked: true },
  { id: "housekeeping", label: "Housekeeping", checked: false },
  { id: "security", label: "Security & Safety", checked: false },
  { id: "belldesk", label: "Bell Desk & Porter Services", checked: false },
];

const initialEmployees = [
  {
    id: "leslie",
    label: "Leslie Alexander",
    checked: false,
    color: "#3788d8", // Blue
    departmentId: "reservations",
  },
  {
    id: "esther",
    label: "Esther Howard",
    checked: false,
    color: "#ff49db", // Pink
    departmentId: "housekeeping",
  },
  {
    id: "jenny1",
    label: "Jenny Wilson",
    checked: false,
    color: "#00d4ff", // Cyan
    departmentId: "security",
  },
  {
    id: "brooklyn",
    label: "Brooklyn Simmons",
    checked: false,
    color: "#f1c40f", // Yellow
    departmentId: "belldesk",
  },
];

const initialCustomers = [
  {
    id: "jenny2",
    label: "Jenny Wilson",
    checked: false,
    color: "j",
    employeeId: "leslie",
  },
  {
    id: "robert",
    label: "Robert Fox",
    checked: false,
    color: "r",
    employeeId: "esther",
  },
  {
    id: "jacob",
    label: "Jacob Jones",
    checked: false,
    color: "j",
    employeeId: "jenny1",
  },
  {
    id: "alice",
    label: "Alice Border",
    checked: false,
    color: "a",
    employeeId: "brooklyn",
  },
];

interface FilterState {
  departments: { id: string; label: string; checked: boolean }[];
  employees: {
    id: string;
    label: string;
    checked: boolean;
    color: string;
    departmentId: string;
  }[];
  customers: {
    id: string;
    label: string;
    checked: boolean;
    color: string;
    employeeId: string;
  }[];
  selectedDepartment: string | null;
  selectedEmployee: string | null;
  selectedCustomer: string | null;
  setDepartmentChecked: (id: string, checked: boolean) => void;
  setEmployeeChecked: (id: string, checked: boolean) => void;
  setCustomerChecked: (id: string, checked: boolean) => void;
  clearSelections: () => void;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      departments: initialDepartments,
      employees: initialEmployees,
      customers: initialCustomers,
      selectedDepartment: "reservations",
      selectedEmployee: null,
      selectedCustomer: null,
      setDepartmentChecked: (id, checked) =>
        set((state) => {
          const departments = state.departments.map((dept) =>
            dept.id === id ? { ...dept, checked } : { ...dept, checked: false }
          );
          const selectedDepartment = checked ? id : null;
          return {
            departments,
            selectedDepartment,
            selectedEmployee: null,
            selectedCustomer: null,
          };
        }),
      setEmployeeChecked: (id, checked) =>
        set((state) => {
          const employees = state.employees.map((emp) =>
            emp.id === id ? { ...emp, checked } : { ...emp, checked: false }
          );
          const selectedEmployee = checked ? id : null;
          return { employees, selectedEmployee, selectedCustomer: null };
        }),
      setCustomerChecked: (id, checked) =>
        set((state) => {
          const customers = state.customers.map((cust) =>
            cust.id === id ? { ...cust, checked } : { ...cust, checked: false }
          );
          const selectedCustomer = checked ? id : null;
          return { customers, selectedCustomer };
        }),
      clearSelections: () =>
        set({
          departments: initialDepartments,
          employees: initialEmployees,
          customers: initialCustomers,
          selectedDepartment: "reservations",
          selectedEmployee: null,
          selectedCustomer: null,
        }),
    }),
    {
      name: "filter-storage",
    }
  )
);

export interface Event {
  id: string;
  title: string;
  date: string;
  color: string; // Employee's color for background
  className: string;
  reason: string;
  description: string;
  employeeId: string;
  status: "accepted" | "rejected" | "normal";
  statusColor?: string; // Optional: for dot color
}

interface EventState {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (id: string, updates: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  setEventStatus: (
    id: string,
    status: "accepted" | "rejected" | "normal"
  ) => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: [
        {
          id: "1",
          title: "Medical Appointment",
          date: "2025-02-03",
          color: "#3788d8", // Leslie's color
          className: "text-white text-xs",
          reason: "Doctor's visit",
          description: "Need to attend a medical checkup.",
          employeeId: "leslie",
          status: "accepted",
          statusColor: "#2ecc71", // Green for accepted
        },
        {
          id: "2",
          title: "Family Event",
          date: "2025-02-03",
          color: "#ff49db", // Esther's color
          className: "text-white text-xs",
          reason: "Family gathering",
          description: "Attending a family reunion.",
          employeeId: "esther",
          status: "normal",
          statusColor: "#7f8c8d", // Gray for normal
        },
        {
          id: "3",
          title: "Vacation",
          date: "2025-02-04",
          color: "#00d4ff", // Jenny1's color
          className: "text-white text-xs",
          reason: "Personal time off",
          description: "Planned vacation.",
          employeeId: "jenny1",
          status: "rejected",
          statusColor: "#e74c3c", // Red for rejected
        },
        {
          id: "4",
          title: "Shift Change",
          date: "2025-02-04",
          color: "#f1c40f", // Brooklyn's color
          className: "text-white text-xs",
          reason: "Prior commitment",
          description: "Need to swap shifts.",
          employeeId: "brooklyn",
          status: "normal",
          statusColor: "#7f8c8d",
        },
        {
          id: "5",
          title: "Conference",
          date: "2025-02-04",
          color: "#3788d8", // Leslie's color
          className: "text-white text-xs",
          reason: "Work event",
          description: "Attending a professional conference.",
          employeeId: "leslie",
          status: "accepted",
          statusColor: "#2ecc71",
        },
        {
          id: "6",
          title: "Personal Leave",
          date: "2025-02-05",
          color: "#ff49db", // Esther's color
          className: "text-white text-xs",
          reason: "Personal matter",
          description: "Handling personal affairs.",
          employeeId: "esther",
          status: "rejected",
          statusColor: "#e74c3c",
        },
        {
          id: "7",
          title: "Training",
          date: "2025-02-05",
          color: "#00d4ff", // Jenny1's color
          className: "text-white text-xs",
          reason: "Professional development",
          description: "Attending a training session.",
          employeeId: "jenny1",
          status: "accepted",
          statusColor: "#2ecc71",
        },
        {
          id: "8",
          title: "Sick Leave",
          date: "2025-02-05",
          color: "#f1c40f", // Brooklyn's color
          className: "text-white text-xs",
          reason: "Illness",
          description: "Recovering from flu.",
          employeeId: "brooklyn",
          status: "normal",
          statusColor: "#7f8c8d",
        },
        {
          id: "9",
          title: "Wedding",
          date: "2025-02-06",
          color: "#3788d8", // Leslie's color
          className: "text-white text-xs",
          reason: "Attending a wedding",
          description: "Friend's wedding ceremony.",
          employeeId: "leslie",
          status: "normal",
          statusColor: "#7f8c8d",
        },
        {
          id: "10",
          title: "Travel",
          date: "2025-02-06",
          color: "#ff49db", // Esther's color
          className: "text-white text-xs",
          reason: "Trip",
          description: "Short travel for leisure.",
          employeeId: "esther",
          status: "accepted",
          statusColor: "#2ecc71",
        },
        {
          id: "11",
          title: "Appointment",
          date: "2025-02-07",
          color: "#00d4ff", // Jenny1's color
          className: "text-white text-xs",
          reason: "Dental appointment",
          description: "Routine dental checkup.",
          employeeId: "jenny1",
          status: "normal",
          statusColor: "#7f8c8d",
        },
        {
          id: "12",
          title: "Family Leave",
          date: "2025-02-07",
          color: "#f1c40f", // Brooklyn's color
          className: "text-white text-xs",
          reason: "Family emergency",
          description: "Need to attend to family matters.",
          employeeId: "brooklyn",
          status: "rejected",
          statusColor: "#e74c3c",
        },
      ],
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
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
      setEventStatus: (id, status) =>
        set((state) => ({
          events: state.events.map((event) =>
            event.id === id
              ? {
                  ...event,
                  status,
                  statusColor:
                    status === "accepted"
                      ? "#2ecc71"
                      : status === "rejected"
                        ? "#e74c3c"
                        : "#7f8c8d",
                }
              : event
          ),
        })),
    }),
    {
      name: "event-storage",
    }
  )
);
