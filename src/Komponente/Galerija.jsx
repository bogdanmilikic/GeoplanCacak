import { useRef, useState } from "react";
import Prevodilac from "./Prevodilac";

const Galerija = ({ slike, prevod }) => {
  const [aktivnaSlika, setAktivnaSlika] = useState(0);
  const [hover, setHover] = useState(false);
  const handlePrikaz = (vrednost, setIstina) => {
    setIstina(vrednost);
    setHover(!hover);
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
            onMouseEnter={() => handlePrikaz(1, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(1, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {aktivnaSlika === 1 && hover ? (
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
            onMouseEnter={() => handlePrikaz(2, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(2, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {aktivnaSlika === 2 && hover ? (
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
            onMouseEnter={() => handlePrikaz(3, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(3, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {aktivnaSlika === 3 && hover ? (
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
            onMouseEnter={() => handlePrikaz(4, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(4, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {" "}
            {aktivnaSlika === 4 && hover ? (
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
            onMouseEnter={() => handlePrikaz(5, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(5, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {aktivnaSlika === 5 && hover ? (
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
            onMouseEnter={() => handlePrikaz(6, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(6, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {aktivnaSlika === 6 && hover ? (
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
            onMouseEnter={() => handlePrikaz(7, setAktivnaSlika)}
            onMouseLeave={() => handlePrikaz(0, setAktivnaSlika)}
            onTouchStart={() => handlePrikaz(7, setAktivnaSlika)}
            onTouchEnd={() => handlePrikaz(0, setAktivnaSlika)}
          >
            {aktivnaSlika === 7 && hover ? (
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
