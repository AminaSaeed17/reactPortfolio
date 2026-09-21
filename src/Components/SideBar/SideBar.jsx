import { NavLink } from "react-router-dom";
import sidebarImg from "../../assets/about-BgAkqdr2.jpg";
import sideBar from "./SideBar.module.css";

export default function SideBar() {
  return (
    <>
      <aside
        className="text-black px-3 pt-5"
        style={{
          width: "220px",
          minHeight: "100vh",
          backgroundColor: "#F5F5F5",
        }}
      >
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
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? `${sideBar.active_link}` : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? `${sideBar.active_link}` : ""}`
              }
            >
              About
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? `${sideBar.active_link}` : ""}`
              }
            >
              Skills
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? `${sideBar.active_link}` : ""}`
              }
            >
              Experience
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${sideBar.sidebar_link} text-uppercase ${isActive ? `${sideBar.active_link}` : ""}`
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
