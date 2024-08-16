import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Your Company Name. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-light me-3">Privacy Policy</a>
            <a href="#" className="text-light me-3">Terms of Service</a>
            <a href="#" className="text-light">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;