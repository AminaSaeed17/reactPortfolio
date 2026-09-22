import HeaderSection from "../HeaderSection/HeaderSection";
import ExperienceStyle from "./Experience.module.css";

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
    icon: "fa-solid fa-pencil",
    bgColor: "#D9534F",
    title: "Front End Developer at Google Company",
    date: "2017-2018",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
  {
    icon: "fa-solid fa-pencil",
    bgColor: "#F0AD4E",
    title: "System Analyst",
    date: "2017-2018",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
];

export default function Experience() {
  return (
    <section
      className={`w-100 d-flex justify-content-center align-items-center ${ExperienceStyle.section}`}
    >
      <div className="w-75 mt-5">
        <HeaderSection title="EXPERIENCE" subtitle="WORK EXPERIENCE" />

        <div className={ExperienceStyle.timeline}>
          {experiences.map((item, index) => (
            <div className={ExperienceStyle.line} key={index}>
              <div
                className={ExperienceStyle.lineIcon}
                style={{ backgroundColor: item.bgColor }}
              >
                <i className={item.icon}></i>
              </div>

              <div className={ExperienceStyle.card}>
                <p className={`font-secondary mb-2 ${ExperienceStyle.title}`}>
                  {item.title}{" "}
                  <span className={ExperienceStyle.date}>{item.date}</span>
                </p>

                <p className={`font-secondary ${ExperienceStyle.desc}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <div className={ExperienceStyle.endCircle}></div>
        </div>
      </div>
    </section>
  );
}
