import { useFilterStore } from "@/lib/zustand/store";

function getColorClass(letter: string) {
  const colors: Record<string, string> = {
    l: "bg-gradient-to-br from-purple-500 to-purple-600",
    e: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    j: "bg-gradient-to-br from-pink-500 to-pink-600",
    b: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    r: "bg-gradient-to-br from-red-500 to-red-600",
    a: "bg-gradient-to-br from-pink-500 to-pink-600",
  };
  return (
    colors[letter.toLowerCase()] ||
    "bg-gradient-to-br from-gray-500 to-gray-600"
  );
}

export function CustomerFilter() {
  const { customers, selectedEmployee, setCustomerChecked } = useFilterStore();
  const filteredCustomers = selectedEmployee
    ? customers.filter((cust) => cust.employeeId === selectedEmployee)
    : [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Customers</h2>
      <div className="space-y-7">
        {filteredCustomers.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-2 justify-between"
          >
            <div className="relative flex items-center gap-2">
              <input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={(e) => setCustomerChecked(item.id, e.target.checked)}
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
              className={`ml-auto flex h-6 w-6 items-center justify-center rounded-full text-white uppercase shadow-sm ${getColorClass(item.color)}`}
            >
              {item.color}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
