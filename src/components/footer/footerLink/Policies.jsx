import React, { useState } from "react";
import "./Policies.css";

function Policies() {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="terms-modal">
      <div className="terms-content">
        {/* Close Button */}
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>

        <h2 className="terms-title">PRIVACY POLICY</h2>
        
        <h3>Introduction</h3>
        <p>
          Welcome to our website. By accessing or using our services, you agree
          to comply with and be bound by these terms and conditions. Please read
          them carefully. If you do not agree to these terms, you should not
          access or use our website.
        </p>

        <h3>Acceptance of Terms</h3>
        <p>
          By using this website, you acknowledge that you have reviewed and
          agree to all of these terms. If you do not agree with these terms, you
          are not permitted to use this site.
        </p>

        <h3>Intellectual Property Rights</h3>
        <p>
          All content on this website, including but not limited to text,
          graphics, images, and logos, are the property of the company or its
          licensors and are protected by intellectual property laws. Unauthorized
          use of any materials may violate copyright, trademark, and other laws.
        </p>

        <h3>User Responsibilities</h3>
        <p>
          You are responsible for ensuring that your use of the website complies
          with all applicable laws. You agree not to engage in any activity that
          disrupts or interferes with the website's functionality.
        </p>

        <h3>Privacy Policy</h3>
        <p>
          We are committed to protecting your privacy. Any personal information
          you provide through this website will be handled in accordance with
          our privacy policy. Please review our Privacy Policy for more details.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          We do not warrant that the information on this website is accurate,
          complete, or up-to-date. Your use of this website is at your own risk.
          We are not liable for any direct, indirect, incidental, or
          consequential damages arising from your use of this website.
        </p>

        <h3>Third-Party Links</h3>
        <p>
          This website may contain links to third-party websites. We do not
          control or endorse these websites and are not responsible for their
          content or policies.
        </p>

        <h3>Amendments to Terms</h3>
        <p>
          We reserve the right to amend these terms and conditions at any time.
          Any changes will be posted on this page, and your continued use of the
          website constitutes your acceptance of the updated terms.
        </p>

        <h3>Governing Law</h3>
        <p>
          These terms are governed by the laws of [Your Jurisdiction]. Any
          disputes arising from or related to these terms will be resolved in
          the courts of [Your Jurisdiction].
        </p>

        <h3>Contact Information</h3>
        <p>
          If you have any questions about these terms, please contact us at
          
          <a
            href="mailto:privacy@yourwebsite.com"
            className="contact-email"
          >
            info@entrepreneurshipnetwork.net
          </a>
        </p>
      </div>
    </div>
  );
}

export default Policies;
