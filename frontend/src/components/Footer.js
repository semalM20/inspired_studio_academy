// import React from "react";
// import Logo from "../assets/Logo .jpg";
// import footerimg1 from "../assets/cpd.jpg";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       <div className="container">
//         <hr />
//       </div>
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-content">
//             <div className="contact">
//               <h4>Contact Us</h4>
//               <p>
//                 Email:{" "}
//                 <Link to="mailto:Inspiredstudioacademy@yahoo.com">
//                   inspiredstudioacademy@yahoo.com
//                 </Link>
//               </p>
//               <p>
//                 Phone: <Link to="tel:+44 7448 452820">+44 7448 452820</Link>
//               </p>
//             </div>

//             <div className="social-media">
//               <h4>Follow Us</h4>
//               <div className="social-icons">
//                 <Link to="https://www.facebook.com/share/m7GZw25V2h9tMhzL/?mibextid=LQQJ4d">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link>
//                 <Link to="https://www.tiktok.com/@inspiredstudiooacademy?_t=8mlPalzjxTc&_r=1">
//                   <i className="fab fa-tiktok"></i>
//                 </Link>
//                 <Link to="https://www.instagram.com/inspiredstudioacademy?igsh=Nm9vNDkzZ2lpZXdl">
//                   <i className="fab fa-instagram"></i>
//                 </Link>
//                 <Link to="https://www.facebook.com/share/ywdnnUVTta5eHf1P/?mibextid=LQQJ4d">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link>
//               </div>
//             </div>

//             <div className="map">
//               <h4>Location</h4>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2774179981798!2d-0.9003022411032054!3d52.2388409162286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770eddf393c93d%3A0x1f147663b8914137!2s17%20Gold%20St%2C%20Northampton%20NN1%201RA!5e0!3m2!1sen!2suk!4v1712803196249!5m2!1sen!2suk"
//                 width="200"
//                 height="150"
//                 title="map-iframe"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//               <p>&nbsp;----------------------------</p>
//               <p className="capitalize">
//                 &nbsp;&nbsp;Close to Train Station 🚉
//               </p>
//             </div>
//           </div>

//           <hr className="footer-divider" />

//           <div className="bottom-content">
//             <div className="logo">
//               <img src={Logo} alt="Logo" />
//             </div>

//             <div className="copyright">
//               <p>
//                 Copyright&copy; 2024 INSPIRED STUDIO ACADEMY. All rights
//                 reserved.
//               </p>
//               <p>
//                 Created by <Link to="#">Saun Studios</Link>
//               </p>
//             </div>
//             <div className="footerimage">
//               <img src={footerimg1} alt="Slide 1" />
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;







import React from "react";
import Logo from "../assets/Logo .jpg";
import footerimg1 from "../assets/cpd.jpg";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="container">
        <hr />
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="contact">
              <h4>Contact Us</h4>
              <p>
                Email:{" "}
                <Link to="mailto:Inspiredstudioacademy@yahoo.com">
                  inspiredstudioacademy@yahoo.com
                </Link>
              </p>
              <p>
                Phone: <Link to="tel:+44 7448 452820">+44 7448 452820</Link>
              </p>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <Link to="https://www.facebook.com/share/m7GZw25V2h9tMhzL/?mibextid=LQQJ4d">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://www.tiktok.com/@inspiredstudiooacademy?_t=8mlPalzjxTc&_r=1">
                  <i className="fab fa-tiktok"></i>
                </Link>
                <Link to="https://www.instagram.com/inspiredstudioacademy?igsh=Nm9vNDkzZ2lpZXdl">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://www.facebook.com/share/ywdnnUVTta5eHf1P/?mibextid=LQQJ4d">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </div>
            </div>

            <div className="map">
              <h4>Location</h4>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2774179981798!2d-0.9003022411032054!3d52.2388409162286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770eddf393c93d%3A0x1f147663b8914137!2s17%20Gold%20St%2C%20Northampton%20NN1%201RA!5e0!3m2!1sen!2suk!4v1712803196249!5m2!1sen!2suk"
                width="200"
                height="150"
                title="map-iframe"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>&nbsp;----------------------------</p>
              <p className="capitalize">
                &nbsp;&nbsp;Close to Train Station 🚉
              </p>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="bottom-content">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="copyright">
              <p>
                Copyright&copy; 2024 INSPIRED STUDIO ACADEMY. All rights
                reserved.
              </p>
              <p>
                Created by <Link to="#">Saun Studios</Link>
              </p>
            </div>
            <div className="footerimage">
              <img src={footerimg1} alt="Slide 1" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


