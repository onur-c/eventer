import React from "react";

type Heading1Props = {
  children: React.ReactNode;
};

const Heading1 = ({ children }: Heading1Props) => {
  return (
    <h1 className="text-5xl lg:text-7xl font-bold text-balance">{children}</h1>
  );
};

export default Heading1;
