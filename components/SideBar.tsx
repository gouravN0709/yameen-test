"use client";

const departments = [
  { id: "reservations", label: "Reservations & Booking", checked: true },
  { id: "housekeeping", label: "Housekeeping", checked: false },
  { id: "security", label: "Security & Safety", checked: false },
  { id: "belldesk", label: "Bell Desk & Porter Services", checked: false },
];

const employees = [
  { id: "leslie", label: "Leslie Alexander", checked: false, color: "l" },
  { id: "esther", label: "Esther Howard", checked: false, color: "e" },
  { id: "jenny1", label: "Jenny Wilson", checked: false, color: "j" },
  { id: "brooklyn", label: "Brooklyn Simmons", checked: false, color: "b" },
];

const customers = [
  { id: "jenny2", label: "Jenny Wilson", checked: false, color: "j" },
  { id: "robert", label: "Robert Fox", checked: false, color: "r" },
  { id: "jacob", label: "Jacob Jones", checked: false, color: "j" },
  { id: "alice", label: "Alice Border", checked: false, color: "a" },
];

export function Sidebar() {
  return (
    <div className="w-72 border-2 border-t-[#9013FE] bg-white overflow-y-auto shadow-sm">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Department</h2>
        <div className="space-y-7">
          {departments.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id={item.id}
                  defaultChecked={item.checked}
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

      <div className="h-0.5 mx-4 my-4 bg-gradient-to-r from-[#F5A623] to-amber-300 rounded-full" />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Employees</h2>
        <div className="space-y-7">
          {employees.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between space-x-2"
            >
              <div className="relative flex items-center gap-2">
                <input
                  type="checkbox"
                  id={item.id}
                  defaultChecked={item.checked}
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

      <div className="h-0.5 mx-4 my-4 bg-[#320759]" />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Customers</h2>
        <div className="space-y-7">
          {customers.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 justify-between"
            >
              <div className="relative flex items-center gap-2">
                <input
                  type="checkbox"
                  id={item.id}
                  defaultChecked={item.checked}
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
    </div>
  );
}

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
