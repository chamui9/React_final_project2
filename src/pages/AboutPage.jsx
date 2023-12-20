import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center"> About us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to chinma! We are an online product sales system dedicated to providing a wide range of high-quality products that meet the diverse needs of our customers.

          At chinma, we take pride in earning the trust and confidence of our customers, who support and believe in our products.

        </p>

        <h2 className="text-center py-4">Our products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
        <p className="lead text-center">
          chinma Company<br />
          Address: 222 Walailak University, Thaiburi Subdistrict, Tha Sala District, Nakhon Si Thammarat 80160<br />
          Contact Number: 062-223-1676
        </p>

        <p className="lead text-center contact-info">
      <a
        href="https://www.facebook.com/profile.php?id=100008973305616"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary" // Add your button styling class
      >
        Visit Facebook
      </a>
    </p>

      <div style={{ width: '80%', margin: '50px auto 0', paddingBottom: '56.25%', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4504.313818792306!2d99.39812309268945!3d18.31708906571592!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sth!2sth!4v1702719200136!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      <Footer />
    </>
  )
}

export default AboutPage