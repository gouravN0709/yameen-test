
"use client";

import { CalendarView } from "@/components/calendar/CalendarView";
import { Sidebar } from "@/components/sidebar/Sidebar";

const page = async () => {
  return (
    <div className="flex min-h-[80vh] flex-col z-[100]">
      <div className="flex flex-1 gap-1 overflow-hidden">
        <div className="pt-12">
          <Sidebar />
        </div>
        <CalendarView />
      </div>
    </div>
  );
};

export default page;
