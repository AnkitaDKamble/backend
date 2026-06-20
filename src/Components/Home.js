// src/Components/Home.jsx


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

const Home = () => {

  

  const handleEnquireNow = () => {
  const enquirySection = document.getElementById('send-enquiry');

  if (enquirySection) {
    enquirySection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

  return (
    <div>

      {/* Hero Section */}
      <header className="hero-section text-white text-center py-5">
        <div className="hero-overlay"></div>

        <div className="container position-relative">

          <h6 className="text-gold mb-3 animate-text">
            Welcome to
          </h6>

          <h1 className="display-3 fw-bold mb-3 gradient-text-business">
            Infinity Web Solution
          </h1>

          <h4 className="mb-4 text-light-white">
            <b>Your Vision. Our Passion. Infinitely.</b>
          </h4>

          <button
            className="btn btn-business btn-lg px-5 py-3 rounded-pill shadow-lg hero-btn"
            onClick={handleEnquireNow}
          >
            Send an Enquiry
          </button>

        </div>
      </header>

      {/* Features Section */}
      <section className="py-5 features-section-business">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="business-title">
              Why Choose Us?
            </h2>

            <div className="underline-business mx-auto"></div>

            <p className="text-muted mt-3">
              Delivering excellence with trust and quality
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg business-card">

                <div className="card-body text-center p-4">

                  <div className="icon-circle-business bg-business-gold mb-3 mx-auto">
                    <i className="bi bi-person-check fs-1 text-white"></i>
                  </div>

                  <h5 className="card-title fw-bold mb-3">
                    Personalized Solutions
                  </h5>

                  <p className="card-text text-muted">
                    Customized website solutions tailored to your business goals.
                  </p>

                </div>

              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg business-card">

                <div className="card-body text-center p-4">

                  <div className="icon-circle-business bg-business-gold mb-3 mx-auto">
                    <i className="bi bi-lightning-charge fs-1 text-white"></i>
                  </div>

                  <h5 className="card-title fw-bold mb-3">
                    Fast Delivery
                  </h5>

                  <p className="card-text text-muted">
                    Quick and efficient development without compromising quality.
                  </p>

                </div>

              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg business-card">

                <div className="card-body text-center p-4">

                  <div className="icon-circle-business bg-business-gold mb-3 mx-auto">
                    <i className="bi bi-shield-check fs-1 text-white"></i>
                  </div>

                  <h5 className="card-title fw-bold mb-3">
                    Quality Assurance
                  </h5>

                  <p className="card-text text-muted">
                    Reliable, secure, and high-quality website solutions.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;