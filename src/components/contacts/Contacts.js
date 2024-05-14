import { contacts, headerFontColor } from "../../data";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      {contacts?.phone && (
        <div className="contact">
          <img className="icon" src="./phone.png" alt="phone" />
          <a style={{ color: headerFontColor }} href={`tel:${contacts.phone}`}>
            {contacts.phone}
          </a>
        </div>
      )}
      {contacts?.address && (
        <div className="contact">
          <img className="icon" src="./address.png" alt="address" />
          <span>{contacts.address}</span>
        </div>
      )}
      {contacts?.email && (
        <div className="contact">
          <img className="icon" src="./email.png" alt="email" />
          <a
            style={{ color: headerFontColor }}
            href={`mailto:${contacts.email}`}
          >
            {contacts.email}
          </a>
        </div>
      )}
      {contacts?.github && (
        <div className="contact">
          <img className="icon" src="./github.png" alt="github" />
          <a
            style={{ color: headerFontColor }}
            href={`https://github.com/${contacts.github}`}
            rel="noreferrer"
            target="_blank"
          >
            {contacts.github}
          </a>
        </div>
      )}
      {contacts?.linkedin && (
        <div className="contact">
          <img className="icon" src="./linkedin.png" alt="linkedin" />
          <a
            style={{ color: headerFontColor }}
            href={`https://www.linkedin.com/in/${contacts.linkedin}/`}
            rel="noreferrer"
            target="_blank"
          >
            {contacts.linkedin}
          </a>
        </div>
      )}
    </div>
  );
};

export default Contacts;
