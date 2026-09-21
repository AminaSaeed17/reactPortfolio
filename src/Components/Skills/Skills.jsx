import HeaderSection from "../HeaderSection/HeaderSection";

export default function Skills() {
  const skills = [
    {
      title: "Photoshop",
      percentage: 75,
      color: "#2C98F0",
    },
    {
      title: "jQuery",
      percentage: 60,
      color: "#EC5453",
    },
    {
      title: "HTML5",
      percentage: 85,
      color: "#F9BF3F",
    },
    {
      title: "CSS3",
      percentage: 90,
      color: "#A84CB8",
    },
    {
      title: "WordPress",
      percentage: 70,
      color: "#2FA499",
    },
    {
      title: "SEO",
      percentage: 80,
      color: "#4054B2",
    },
  ];
  return (
    <>
      <section
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-75  ">
          <HeaderSection title="MY SPECIALTY" subtitle="MY SKILLS" />

          <p className="font-secondary mb-4" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>

          <div className="d-flex flex-wrap gap-4  mt-5">
            {skills.map((skill, index) => (
              <div className="" style={{ width: "calc(50% - 1rem)"}} key={index}>
                <p className="mb-1">{skill.title}</p>

                <div
                  className="progress"
                  role="progressbar"
                  aria-label={`${skill.title} skill level`}
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "10px", borderRadius: "5px" }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color,
                    }}
                  >
                    {skill.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
