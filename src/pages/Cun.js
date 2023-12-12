import ReactFullpage from "@fullpage/react-fullpage";
import Fade from "react-reveal/Fade";
import ChaoAnhEmNhe from "../assets/vid/ChaoAnhEmNhe.mp4";
import Cunn from "../assets/img/Cun.JPG";
import Mit from "../assets/img/Mit.PNG";
import Official from "../assets/img/Official.jpg";
import nd from "../assets/img/30-6.jpg";
import dn from "../assets/img/1-7.jpg";
import GYM from "../assets/img/GYM.jpg";
import oc from "../assets/img/óc.jpg";
import tvc from "../assets/img/truongvinhcuc.jpg";
import { useState } from "react";

const Cun = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="pageWrapper">
      <div className="cun">
        <div className="cun__welcome section ">
          <Fade left cascade>
            <div className="cun__welcome__left">
              <div className="cun__welcome__left__content">
                <p>Chào</p>
                <p>anh</p>
              </div>

              <img src={Cunn} alt="" />
              <div className="overlay" />
            </div>
          </Fade>
          <div className="cun__welcome__main">
            <video src={ChaoAnhEmNhe} autoPlay muted loop playsInline />
          </div>
          <Fade right cascade>
            <div className="cun__welcome__right">
              <div className="cun__welcome__right__content">
                <p>Em</p>
                <p>Nhé!</p>
              </div>

              <img src={Mit} alt="" />
              <div className="overlay" />
            </div>
          </Fade>
        </div>
        <div className="cun__mems section">
          <div className="cun__mems__header">
            <h2>It's been 6 months</h2>
            <p>Thannks for always being with be since the start</p>
            <p>Always appreciate the existance of yours in my life hun</p>
          </div>
          <div className="cun__mems__lists">
            <Fade bottom>
              <div className="cun__mems__lists__card">
                <div className="cun__mems__lists__card__img">
                  <img src={Official} alt="" />
                </div>
                <div className="cun__mems__lists__card__content">
                  <h2>13/6</h2>
                  <p>Officially bae</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="cun__mems__lists__card">
                <div className="cun__mems__lists__card__img">
                  <img src={nd} alt="" />
                </div>
                <div className="cun__mems__lists__card__content">
                  <h2>30/6</h2>
                  <p>Good ahh cooking</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="cun__mems__lists__card">
                <div className="cun__mems__lists__card__img">
                  <img src={dn} alt="" />
                </div>
                <div className="cun__mems__lists__card__content">
                  <h2>1/7</h2>
                  <p>Đm chịu hết ảnh rồi</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="cun__mems__1"></div>
        </div>

        <div className="cun__travis">
          <div className="overlay" />
          <img src={oc} alt="" className="oc" />
          <img src={tvc} alt="" />
          <img src={GYM} alt="" className="GYM" />
          <div className="cun__travis__content">
            <Fade bottom>
              <p className="title">It's gonna be a crazy ride of life</p>
            </Fade>
            <Fade bottom collapse when={show}>
              <p>I'll make sure you won't regret it</p>
            </Fade>
            <Fade bottom>
              <button type="button" onClick={handleClick}>
                Will you join me ?
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cun;
