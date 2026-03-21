import "bootstrap/dist/css/bootstrap.min.css";

import { Photo } from "./components/Photo";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { LeftContent } from "./components/LeftContent";
import { ShortDetails } from "./components/ShortDetails";
import { DisplayStack } from "./components/DisplayStack";

function App() {
  return (
    <>
      <div className="MainContainer">
        <Navbar />
        <div className="HeroContainer">
          <div className="LeftSection">
            <LeftContent />
          </div>
          <div className="PhotoContainer">
            <Photo />
          </div>
        </div>
     <hr className="hrfornew"/>
      <ShortDetails/>
      <div className="StackDiv">
        <span className="Stack">TECHINICAL STACK</span>
        <h3 className=" text-white text-[40px] ">Tools I work with  </h3>
      </div>
      <DisplayStack/>




      </div>
    </>
  );
}

export default App;
