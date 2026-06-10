import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode; // Accept any valid React children
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="md:max-w-7xl md:mx-auto px-4 w-full">{children}</div>;
};

export default Container;
