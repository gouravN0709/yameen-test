import { useFilterStore } from "@/lib/zustand/store";

export function EmployeeFilter() {
  const { employees, selectedDepartment, setEmployeeChecked } =
    useFilterStore();
  const filteredEmployees = selectedDepartment
    ? employees.filter((emp) => emp.departmentId === selectedDepartment)
    : employees;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Employees</h2>
      <div className="space-y-7">
        {filteredEmployees.map((item) => {
          const firstLetter = item.label.charAt(0).toUpperCase();
          return (
            <div
              key={item.id}
              className="flex items-center justify-between space-x-2"
            >
              <div className="relative flex items-center gap-2">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={item.checked}
                  onChange={(e) =>
                    setEmployeeChecked(item.id, e.target.checked)
                  }
                  className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:border-purple-500 checked:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                />
                <svg
                  className="absolute left-0 top-0 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
              <div
                className="ml-auto flex h-6 w-6 items-center justify-center rounded-full text-white uppercase shadow-sm"
                style={{ backgroundColor: item.color }}
              >
                {firstLetter}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
