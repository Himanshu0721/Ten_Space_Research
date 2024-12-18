import React, { useState } from "react";
import "./ContactForm.css";
import contactVideo from "../../../assets/contactV.mp4";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNo: "",
        inquiry: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "17e629c6-5ff5-4601-9e90-a5a658241952",
                    ...formData,
                }),
            });

            if (response.ok) {
                alert("Your message has been sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    contactNo: "",
                    inquiry: "",
                    message: "",
                });
            } else {
                alert("There was an issue submitting the form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contactform-fix-container">
            {/* Background Video */}
            <video autoPlay muted loop className="background-video">
                <source src={contactVideo} type="video/mp4" />
            </video>

            {/* Main Container */}
            <div className="content-wrapper">

                {/* Left Side Contact Details */}

                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p>
                        <strong>ADDRESS:</strong> <br />
                        India accelerator, Noida 201301 UP, India
                    </p>
                    
                    <p>
                        <strong>EMAIL:</strong> <br />
                        info@entrepreneurshipnetwork.net
                    </p>
                    <p>
                        <strong>WEBSITE:</strong> <br />
                        www.entrepreneurshipnetwork.net
                    </p>
                </div>

                {/* Right Side Form Section */}

                <div className="form-section">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name:"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email-Id:"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="contactNo"
                            placeholder="Contact No."
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="inquiry"
                            placeholder="Inquiry Related To:"
                            value={formData.inquiry}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message:"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="msg-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;