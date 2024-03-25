import { useProductosContext } from "../../../context/ProductosContext";
import navlinks from "../../../constants";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const { marcas } = useProductosContext();
  const [mostrarMarcas, setMostrarMarcas] = useState(false);
  const [mostrarHijos, setMostrarHijos] = useState("");
  const [hoveredMarca, setHoveredMarca] = useState("");
  const [hoveredHijo, setHoveredHijo] = useState("");

  const handleToggleMarcas = () => {
    setMostrarMarcas(!mostrarMarcas);
    setMostrarHijos("");
  };

  const handleToggleHijos = (label: string) => {
    if (mostrarHijos === label) {
      setMostrarHijos("");
    } else {
      setMostrarHijos(label);
      setMostrarMarcas(false);
    }
  };

  // console.log(marcas, "marquitas");

  return (
    <div className="w-[1300px] md:w-auto py-3 rounded-full shadow-sm hover:shadow-md transition cursor-pointer relative z-50">
      <div className="flex flex-row items-center justify-between relative">
        {navlinks.map((navlink) => (
          <div
            key={navlink.route}
            className="text-md font-semibold px-4 relative"
            onClick={() =>
              navlink.label === "Marcas"
                ? handleToggleMarcas()
                : handleToggleHijos(navlink.label)
            }
          >
            <div className="flex items-center">
              {!navlink.Hijos && navlink.label !== "Marcas" ? (
                <Link to={navlink.route}> {navlink.label}</Link>
              ) : (
                navlink.label
              )}
              {navlink.label === "Marcas" && (
                <div className="ml-1">
                  <IoIosArrowDown />
                </div>
              )}
              {navlink.Hijos && (
                <div className="ml-1">
                  <IoIosArrowDown />
                </div>
              )}
            </div>

            {navlink.label === "Marcas" && mostrarMarcas && (
              <div className="absolute top-full left-0 bg-white border border-white rounded shadow-md py-1 mt-2 w-full md:w-[1150px] ml-6 flex flex-wrap gap-4 mt-8 z-50">
                {marcas &&
                  marcas.map((marca) => (
                    <Link
                      key={marca.Codigo}
                      to={`/marcas/${marca.Codigo}`}
                      className={`flex items-center justify-between px-2 py-2 ${
                        hoveredMarca === marca.Descripcion
                          ? "bg-red-700"
                          : "bg-transparent"
                      } w-[25%]`}
                      onMouseEnter={() => setHoveredMarca(marca.Descripcion)}
                      onMouseLeave={() => setHoveredMarca("")}
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <p className="text-gray-800 hover:text-white text-sm">
                        {marca.Descripcion}
                      </p>
                      <img
                        src="/assets/marcas/intel.png"
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                    </Link>
                  ))}
              </div>
            )}

            {navlink.label === mostrarHijos &&
              mostrarHijos &&
              navlink.Hijos && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow-md py-1 mt-2 w-[250px] ml-6 mt-8 z-50">
                  {navlink.Hijos &&
                    navlink.Hijos.map((hijo) => (
                      <div
                        key={hijo.route}
                        className={`px-4 py-2 ${
                          hoveredHijo === hijo.label
                            ? "bg-red-700"
                            : "bg-transparent"
                        }`}
                        onMouseEnter={() => setHoveredHijo(hijo.label)}
                        onMouseLeave={() => setHoveredHijo("")}
                      >
                        <Link to={hijo.route}>
                          <p className="text-gray-800 hover:text-white">
                            {hijo.label}
                          </p>
                        </Link>
                      </div>
                    ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
