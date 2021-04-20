import React from "react";
import { StyledAboutUs } from "./StyledAboutUs";
import Cristian from "./Us/Cristian.jpg";
import Guido from "./Us/Guido.jpg";
import Ivan from "./Us/Ivan.jpg";
import Joaquin from "./Us/Joaquin.jpg";
import Julian from "./Us/Julian.jpg";
import Martin from "./Us/Martin.jpg";
import Mati from "./Us/Mati.jpg";
import Maxi from "./Us/Maxi.jpg";
import Nico from "./Us/Nico.jpg";
export default function AboutUs() {
  return (
    <StyledAboutUs>
      <div className="mainText">
        <h2>About Us</h2>
        <p>
          Hi!👋, we are a group of developers👨‍💻 finishing the Henry BootCamp.{" "}
          <br />
          This is our final project. We hope you enjoy it as much as we enjoyed
          making it. 😉
        </p>
      </div>
      <div className="about_coders_container">
        <div className="about_coder">
          <h3>Cristian Rojas</h3>
          <div>
            <img alt="profile" src={Cristian} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/cristian-rojas-1675a41b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/mander321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Guido Gervasi</h3>
          <div>
            <img alt="profile" src={Guido} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/guido-gervasi-860767208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/GuiDOM-gervasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Iván Contreras</h3>
          <div>
            <img alt="profile" src={Ivan} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/ivan-contreras-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/shlock5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Joaquín Tissera</h3>
          <div>
            <img alt="profile" src={Joaquin} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/joaquin-tissera-7577831b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/JoaquinTissera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Julián Ramirez</h3>
          <div>
            <img alt="profile" src={Julian} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/julignacio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/julignacio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            {
              //<a href='https://github.com/tinsanchez00' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
            }
          </div>
        </div>
        <div className="about_coder">
          <h3>Martín Tozer</h3>
          <div>
            <img alt="profile" src={Martin} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/martintoz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/martintoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Matías Stefanutti</h3>
          <div>
            <img alt="profile" src={Mati} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/matiasstefanutti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/mstefa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Lindolfo Ayala</h3>
          <div>
            <img alt="profile" src={Maxi} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/otromaximiliano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/otromaximiliano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about_coder">
          <h3>Nicolás Mastakas</h3>
          <div>
            <img alt="profile" src={Nico} />
          </div>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/nico-mastakas-full-stack-engineer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Qweffy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <span>
          <a href="https://www.soyhenry.com/" target="_blank">
            🚀 Henry FT09 Grupo 01
          </a>
        </span>
        <span>
          {" "}
          <a href="mailto:ft09ec@gmail.com" target="_blank">
            {" "}
            ft09ec@gmail.com{" "}
          </a>
        </span>
      </footer>
    </StyledAboutUs>
  );
}
