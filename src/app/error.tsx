"use client";
import React from "react";

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {error.message}
    </div>
  );
};

export default Error;
