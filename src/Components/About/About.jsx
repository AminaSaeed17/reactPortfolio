import HeaderSection from "../HeaderSection/HeaderSection";
import aboutStyle from "./About.module.css";

export default function About() {
  const skills = [
    {
      icon: "fa-regular fa-lightbulb",
      title: "Graphic Design",
      color: "#09c",
    },
    {
      icon: "fa-solid fa-earth-africa",
      title: "Web Design",
      color: "#e74c3c",
    },
    {
      icon: "fa-solid fa-code",
      title: "Software",
      color: "#F9BF3F",
    },
    {
      icon: "fa-solid fa-mobile-screen",
      title: "Application",
      color: "#A84CB8",
    },
  ];
  return (
    <>
      <section
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-75  ">

          <HeaderSection title="about us" subtitle="who am i?"/>

          <p className="font-secondary mb-4" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
            <span style={{fontWeight: '700', fontSize: '15px', lineHeight: '27px'}}>Hi Im Jackson Ford</span> On her way she met a copy. The copy
            warned the Little Blind Text, that where it came from it would have
            been rewritten a thousand times and everything that was left from
            its origin would be the word (and) and the Little Blind Text should
            turn around and return to its own, safe country.
          </p>
          <p className="font-secondary mb-4" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>

          <div className="d-flex flex-wrap gap-1 justify-content-between align-items-center mt-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`card ${aboutStyle.card} border-0 p-2`}
                style={{
                  borderBottom: `3px solid ${skill.color}`,
                  boxShadow: "5px 5px 10px 5px rgba(0,0,0,0.1)",
                  "--card-color": skill.color
                }}
              >
                <div className="card-body">
                  <h3 className="card-title mb-3">
                    <i
                      className={skill.icon}
                      style={{ color: skill.color }}
                    ></i>
                  </h3>

                  <p
                    className="card-text mb-4 font-secondary"
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {skill.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
