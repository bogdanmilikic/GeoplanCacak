import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DonjiDeo = ({ pozicija }) => {
  return (
    <div className="donjiDeoDiv" style={{ position: pozicija }}>
      <menu
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            padding: "5px",
            backgroundColor: "rgb(255,255,255,0.5)",
            width: "150px",
            justifyContent: "center",
            borderRadius: "10px ",
          }}
        >
          <img src="GeoPlanLogo.png" style={{ width: "150px" }} />
        </div>
        <div
          style={{
            justifyContent: "center",
            marginTop: "10px",
            marginRight: "10px",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "rgb(76, 95, 163)",
              borderRadius: "25px",
              fontSize: "25px",
              height: "40px",
              width: "40px",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <a
              href="https://www.facebook.com/people/Geoplan-%C4%8Ca%C4%8Dak-Geometar/100009283788972/?locale=sr_RS"
              target="blank"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "rgb(76, 95, 163)",
              borderRadius: "25px",
              fontSize: "25px",
              height: "40px",
              width: "40px",
              color: "white",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            <a
              href="https://rs.linkedin.com/company/geoplan-%C4%8Da%C4%8Dak"
              target="blank"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </button>
        </div>
      </menu>
    </div>
  );
};
export default DonjiDeo;
