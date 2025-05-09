import { NextResponse } from "next/server";

export let data = [
  {
    title: "event 1",
    date: "2025-04-01",
  },
  {
    title: "event 2",
    date: "2025-04-02",
  },
];

export const GET = async () => {
  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const { title, date } = await req.json();
  data.push({ title, date });
  return NextResponse.json(data);
};

export const DELETE = async (req: Request) => {
  const { date } = await req.json();
  if (date === "2025-04-01") {
    // throw new Error("Event not found");
    return NextResponse.json({ status: 400, message: "Event not found" });
  } else {
    const newData = data.filter((event) => event.date !== date);
    data = newData;
    return NextResponse.json(newData);
  }
};
