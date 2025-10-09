import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ImageSlide = ({ slike }) => {
  const [index, setIndex] = useState(0);
  const handleDesnoDugme = () => {
    setIndex((prevIndex) =>
      prevIndex === slike.length - 1 ? 0 : prevIndex + 1
    );
  };
  const hanldeLevoDugme = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slike.length - 1 : prevIndex - 1
    );
  };
  return (
    <center>
      <div
        className="imageSlideDiv"
        style={{
          backgroundImage: `url(${slike[index]})`,
        }}
      >
        <button className="imageSlideDugmici" onClick={hanldeLevoDugme}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="imageSlideDugmici" onClick={handleDesnoDugme}>
          {" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </center>
  );
};
export default ImageSlide;
