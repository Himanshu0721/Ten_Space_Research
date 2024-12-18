import React from "react";
import "./Footer.css";
import {FaEnvelope, FaLinkedinIn} from "react-icons/fa"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p className="footer-highlight">info@entrepreneurshipnetwork.net</p>
      
          <h3>Corporate Address</h3>
          <p>
          India accelerator<br />
            Noida 201301 UP, India
          </p>
          {/* <br/> */}
        
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/Technology" className="footer-link">
                Technology
              </a>
            </li>
            <li>
              <a href="/Career" className="footer-link">
                Career
              </a>
            </li>
            <li>
              <a href="/Booklaunch" className="footer-link">
                Book Launch
              </a>
            </li>
            <li>
              <a href="/About" className="footer-link">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h3>Curious to know more about</h3>
         
          <ul className="footer-links">
            {/* <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li> */}
            <li>
              <a href="#" className="footer-link">
                News
              </a>
            </li>
            <li>
              <a href="/Conditions" className="footer-link">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="Policies" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
         
          <div className="footer-social-icons">
            
           <a href="mailto:info@entrepreneurshipnetwork.net"
           className="footer-social-icon" >
            <FaEnvelope/>
           </a>
            <a
              href="https://www.linkedin.com/company/the-entrepreneurship-network/"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
             <FaLinkedinIn/>
            </a>
            
          </div>
        
    


      </div>
      
      
      </div>
    </footer>
  );
}

export default Footer;
