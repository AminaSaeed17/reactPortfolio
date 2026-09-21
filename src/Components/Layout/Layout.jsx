import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.css";

export default function Layout() {
  return <>
      <div className={styles.layout}>
      <SideBar />

      <main className={`${styles.main}`}>
        <Outlet />
      </main>
    </div>
  </>
}
