import Prevodilac from "./Prevodilac";

const Galerija = ({ slike, prevod }) => {
  return (
    <div className="galerijaSpoljasnjiDiv">
      <div
        className="galerijaUnutrasnjiDiv"
        style={{
          overflow:
            window !== undefined && window.innerWidth <= 650 ? "scroll" : null,
        }}
      >
        {/* prvi deo */}
        <div
          className="galerijaDivDelovi"
          style={{
            display:
              window !== "undefined" && window.innerWidth <= 650
                ? "undefined"
                : "flex",
            marginTop: "5px",
          }}
        >
          <div className="galerijaDivVelikeSlike">
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Израда катастарског-топографског плана Босилеград"}
                engleski={
                  "Development of the cadastral-topographic plan for Bosilegrad"
                }
                prevod={prevod}
              />
            </p>

            <img
              src={slike[0]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            />
          </div>{" "}
          <div className="galerijaDivVelikeSlike">
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Крањска стаза UniPromet Чачак"}
                engleski={"Ridge path UniPormet Čačak"}
                prevod={prevod}
              />
            </p>

            <img
              src={slike[1]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            />
          </div>{" "}
        </div>
        {/* drugi deo */}
        <div
          style={{
            display:
              window !== "undefined" && window.innerWidth <= 650
                ? "undefined"
                : "flex",
          }}
          className="galerijaDivDelovi"
        >
          <div className="galerijaDivVelikeSlike">
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Озакоњење стамбеног објекта"}
                engleski={"Legalization of a residential building"}
                prevod={prevod}
              />
            </p>

            <img
              src={slike[2]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            ></img>
          </div>
          <div className="galerijaDivVelikeSlike">
            {" "}
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Радови на изградњи рефлектора спортског терена"}
                engleski={
                  "Construction works on installing floodlights for the sports field"
                }
                prevod={prevod}
              />
            </p>
            <img
              src={slike[3]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            ></img>
          </div>
          <div className="galerijaDivVelikeSlike">
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Радови на снимању тунела цементаре Titan"}
                engleski={"Surveying works for the Titan cement plant tunnel."}
                prevod={prevod}
              />
            </p>

            <img
              src={slike[4]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            />
          </div>
        </div>
        {/* treci deo */}
        <div
          style={{
            display:
              window !== "undefined" && window.innerWidth <= 650
                ? "undefined"
                : "flex",
          }}
          className="galerijaDivDelovi"
        >
          <div className="galerijaDivVelikeSlike">
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Радови на снимању водотока Западне Мораве"}
                engleski={"Surveying works on the Zapadna Morava watercourse"}
                prevod={prevod}
              />
            </p>

            <img
              src={slike[5]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            />
          </div>
          <div className="galerijaDivVelikeSlike">
            <p className="galerijaTekst">
              <Prevodilac
                srpski={"Тунел у оквиру ауто-пута Милош Велики"}
                engleski={"Tunnel within the Miloš Veliki motorway"}
                prevod={prevod}
              />
            </p>

            <img
              src={slike[6]}
              className="galerijaVelikeSlike"
              alt="Nema slike"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Galerija;
