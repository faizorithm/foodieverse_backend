function Contact() {
  return (
    <div className="contact-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center mb-5">
          Have questions or want to place an order? Reach out to us!
        </p>

        <div className="row">
          <div className="col-md-6 mb-4">
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />
              <textarea
                placeholder="Your Message"
                className="form-control mb-3"
                rows="5"
              ></textarea>
              <button className="btn contact-btn w-100">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map">
              <iframe
                src="https://www.google.com/maps?q=Hunter+College+New+York&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>

            <div className="contact-info mt-4 text-center">
              <h4>📍 Location</h4>
              <p>Hunter College, New York</p>

              <h4>📞 Phone</h4>
              <p>(212) 456-7890</p>

              <h4>📧 Email</h4>
              <p>foodieverse@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;