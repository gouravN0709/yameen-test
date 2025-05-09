"use client";

import ClientComponent from "@/components/ClientComponent";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getTodos } from "@/lib/db";
import getQueryClient from "@/components/QueryClient";
import Hydrate from "@/components/Hydrate";

import { Navbar } from "@/components/navbar";
import { CalendarView } from "@/components/calendar/CalendarView";
import { Sidebar } from "@/components/sidebar/Sidebar";
const page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ["todos"], queryFn: getTodos });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 gap-1 overflow-hidden">
          <div className="pt-12">
            <Sidebar />
          </div>
          <CalendarView />
        </div>
      </div>
    </>
  );
};

export default page;
