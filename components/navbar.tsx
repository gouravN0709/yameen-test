"use client"

import { Bell } from "lucide-react"

export function Navbar() {
  return (
    <header className="flex h-16 py-6 items-center justify-between border-b bg-[#F4E7FF] px-6 shadow-sm">
      <div className="text-xl font-bold bg-clip-text text-black">
        Company Logo
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-purple-700 hover:bg-purple-50">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 cursor-pointer text-[#320759]">
          <div className="relative h-8 w-8 overflow-hidden rounded-sm border-2 border-purple-200">
            <img src="/profile.svg" alt="Avatar" className="h-full w-full object-cover" />
          </div>
          <span className="font-medium">Angel</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </header>
  )
}
