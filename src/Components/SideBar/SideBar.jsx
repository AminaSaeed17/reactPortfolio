import { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebarImg from "../../assets/about-BgAkqdr2.jpg";
import sideBar from "./SideBar.module.css";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        className={sideBar.menu_toggle}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {isOpen && (
        <div className={sideBar.overlay} onClick={closeSidebar}></div>
      )}

      <aside
        className={`text-black px-3 pt-5 ${sideBar.sidebar} ${
          isOpen ? sideBar.sidebar_open : ""
        }`}
        style={{
          width: "220px",
          minHeight: "100vh",
          backgroundColor: "#F5F5F5",
        }}
      >
        <button
          className={sideBar.close_btn}
          onClick={closeSidebar}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div
          className="rounded-circle overflow-hidden mx-auto"
          style={{ width: "150px", height: "150px" }}
        >
          <img
            src={sidebarImg}
            alt="Sidebar"
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className={`${sideBar.user_name} font-primary`}>Jackson Ford</h2>
          <p
            className={`${sideBar.user_position} text-uppercase font-secondary`}
          >
            <span>UI/UX/Designer</span> in philippines
          </p>
        </div>
        <ul className="nav flex-column mt-3 text-center font-secondary">
          <li className="nav-item mb-2">
            <NavLink
              to="/"
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? sideBar.active_link : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/about"
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? sideBar.active_link : ""}`
              }
            >
              About
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/skills"
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? sideBar.active_link : ""}`
              }
            >
              Skills
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/experience"
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? sideBar.active_link : ""}`
              }
            >
              Experience
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/work"
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? sideBar.active_link : ""}`
              }
            >
              Work
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
