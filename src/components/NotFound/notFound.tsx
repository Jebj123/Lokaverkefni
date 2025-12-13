import image1 from "/src/assets/zoolander.gif";
import "./notFound.style.css";
import Wheel from "/src/assets/Cogwheel.png";

export default function NotFound() {
  return (
    <div className="containerNotFound">
      <div className="wrapperNotFound">
        <div>
          <h1>404</h1>
          <h2 className="h2NotFound">Síða Finnst ekki</h2>
          <img className="cogWheelLogo" src={Wheel} />
        </div>
        <div>
          <img className="imgNotFound" src={image1} />
        </div>
      </div>
    </div>
  );
}
