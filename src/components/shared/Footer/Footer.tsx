import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { footer } from "../../../constants";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-8 pb-6">
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              ENCUÉNTRANOS
            </h4>

            <div className="flex items-center text-lg mt-0 mb-2 text-blueGray-600">
              <FaMapMarkerAlt className="mr-2" />
              <h5>{footer.contacto[0].direccion}</h5>
            </div>

            <div className="flex items-center text-lg mt-0 mb-2 text-blueGray-600">
              <FaPhone className="mr-2" />
              <h5>{footer.contacto[0].telefono}</h5>
            </div>

            <div className="flex items-center text-lg mt-0 mb-2 text-blueGray-600">
              <IoIosMail className="mr-2" />
              <h5>{footer.contacto[0].email}</h5>
            </div>

            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="text-pink-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a target="blank" href={footer.contacto[0].instagram}>
                  <FaInstagram size={"2em"} />
                </a>
              </button>
              <button
                className=" text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a target="blank" href={footer.contacto[0].facebook}>
                  <FaFacebookSquare size={"2em"} />
                </a>
              </button>
              <button
                className="text-blue-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a target="blank" href={footer.contacto[0].twitter}>
                  <FaTwitter size={"2em"} />
                </a>
              </button>
              <button
                className=" text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a target="blank" href={footer.contacto[0].linkedin}>
                  <FaLinkedin size={"2em"} />
                </a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto mb-6">
                <span className="block underline uppercase text-blueGray-500 text-md font-semibold mb-2">
                  Sedes
                </span>
                <ul className="list-unstyled">
                  {footer.footer.map((foot) => {
                    return (
                      <li key={foot.sede} className="flex items-center mt-2">
                        <img
                          src={foot.src}
                          alt={foot.sede}
                          className="w-8 h-8 mr-2 rounded-full"
                        />
                        <a
                          target="blank"
                          className="text-blueGray-600 hover:text-red-700 hover:underline font-semibold block pb-2 text-sm"
                          href={foot.url}
                        >
                          {foot.sede}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase underline text-blueGray-500 text-sm font-semibold mb-2">
                  ENLACES UTILES
                </span>
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-red-700 hover:underline font-semibold block pb-2 text-sm">
                    <Link to={"/catalogo-panduit"}>Catalogo</Link>
                  </li>

                  <li className="text-blueGray-600 hover:text-red-700 hover:underline font-semibold block pb-2 text-sm">
                    <Link to={"/capacitaciones"}>Capacitaciones</Link>
                  </li>

                  <li className="text-blueGray-600 hover:text-red-700 hover:underline font-semibold block pb-2 text-sm">
                    <Link to={"/register"}>Alta usuarios</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024 </span>
              <a className="text-blueGray-500 hover:text-blueGray-800">
                | Solution Box Argentina
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
