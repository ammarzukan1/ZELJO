import '../css/Contact.css'
import MapComponent from "./MapComponent";
import leftLines from "../assets/Left_lines.svg";
import rightLines from "../assets/Right_lines.svg";

const Contact = () => {
  return(
      <section className="conacts-section">
        <div className="heading">
          <img src={leftLines} className="Line-left" alt="left-line"/>
          <h2>Kontakti</h2>
          <img src={rightLines} className="Line-right" alt="right-line"/>
        </div>
          <div className="contact-wrapper">
          <div className="contacts">

              <div className="text-wrapper">
                  <h3>Javite nam se!</h3>
                  <p> Ukoliko imate bilo kakvih pitanja ili trebate informaciju u vezi sa našim radom, pišite nam našu
                      e-mail adresu.</p>
                  <p>KK Željezničar</p>
                  <p>Adresa</p>
                  <p>71000 SARAJEVO</p>
                  <p>Bosna i Hercegovina</p>
                  <p>Telefon: (+387) 33 555 444</p>
              </div>
          </div>
              <div className="map">
                  <MapComponent/>
              </div>
          </div>
      </section>
  );
};

export default Contact;