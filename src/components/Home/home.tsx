import React from "react";
import "./home.style.css";
import SearchBar from "../Search/searchBar";
import mainChef from "/src/assets/MonkeyCook.jpg";

const home = () => {
  return (
    <div className="container3">
      <div className="wrapper2">
        <div className="monkInf">
          <h2 className="h2-Home"> Chef : Monkey le Pieu</h2>
          <img className="noMonkeyBuissness" src={mainChef}></img>
        </div>
        <div className="information">
          <p className="para-home">
            Monkey le Piu betur þekktur sem API-nn er víða þekktur í
            Kokkaheiminum hefur unnið með mörgum kokkum eins og Gordon Ramsey,
            Marco Pierre White, Nick DiGiovanni og Jean-Georges Vongerichten.
            Hann hefur Leitað af bestu uppskriftun heimsálfanna og hefur loksins
            sett það á netið fyrir alla til að njóta
          </p>
        </div>
      </div>
    </div>
  );
};

export default home;
