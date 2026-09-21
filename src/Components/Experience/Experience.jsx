import HeaderSection from "../HeaderSection/HeaderSection";
import ExperienceStyle from "./Experience.module.css";

export default function Experience() {


const experiences = [
  {
    icon: "fa-solid fa-pencil",
    bgColor: "#2C98F0",
    title: "Full Stack Developer",
    date: "2017-2018",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    icon: "fa-solid fa-code",
    bgColor: "#D9534F",
    title: "Front End Developer at Google Company",
    date: "2017-2018",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    bgColor: "#F0AD4E",
    title: "System Analyst",
    date: "2017-2018",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
];

  return (
    <>
      <section
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-75 mt-5">
          <HeaderSection title="EXPERIENCE" subtitle="WORK EXPERIENCE" />

          {experiences.map((item, index) => (
  <div className={ExperienceStyle.line} key={index}>
    
    <div
      className={ExperienceStyle.lineIcon}
      style={{
        height: "60px",
        width: "60px",
        border: "4px solid #eee",
        borderRadius: "50%",
        backgroundColor: item.bgColor,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <i className={item.icon}></i>
    </div>


    <div className={ExperienceStyle.text_muted}>
      <p
        className="font-secondary mb-4"
        style={{
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
        {item.title}{" "}
        <span
          style={{
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {item.date}
        </span>
      </p>

      <p
        className="font-secondary"
        style={{
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "27px",
          color: "rgba(0, 0, 0, 0.7)",
        }}
      >
        {item.description}
      </p>
    </div>

  </div>
))}
        </div>
      </section>
    </>
  );
}
