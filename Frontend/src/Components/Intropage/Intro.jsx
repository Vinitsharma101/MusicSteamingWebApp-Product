import logo2 from "../../assets/Frnt-imges/logo2.svg";
import Intrologin from "./Loginbutton/Loginsignuobutton";
import { useNavigate } from "react-router-dom";
import "animate.css";


const Intro = () => {
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    Navigate("/Home"); 
  };

  return (
    <>
      <div className="Header ">
        <div className="LoGo flex">
          <div className="imges1 m-5 animate__animated animate__fadeInUp">
            <img src={logo2} alt="Logo2" width="200" height="200" />
          </div>
        </div>
        <div className="loginnn">
          <Intrologin />
        </div>
      </div>
      <div className="middle w-1/2 h-auto">
        <div className="rightportion">
          <div className="wlcmtxt">
            <p className="animate__animated animate__fadeInUp text-blue-600 font-bold text-4xl px-10 line1">
              Welcome to the Ultimate Music Experience. <br />
            </p>
            <p className="animate__animated animate__fadeInUp text-blue-100 font-bold text-3xl px-10">
              Discover, Play, and <br />
              Enjoy your favorite tracks with just a click!
            </p>
          </div>
          <div className="playerbtn">
            <button 
              onClick={handleButtonClick} 
              className="entrbtn animate__animated animate__fadeInUp btn btn-primary bg-[#1DB9FC] text-white py-3 px-5 border-none rounded-lg cursor-pointer text-base hover:bg-[#0B76D0] my-10 mx-10">
              Hit Play and Relax
            </button>
          </div>
        </div>
        <div className="leftportion">
          {/* <HeadphoneModel /> */}
        </div>
      </div>
    </>
  );
};

export default Intro;
