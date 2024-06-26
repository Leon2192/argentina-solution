import React from "react";
import { ContainerInterface } from "./../../../interfaces/index";

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return (
    <div
      className="
    max-w-[2520px] 
    mx-auto
     xl:px-20 
     md:px-10 
     sm:px-2
     px-4"
    >
      {children}
    </div>
  );
};

export default Container;
