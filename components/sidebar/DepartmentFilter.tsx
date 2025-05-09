import { useFilterStore } from "@/lib/zustand/store";

export function DepartmentFilter() {
  const { departments, setDepartmentChecked } = useFilterStore();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Department</h2>
      <div className="space-y-7">
        {departments.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={(e) => setDepartmentChecked(item.id, e.target.checked)}
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
            </div>
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}