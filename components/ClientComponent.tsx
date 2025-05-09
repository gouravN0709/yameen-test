"use client";

import { addTodo, deleteTodo, getTodos } from "@/lib/db";
import { Input } from "@nextui-org/input";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { queryClient } from "@/app/providers";
import {useEventStore} from "@/lib/zustand/store";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function ClientComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const eventStore: any = useEventStore();

  const { events, addEvent, removeAllEvents, updateEvents } = eventStore;
  // const mutation = useMutation({
  //   mutationFn: () => addTodo(title, date),
  //   onSuccess: () => {
  //     console.log("success");
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  //   onError: (error) => {
  //     console.log("error", error);
  //   },
  // });

  // const deleteMutation = useMutation({
  //   mutationFn: (date: string) => deleteTodo(date),
  //   onSuccess: () => {
  //     //   queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  //   onError: (error) => {
  //     console.log("error", error.message);
  //   },
  // });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEvent({ title, date });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-2">
      {events?.map((event: any) => (
        <div key={event.date} className="flex items-center justify-between">
          <div className="flex">
            <div>{event.title}</div>
            <div className="ml-2">{event.date}</div>
          </div>
          <div className="flex justify-end">
            <Button
              color="danger"
              variant="ghost"
              onPress={() => removeAllEvents()}
              // onPress={() => deleteMutation.mutate(event.date)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 border p-4 mt-10"
      >
        <p>Title</p>
        <Input
          type="text"
          name="title"
          value={title}
          label="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Date</p>
        <Input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
      {/* <FullCalendar
        events={[
          {
            title: "event 1",
            date: "2025-04-01",
            color: "#fff000",
            textColor: "#00FF00",
            fontWeight: "bold",
          },
          { title: "event 2", date: "2025-04-01", color: "#378000" },
          { title: "event 3", date: "2025-04-01", color: "#000fff" },
        ]}
        eventClick={(info) => {
          console.log(info.event.title);
        }}
        themeSystem='standard'
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
      /> */}
      {children}
    </div>
  );
}
