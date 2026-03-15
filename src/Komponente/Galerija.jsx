import { useState } from "react";
import Prevodilac from "./Prevodilac";

const Galerija = ({ slike, prevod }) => {
  const [active, setActive] = useState(null);

  const tekstovi = [
    {
      srpski: "Израда катастарског-топографског плана Босиљеград",
      engleski: "Development of the cadastral-topographic plan for Bosilegrad",
    },
    {
      srpski: "Крањска стаза UniPromet Чачак",
      engleski: "Ridge path UniPromet Čačak",
    },
    {
      srpski: "Озакоњење стамбеног објекта",
      engleski: "Legalization of a residential building",
    },
    {
      srpski: "Радови на изградњи рефлектора спортског терена",
      engleski:
        "Construction works on installing floodlights for the sports field",
    },
    {
      srpski: "Радови на снимању тунела цементаре Titan",
      engleski: "Surveying works for the Titan cement plant tunnel",
    },
    {
      srpski: "Радови на снимању водотока Западне Мораве",
      engleski: "Surveying works on the Zapadna Morava watercourse",
    },
    {
      srpski: "Тунел у оквиру ауто-пута Милош Велики",
      engleski: "Tunnel within the Miloš Veliki motorway",
    },
  ];

  return (
    <div className="galerijaSpoljasnjiDiv">
      <div className="galerijaUnutrasnjiDiv">
        {slike.map((slika, index) => (
          <div
            key={index}
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onTouchStart={() => setActive(index)}
            onTouchEnd={() => setActive(null)}
          >
            {active === index && (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={tekstovi[index].srpski}
                  engleski={tekstovi[index].engleski}
                  prevod={prevod}
                />
              </p>
            )}

            <img
              src={slika}
              className="galerijaVelikeSlike"
              alt="projekat"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galerija;
