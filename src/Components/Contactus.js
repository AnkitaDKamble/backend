// src/Components/Contactus.jsx

import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Alert, Spinner } from 'react-bootstrap';
import './Contactus.css';
import contactImage from './Contactus.jpg';

const Contactus = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // SCROLL FUNCTION
  const handleEnquireNow = () => {

    const enquirySection = document.getElementById('send-enquiry');

    if (enquirySection) {

      enquirySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {

    const fetchUserProfile = async () => {

      const token = localStorage.getItem('token');

      if (token) {

        try {

          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/profile`,
            {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.ok) {

            const userData = await response.json();

            setFormData(prevData => ({
              ...prevData,
              name: userData.username || '',
              email: userData.email || '',
              mobile: userData.mobile || '',
            }));
          }

        } catch (error) {
          console.error(error);
        }
      }

      setIsLoading(false);
    };

    fetchUserProfile();

  }, []);

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (
      (name === 'name' &&
        !!localStorage.getItem('token') &&
        formData.name !== '') ||

      (name === 'mobile' &&
        !!localStorage.getItem('token') &&
        formData.mobile !== '')
    ) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setShowSuccessModal(false);
    setShowErrorAlert(false);

    try {

      const response = await fetch(
         `${process.env.REACT_APP_API_URL}/api/enquiries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {

        setShowSuccessModal(true);

        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          message: '',
        });

      } else {

        setErrorMessage(data.message);
        setShowErrorAlert(true);
      }

    } catch (error) {

      console.error(error);

      setErrorMessage('Server connection failed.');
      setShowErrorAlert(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  if (isLoading) {

    return (
      <div className="contact-loading">
        <Spinner animation="border" variant="warning" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="contact-page">

        {/* HERO SECTION */}
        <div className="contact-hero">

          <div className="contact-hero-overlay"></div>

          <div className="contact-hero-content">

            <h1 className="contact-hero-title">
              <i className="bi bi-envelope-paper me-3"></i>
              Contact Us
            </h1>

            <div className="hero-underline"></div>

            <p className="contact-hero-subtitle">
              Let's Build Something Amazing Together
            </p>

            {/* ENQUIRE BUTTON */}
            <Button
              className="btn btn-business btn-lg px-5 py-3 rounded-pill shadow-lg hero-btn mt-4"
              onClick={handleEnquireNow}
            >
              Enquire Now
            </Button>

          </div>

        </div>

        {/* MAIN SECTION */}
        <div className="contact-main">

          <div className="container">

            {/* TOP ROW */}
            <div className="row g-5 mb-5">

              {/* LEFT SIDE */}
              <div className="col-lg-6 col-md-12">

                <div className="contact-info-card">

                  <div className="contact-image-container">

                    <img
                      src={contactImage}
                      alt="Infinity Web Solution"
                      className="contact-image"
                    />

                  </div>

                  <h4 className="contact-info-title mt-4">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Our Address
                  </h4>

                  <div className="contact-info-divider"></div>

                  <div className="contact-info-item">
                    <i className="bi bi-building me-3"></i>

                    <span>
                      A/P Titave, Tal: Radhanagari, Kolhapur
                    </span>
                  </div>

                  <div className="contact-info-item">
                    <i className="bi bi-pin-map-fill me-3"></i>

                    <span>PIN: 416208</span>
                  </div>

                  <div className="contact-info-item">
                    <i className="bi bi-telephone-fill me-3"></i>

                    <span>+91 9511789705</span>
                  </div>

                  <div className="contact-info-item">
                    <i className="bi bi-envelope-fill me-3"></i>

                    <span>ankitakamblemay@gmail.com</span>
                  </div>

                  <div className="business-hours mt-4">

                    <h5 className="text-gold">
                      <i className="bi bi-clock-history me-2"></i>
                      Business Hours
                    </h5>

                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-6 col-md-12">

                <div className="business-highlight-card">

                  <div className="highlight-top">

                    <i className="bi bi-stars highlight-main-icon"></i>

                    <h2>Why Choose Infinity Web Solution?</h2>

                    <p>
                      We build modern, responsive and scalable
                      web applications for your business growth.
                    </p>

                  </div>

                  <div className="highlight-features">

                    <div className="feature-box">

                      <i className="bi bi-lightning-charge-fill"></i>

                      <div>
                        <h5>Fast Delivery</h5>
                        <p>Quick and professional project delivery.</p>
                      </div>

                    </div>

                    <div className="feature-box">

                      <i className="bi bi-phone-fill"></i>

                      <div>
                        <h5>Responsive Design</h5>
                        <p>Perfect on mobile, tablet and desktop.</p>
                      </div>

                    </div>

                    <div className="feature-box">

                      <i className="bi bi-shield-check"></i>

                      <div>
                        <h5>Trusted Support</h5>
                        <p>Reliable support whenever you need help.</p>
                      </div>

                    </div>

                    <div className="feature-box">

                      <i className="bi bi-code-slash"></i>

                      <div>
                        <h5>Modern Technology</h5>
                        <p>MERN stack based scalable solutions.</p>
                      </div>

                    </div>

                  </div>

                  <div className="quote-section">

                    <i className="bi bi-quote quote-icon"></i>

                    <p>
                      “Your Vision. Our Passion. Infinitely.”
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ENQUIRY FORM SECTION */}
            <div className="row">

              <div className="col-12">

                <div
                  className="enquiry-card"
                  id="send-enquiry"
                >

                  <h4 className="contact-info-title">
                    <i className="bi bi-chat-dots-fill me-2"></i>
                    Send an Enquiry
                  </h4>

                  <div className="contact-info-divider"></div>

                  {showErrorAlert && (

                    <Alert
                      variant="danger"
                      dismissible
                      onClose={() => setShowErrorAlert(false)}
                    >
                      {errorMessage}
                    </Alert>

                  )}

                  <Form onSubmit={handleSubmit}>

                    <div className="row">

                      <div className="col-md-6">

                        <Form.Group className="mb-3">

                          <Form.Label>Name</Form.Label>

                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="business-input"
                            placeholder="Enter your name"
                          />

                        </Form.Group>

                      </div>

                      <div className="col-md-6">

                        <Form.Group className="mb-3">

                          <Form.Label>Email</Form.Label>

                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="business-input"
                            placeholder="Enter your email"
                          />

                        </Form.Group>

                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-6">

                        <Form.Group className="mb-3">

                          <Form.Label>Mobile</Form.Label>

                          <Form.Control
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="business-input"
                            placeholder="Enter 10-digit mobile number"
                          />

                        </Form.Group>

                      </div>

                      <div className="col-md-6">

                        <Form.Group className="mb-3">

                          <Form.Label>Subject</Form.Label>

                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="business-input"
                            placeholder="Enter subject"
                          />

                        </Form.Group>

                      </div>

                    </div>

                    <Form.Group className="mb-4">

                      <Form.Label>Message</Form.Label>

                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="business-input business-textarea"
                        placeholder="Enter your message here..."
                      />

                    </Form.Group>

                    <Button
                      type="submit"
                      className="submit-btn"
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Submit Enquiry
                    </Button>

                  </Form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS MODAL */}
      <Modal
        show={showSuccessModal}
        onHide={handleCloseSuccessModal}
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title>
            Enquiry Submitted
          </Modal.Title>

        </Modal.Header>

        <Modal.Body className="text-center">

          <i className="bi bi-check-circle-fill text-success display-3"></i>

          <p className="mt-3">
            Thank you! We will contact you soon.
          </p>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="dark"
            onClick={handleCloseSuccessModal}
          >
            Close
          </Button>

        </Modal.Footer>

      </Modal>
    </>
  );
};

export default Contactus;