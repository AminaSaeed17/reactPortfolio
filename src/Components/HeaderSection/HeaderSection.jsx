
export default function HeaderSection({title, subtitle}) {
  return <>
    <div>
        <p className="about-us font-secondary text-uppercase" style={{fontWeight: "normal", fontSize: "10px", lineHeight: "18px", color: "rgb(153, 153, 153)", letterSpacing: "5px"}}>{title}</p>
        <h2 className="font-primary text-uppercase mb-4" style={{fontWeight: "bold", fontSize: "18px", lineHeight: "32px", color: "rgb(0, 0, 0)", letterSpacing: "5px"}}>{subtitle}</h2>
    </div>
  </>
}
