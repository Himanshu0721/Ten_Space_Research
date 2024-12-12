import React, { useState } from "react";
import "./Conditions.css";

function Conditions() {
  const [isVisible, setIsVisible] = useState(true); 

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (

    <div className="terms-modal">
        <button className="close-button" onClick={closeModal}>
      &times;
    </button>
      <div className="terms-content">
        {/* Close Button */}
        
        
        <h2 className="terms-title">TERMS AND CONDITIONS</h2>
        <p>
        These terms of use represent an agreement between Agnikul Cosmos Private Limited and the users of its website. This agreement also outlines the terms governing your use of the website. By accessing, browsing, submitting information to, or otherwise interacting with the site, you confirm that you have reviewed and accept all the terms of this agreement and agree to comply with them.
        </p>

        <h3>Intellectual Property</h3>
        <p>
        We hold all intellectual property rights for the Site, including its content, graphics, and copyrighted materials. The compilation, design, and layout of the Site are exclusively owned by us. You are permitted to access, view, and print content from the Site solely for personal use or in connection with evaluating or using our services. Any copying, reproduction, or publication of the content (including graphics, videos, photographs, or other copyrighted materials) requires our prior written consent.
        </p>

        <h3>Third Party Websites</h3>
        <p>
        The Site may occasionally include features and functions enabling interaction with external websites, such as social media platforms, which we do not control. These features, functions, and links are provided solely for your convenience. We do not endorse these external websites or social media platforms and are not liable for their content or transmissions.
        </p>

        <h3>Provision of Information and Privacy</h3>
        <p>
        Providing personal information to us is not mandatory. If you choose to share your information, you are responsible for ensuring its accuracy and completeness. We collect personal data you provide and may use it to communicate with you, conduct statistical analysis, and support research and development efforts. Typically, we do not share personal information with third parties for their own purposes. However, we may share it with affiliates or service providers who assist in completing transactions or delivering services on our behalf, or when required by law. Your personal information may be stored securely on our providers' servers, which could involve transferring it to countries with less stringent legal protections for personal data than those where you or we are located.
        </p>

        <h3>All Liabilities Excluded</h3>
        <p>
        By using this Site, you acknowledge and accept that you do so at your own risk. Given the variety of information sources accessible through the Site and the potential challenges associated with electronic distribution, there may be delays, errors, omissions, inaccuracies, or other issues with the information provided.
        </p>

        <h3>Governing Law and Jurisdiction</h3>
        <p>
          The Site, all related content, and this Agreement shall be governed by
          and construed in accordance with the laws of India, without regard to
          the principles of conflicts of laws. The courts of Chennai, India
          shall have exclusive jurisdiction on any dispute that arises in
          relation to this Agreement or your use of the Site.
        </p>

        <h3>Amendments</h3>
        <p>
          We may amend this Agreement from time to time, and you should ensure
          that you check and read the same regularly. If you continue to use the
          Site after this Agreement is amended, you are deemed to have agreed
          with the new terms of this Agreement. 
        </p>

        <h3>Contact</h3>
        <p>If you have any queries, please contact  privacy@agnikul.in</p>
      </div>
    </div>
  );
}

export default Conditions; 