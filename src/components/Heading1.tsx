import { cn } from "@/lib/utils";
import React from "react";

type Heading1Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading1 = ({ children, className }: Heading1Props) => {
  return (
    <h1
      className={cn("text-5xl lg:text-7xl font-bold text-balance", className)}
    >
      {children}
    </h1>
  );
};

export default Heading1;
