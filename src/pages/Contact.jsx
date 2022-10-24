import React from "react";
import "./Contact.css";
import { ReactComponent as ContactImg } from "../img/contact2.svg";

const Contact = () => {
  return (
    <div>
      <div className="section-contact contact">
        <div className="section-center contact-center">
          <article className="contact-img">
            <ContactImg />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Contact;
