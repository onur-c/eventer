import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = {
  children?: React.ReactNode;
  className?: string;
};

const Skeleton = ({ className, children }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[400px] rounded-lg bg-white/5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Skeleton;
