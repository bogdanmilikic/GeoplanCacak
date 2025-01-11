import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogIn from "../LogIn";
import SignUp from "./SignUp";

const LogInDugme = ({ userName, setOpenPopUp, setSadrzaj, setNaslov }) => {
  const handleLogInDugme = () => {
    setNaslov("Log in");
    setSadrzaj(<LogIn set />);
    setOpenPopUp(true);
  };
  const handleSignUpDugme = () => {
    setNaslov("Sign up");
    setSadrzaj(<SignUp />);
    setOpenPopUp(true);
  };
  const handleLogOut = () => {
    setOpenPopUp(false);
  };
  return (
    <div className="logInDugmePozicija">
      <div className="dropdown">
        <button className="dropbtn">
          <FontAwesomeIcon icon={faUser} /> {userName}
        </button>
        <div class="dropdown-content">
          {userName === "Prijava" ? (
            <>
              <center>
                <button className="logInOutDugmici" onClick={handleLogInDugme}>
                  Log in
                </button>
                <hr />
                <button className="logInOutDugmici" onClick={handleSignUpDugme}>
                  Sign up
                </button>
              </center>{" "}
            </>
          ) : (
            <center>
              <button onClick={handleLogOut}>Log out</button>
            </center>
          )}
        </div>
      </div>
    </div>
  );
};
export default LogInDugme;
