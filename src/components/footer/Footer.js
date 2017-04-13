import React from "react";

import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="text-xs-center text-muted">
        Some links
        {" "}<a
          href="https://github.com/"
          target="_blank"
        >Github
        </a> or some tweets
        {" "}<a
          href="https://twitter.com/"
          target="_blank"
        >Twitter
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
