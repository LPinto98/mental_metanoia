import React from "react";
import "./Footer.css";
import logo from "../../photos/logo2.png";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="footer_icons">
        <a
          href="https://www.linkedin.com/company/metanoia-mental-health"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <i className="fab fa-linkedin"></i>
          </button>
        </a>
        <a
          href="https://www.instagram.com/metanoia.mentalhealth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <i className="fab fa-instagram"></i>
          </button>
        </a>
      </div>
      <div class="container pt-3 border-top border-light-subtle">
        <div class="row gy-3 align-items-lg-center">
          <div class="col-12 col-lg-6 order-1 order-lg-0">
            <div class="copyright-wrapper d-block mb-1 fs-8 text-center text-lg-start">
              &copy; 2024. All Rights Reserved.
            </div>
            <div class="credit-wrapper d-block text-secondary fs-8 text-center text-lg-start">
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/larissa-pinto/"
                class="link-secondary text-decoration-none"
              >
                Larissa
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/swapnil-galhate-3aa008167/"
                class="link-secondary text-decoration-none"
              >
                Swapnil
              </a>{" "}
              with <span class="text-primary">&#9829;</span>
            </div>
          </div>
        </div>
      </div>
      {/* <span className="text-muted">
        Created by
        <a href="https://www.linkedin.com/in/larissa-pinto/">Larissa</a> &
        <a href="https://www.linkedin.com/in/swapnil-galhate-3aa008167/">
          Swapnil
        </a>
      </span> */}
    </div>
  );
}

export default Footer;
