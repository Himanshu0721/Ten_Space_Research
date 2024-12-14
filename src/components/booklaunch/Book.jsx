import React, { useState } from 'react';
import Step1 from './Step1';
import "./Book.css";

const Book = () => {
    const [formData, setFormData] = useState({
        LaunchLocation: "",
        OrbitalInclination: "",
        PayloadMass: "",
        OrbitalAltitude: "",
        PreferredSiteOfPayloadIntegration: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <section className="contact-section">
            <div className="contact-intro">
                <h2 className="contact-title">Book your launch</h2>
                <p className="contact-description">
                    Launches should prioritize customer needs, but they are often dictated by the capabilities of the launch vehicles. Our goal is to completely shift this approach and make the process entirely customer-centric.
                </p>
            </div>

            <form className="contact-form">
                <div className="form-group-container">
                    <h3>STEP 01</h3>
                    <Step1 />
                    {/* <div className="form-group">
                        <select
                            id="LaunchLocation"
                            name="LaunchLocation"
                            value={formData.LaunchLocation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Launch Location *</option>
                            <option value="Asia Pacific">Asia Pacific</option>
                            <option value="India">India</option>
                            <option value="Northern America">Northern America</option>
                            <option value="Northern Europe">Northern Europe</option>
                        </select>
                    </div>
                    <div className="form-group map-container">
                        <img src="https://agnikul.in/static/media/Asiapacific.aa4b17e04774ddfa2f41.png" alt="Map" />
                        <img src="https://agnikul.in/static/media/India.55558117c9de909157ab.png" alt="Map" />
                        <img src="https://agnikul.in/static/media/Northerneurope.72937c0971e5b98a631e.png" alt="Map" />
                        <img src="https://agnikul.in/static/media/Northernamerica.811ace263181b7c726fc.png" alt="Map" />
                    </div> */}
                    <div className="form-group">
                        <select
                            id="OrbitalInclination"
                            name="OrbitalInclination"
                            value={formData.OrbitalInclination}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Orbital Inclination *</option>
                            <option value="SSO">SSO</option>
                            <option value="50 deg to SSO">50 deg to SSO</option>
                            <option value="0-50 deg">0-50 deg</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select
                            id="PayloadMass"
                            name="PayloadMass"
                            value={formData.PayloadMass}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Payload Mass *</option>
                            <option value="20 kg">20 kg</option>
                            <option value="20-40 kg">20-40 kg</option>
                            <option value="40-60 kg">40-60 kg</option>
                            <option value="80-100 kg">80-100 kg</option>
                            <option value="100 kg">100 kg</option>
                        </select>
                    </div>
                    <h3>STEP 02</h3>
                    <div className="form-group">
                        <select
                            id="OrbitalAltitude"
                            name="OrbitalAltitude"
                            value={formData.OrbitalAltitude}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Orbital Altitude *</option>
                            <option value="400 kg">400 kg</option>
                            <option value="400-500 kg">400-500 kg</option>
                            <option value="500-600 kg">500-600 kg</option>
                            <option value="600-700 kg">600-700 kg</option>
                            <option value="700 kg">700 kg</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select
                            id="PreferredSiteOfPayloadIntegration"
                            name="PreferredSiteOfPayloadIntegration"
                            value={formData.PreferredSiteOfPayloadIntegration}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Preferred Site of Payload Integration</option>
                            <option value="Launchpad">Launchpad</option>
                            <option value="Leave it to">Leave it to</option>
                        </select>
                    </div>
                    <h3>STEP 03</h3>
                    <div className="form-group">
                        <input
                            id="name"
                            name="name"
                            className="form-input"
                            placeholder="Name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="company"
                            name="company"
                            className="form-input"
                            placeholder="Company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="phone"
                            name="phone"
                            className="form-input"
                            placeholder="Phone Number"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <button className="form-submit" type="submit">
                        <span className="button-icon">🚀</span>
                        BUILD MY VEHICLE
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Book;

