import React, { useState } from "react";
// import "./Book.css";
import "./Book.css";
const Step1 = () => {
    const [formData, setFormData] = useState({ LaunchLocation: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const getMapSrc = () => {
        switch (formData.LaunchLocation) {
            case "Asia Pacific":
                return "https://agnikul.in/static/media/Asiapacific.aa4b17e04774ddfa2f41.png";
            case "India":
                return "https://agnikul.in/static/media/India.55558117c9de909157ab.png";
            case "Northern America":
                return "https://agnikul.in/static/media/Northernamerica.811ace263181b7c726fc.png";
            case "Northern Europe":
                return "https://agnikul.in/static/media/Northerneurope.72937c0971e5b98a631e.png";
            default:
                return "";
        }
    };

    return (
        <div>
            <div className="form-group">
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
                {formData.LaunchLocation && (
                    <img src={getMapSrc()} alt={formData.LaunchLocation} />
                )}
            </div>
        </div>
    );
};

export default Step1;
