import React from "react";
import { MenuItemInterface } from "./../../../interfaces/index";

const MenuItem: React.FC<MenuItemInterface> = ({ onClick, label, icon }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 bg-slate-900 hover:bg-red-600 transition font-semibold text-center flex justify-center z-50"
    >
      {label}
      {icon && <div className="ml-2">{icon}</div>}
    </div>
  );
};

export default MenuItem;
