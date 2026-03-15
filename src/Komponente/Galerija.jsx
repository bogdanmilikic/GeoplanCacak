import { useRef, useState } from "react";
import Prevodilac from "./Prevodilac";

const Galerija = ({ slike, prevod }) => {
  const [prvaSlika, setPrvaSlika] = useState(false);
  const [drugaSlika, setDrugaSlika] = useState(false);
  const [trecaSlika, setTrecaSlika] = useState(false);
  const [cetvrtaSlika, setCetvrtaSlika] = useState(false);
  const [petaSlika, setPetaSlika] = useState(false);
  const [sestaSlika, setSestaSlika] = useState(false);
  const [sedmaSlika, setSedmaSlika] = useState(false);
  const handlePrikaz = (istina, setIstina) => {
    setIstina(!istina);
  };
  return (
    <div className="galerijaSpoljasnjiDiv">
      <div
        className="galerijaUnutrasnjiDiv"
        style={{
          overflow:
            typeof window !== undefined && window.innerWidth <= 650
              ? "scroll"
              : null,
        }}
      >
        {/* prvi deo */}
        <div
          className="galerijaDivDelovi"
          style={{
            display:
              typeof window !== "undefined" && window.innerWidth <= 650
                ? "undefined"
                : "flex",
            marginTop: "5px",
          }}
        >
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(prvaSlika, setPrvaSlika)}
            onMouseLeave={() => handlePrikaz(prvaSlika, setPrvaSlika)}
            onTouchStart={() => handlePrikaz(prvaSlika, setPrvaSlika)}
            onTouchEnd={() => handlePrikaz(prvaSlika, setPrvaSlika)}
          >
            {prvaSlika === true ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Израда катастарског-топографског плана Босиљеград"}
                  engleski={
                    "Development of the cadastral-topographic plan for Bosilegrad"
                  }
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[0]} className="galerijaVelikeSlike" />
          </div>{" "}
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(drugaSlika, setDrugaSlika)}
            onMouseLeave={() => handlePrikaz(drugaSlika, setDrugaSlika)}
            onTouchStart={() => handlePrikaz(drugaSlika, setDrugaSlika)}
            onTouchEnd={() => handlePrikaz(drugaSlika, setDrugaSlika)}
          >
            {drugaSlika === true ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Крањска стаза UniPromet Чачак"}
                  engleski={"Ridge path UniPormet Čačak"}
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[1]} className="galerijaVelikeSlike" />
          </div>{" "}
        </div>
        {/* drugi deo */}
        <div
          style={{
            display:
              typeof window !== "undefined" && window.innerWidth <= 650
                ? "undefined"
                : "flex",
          }}
          className="galerijaDivDelovi"
        >
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(trecaSlika, setTrecaSlika)}
            onMouseLeave={() => handlePrikaz(trecaSlika, setTrecaSlika)}
            onTouchStart={() => handlePrikaz(trecaSlika, setTrecaSlika)}
            onTouchEnd={() => handlePrikaz(trecaSlika, setTrecaSlika)}
          >
            {trecaSlika ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Озакоњење стамбеног објекта"}
                  engleski={"Legalization of a residential building"}
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[2]} className="galerijaVelikeSlike"></img>
          </div>
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(cetvrtaSlika, setCetvrtaSlika)}
            onMouseLeave={() => handlePrikaz(cetvrtaSlika, setCetvrtaSlika)}
            onTouchStart={() => handlePrikaz(cetvrtaSlika, setCetvrtaSlika)}
            onTouchEnd={() => handlePrikaz(cetvrtaSlika, setCetvrtaSlika)}
          >
            {" "}
            {cetvrtaSlika ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Радови на изградњи рефлектора спортског терена"}
                  engleski={
                    "Construction works on installing floodlights for the sports field"
                  }
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[3]} className="galerijaVelikeSlike"></img>
          </div>
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(petaSlika, setPetaSlika)}
            onMouseLeave={() => handlePrikaz(petaSlika, setPetaSlika)}
            onTouchStart={() => handlePrikaz(petaSlika, setPetaSlika)}
            onTouchEnd={() => handlePrikaz(petaSlika, setPetaSlika)}
          >
            {petaSlika ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Радови на снимању тунела цементаре Titan"}
                  engleski={
                    "Surveying works for the Titan cement plant tunnel."
                  }
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[4]} className="galerijaVelikeSlike" />
          </div>
        </div>
        {/* treci deo */}
        <div
          style={{
            display:
              typeof window !== "undefined" && window.innerWidth <= 650
                ? "undefined"
                : "flex",
          }}
          className="galerijaDivDelovi"
        >
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(sestaSlika, setSestaSlika)}
            onMouseLeave={() => handlePrikaz(sestaSlika, setSestaSlika)}
            onTouchStart={() => handlePrikaz(sestaSlika, setSestaSlika)}
            onTouchEnd={() => handlePrikaz(sestaSlika, setSestaSlika)}
          >
            {sestaSlika ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Радови на снимању водотока Западне Мораве"}
                  engleski={"Surveying works on the Zapadna Morava watercourse"}
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[5]} className="galerijaVelikeSlike" />
          </div>
          <div
            className="galerijaDivVelikeSlike"
            onMouseEnter={() => handlePrikaz(sedmaSlika, setSedmaSlika)}
            onMouseLeave={() => handlePrikaz(sedmaSlika, setSedmaSlika)}
            onTouchStart={() => handlePrikaz(sedmaSlika, setSedmaSlika)}
            onTouchEnd={() => handlePrikaz(sedmaSlika, setSedmaSlika)}
          >
            {sedmaSlika ? (
              <p className="galerijaTekst">
                <Prevodilac
                  srpski={"Тунел у оквиру ауто-пута Милош Велики"}
                  engleski={"Tunnel within the Miloš Veliki motorway"}
                  prevod={prevod}
                />
              </p>
            ) : (
              <></>
            )}
            <img src={slike[6]} className="galerijaVelikeSlike" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Galerija;
