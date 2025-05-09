"use client";
import { HydrationBoundary } from "@tanstack/react-query";

const Hydrate = (props: any) => {
  return <HydrationBoundary {...props} />;
};

export default Hydrate;
