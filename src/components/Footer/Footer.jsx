import React from "react";
import "./footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Webia</h2>
          <p>Crafting quality fashion for everyone.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/collection/kids">Kids</a>
            </li>
            <li>
              <a href="/collection/men">Men</a>
            </li>
            <li>
              <a href="/collection/women">Women</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@webia.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Webia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
