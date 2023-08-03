import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                </div>

                
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100" style={{color:"white"}}>
                  Copyright @ 2023 eDOC. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
