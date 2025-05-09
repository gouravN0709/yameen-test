import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Initial data with relationships
const initialDepartments = [
  { id: "reservations", label: "Reservations & Booking", checked: true },
  { id: "housekeeping", label: "Housekeeping", checked: false },
  { id: "security", label: "Security & Safety", checked: false },
  { id: "belldesk", label: "Bell Desk & Porter Services", checked: false },
];

const initialEmployees = [
  { id: "leslie", label: "Leslie Alexander", checked: false, color: "l", departmentId: "reservations" },
  { id: "esther", label: "Esther Howard", checked: false, color: "e", departmentId: "housekeeping" },
  { id: "jenny1", label: "Jenny Wilson", checked: false, color: "j", departmentId: "security" },
  { id: "brooklyn", label: "Brooklyn Simmons", checked: false, color: "b", departmentId: "belldesk" },
];

const initialCustomers = [
  { id: "jenny2", label: "Jenny Wilson", checked: false, color: "j", employeeId: "leslie" },
  { id: "robert", label: "Robert Fox", checked: false, color: "r", employeeId: "esther" },
  { id: "jacob", label: "Jacob Jones", checked: false, color: "j", employeeId: "jenny1" },
  { id: "alice", label: "Alice Border", checked: false, color: "a", employeeId: "brooklyn" },
];

interface FilterState {
  departments: { id: string; label: string; checked: boolean }[];
  employees: { id: string; label: string; checked: boolean; color: string; departmentId: string }[];
  customers: { id: string; label: string; checked: boolean; color: string; employeeId: string }[];
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
    (set, get) => ({
      departments: initialDepartments,
      employees: initialEmployees,
      customers: initialCustomers,
      selectedDepartment: "reservations", // Default to first department
      selectedEmployee: null,
      selectedCustomer: null,
      setDepartmentChecked: (id, checked) =>
        set((state) => {
          const departments = state.departments.map((dept) =>
            dept.id === id ? { ...dept, checked } : { ...dept, checked: false }
          );
          const selectedDepartment = checked ? id : null;
          return { departments, selectedDepartment, selectedEmployee: null, selectedCustomer: null };
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
      name: 'filter-storage', // localStorage key
    }
  )
);