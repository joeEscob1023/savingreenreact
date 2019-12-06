import React from "react";

function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row row-content">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-5 text-center">
              <h5>Social</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-google" />
              </a>{" "}
            </div>
            <div className="col-sm-4 text-center">
              <div className="col">
                <a
                  role="button"
                  className="btn btn-link"
                  href="tel:+12345678910"
                >
                  <i className="fa fa-phone" /> 1-234-567-8910
                </a>
                <br />
                <a
                  role="button"
                  className="btn btn-link"
                  href="mailto:contactus@savingreen.com"
                >
                  <i className="fa fa-envelope" /> contactus@savingreen.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
