import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
          <p>Follow us at</p>
          <a className="text-dark fs-8" href="https://www.facebook.com/profile.php?id=100008973305616" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook"> ชา มิน </i>
            </a><br></br>
            <a className="text-dark fs-8" href="https://mail.google.com/" target="_blank" rel="noreferrer">
            <i class="fa fa-envelope"> </i> chinma@gmail.com <br></br>
            </a>
            <a className="text-dark fs-8" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i class="fab fa-instagram"></i> Chinma_Company <br></br>
            </a>
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://sahibsingh.dev" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Sahib Singh</a>
            </p>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;