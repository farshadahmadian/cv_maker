import Contacts from "../contacts/Contacts";
import { primaryColor, headerFontColor } from "../../data";
import "./Header.css";

const Header = ({ profile }) => {
  return (
    <div
      style={{
        backgroundColor: primaryColor,
        color: headerFontColor,
      }}
      className="header-container"
    >
      <header className="header">
        <div className="info-container">
          <h1 className="name">{profile?.name}</h1>
          <Contacts />
        </div>
        {profile?.photo && (
          <div className="image-container">
            <img className="profile-image" src={profile.photo} alt="profile" />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
