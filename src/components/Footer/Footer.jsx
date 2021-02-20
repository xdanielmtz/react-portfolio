import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div >
      <footer id="theFooter" class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Quick Links</h5>
              <p class="grey-text text-lighten-4"></p>
            </div>
            <div class="col l4 offset-l2 s12">
              <ul>
                <li>
                  <a
                    className="footerLinks"
                    href="https://github.com/xdanielmtz"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="footerLinks"
                    href="https://www.linkedin.com/in/daniel-martinez-2130b81b5/"
                  >
                    LinkdIn
                  </a>
                </li>
                <li>
                  <a
                    className="footerLinks"
                    href="https://docs.google.com/document/d/1Y032gC5r-Xg9yC9JL9LPpukUcwriwOar9rTpsvwfkt4/edit"
                    target="blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2021</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
