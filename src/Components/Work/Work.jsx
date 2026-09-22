import HeaderSection from "../HeaderSection/HeaderSection";
import workStyle from "./Work.module.css";
import { useState } from "react";
import Gallery from "./Gallary";

export default function Work() {
  const [activeTab, setActiveTab] = useState("graphic");
  return (
    <>
      <section
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-75 mt-5">
          <HeaderSection title="MY WORK" subtitle="RECENT WORK" />

      
          <div className={`d-flex gap-4 mb-4 ${workStyle.tabsContainer}`}>
            <button
              onClick={() => setActiveTab("graphic")}
              className={activeTab === "graphic" ? workStyle.active_tab : ""}
            >
              Graphic Designer
            </button>

            <button
              onClick={() => setActiveTab("apps")}
              className={activeTab === "apps" ? workStyle.active_tab : ""}
            >
              Apps
            </button>

            <button
              onClick={() => setActiveTab("software")}
              className={activeTab === "software" ? workStyle.active_tab : ""}
            >
              Software
            </button>
          </div>

          <div key={activeTab} className={workStyle.gallery_animation}>
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
