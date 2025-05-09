import { CustomerFilter } from "./CustomerFilter";
import { DepartmentFilter } from "./DepartmentFilter";
import { EmployeeFilter } from "./EmployeeFilter";
import { useFilterStore } from "@/lib/zustand/store";

export function Sidebar() {
  const { clearSelections } = useFilterStore();

  return (
    <div className="w-72 border-2 border-t-[#9013FE] bg-white overflow-y-auto shadow-sm">
      <DepartmentFilter />
      <div className="h-0.5 mx-4 my-4 bg-gradient-to-r from-[#F5A623] to-amber-300 rounded-full" />
      <EmployeeFilter />
      <div className="h-0.5 mx-4 my-4 bg-[#320759]" />
      <CustomerFilter />
      <div className="p-4">
        <button
          onClick={clearSelections}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}