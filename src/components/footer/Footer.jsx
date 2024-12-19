import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="" style={{background: "#4d8c52"}}>
        <div className="mx-auto w-full">
          <div className="flex flex-wrap justify-around small-center gap-8 px-4 py-6 ">
            <div className="small-center flex gap-6" style={{ flexDirection: "column" }}>
              <div className="small-center">
                <h2 className="mb-6 text-sm  font-extrabold  uppercase text-white">
                  contact us
                </h2>
                <p className="text-white font-medium">
                  info@entrepreneurshipnetwork.net
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Corporate Address
                </h2>
                <p className="text-white font-medium">
                  India accelerator <br /> Noida 201301 UP, India
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Quick links
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/technology" className="hover:underline">
                    Technology
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/careers" className="hover:underline">
                    Career
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/book-launch" className="hover:underline">
                    Book a Launch
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase text-white">
                Curious to know more about
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    News
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Policies" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase text-white">
                Social Links
              </h2>
              <div className="flex flex-column small-center-justify small-text gap-4">
              <div>
              <a
                href="mailto:info@entrepreneurshipnetwork.net"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.006L3 6.757v10.244h18V6.757l-9 6.249Zm0-2.212 8.571-6H3.429l8.571 6ZM2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
                </svg>
                <span className="sr-only">Gmail account</span>
              </a>
              </div>
              <div>
              <a
                href="https://www.linkedin.com/company/the-entrepreneurship-network/"
                target="_blank"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0ZM7.09 20.452H3.545V9.052H7.09v11.4ZM5.318 7.545a2.045 2.045 0 1 1 0-4.09 2.045 2.045 0 0 1 0 4.09ZM20.454 20.452h-3.545v-5.563c0-1.33-.027-3.043-1.854-3.043-1.854 0-2.141 1.45-2.141 2.945v5.661H9.318V9.052h3.409v1.561h.05c.477-.902 1.637-1.854 3.366-1.854 3.598 0 4.264 2.366 4.264 5.436v6.257Z" />
                </svg>
                <span className="sr-only">LinkedIn account</span>
              </a>
              </div>
              </div>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
