import React from "react";
import { context } from "../context";
import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./UserProfile.css";
import { ReactComponent as Bookmark } from "../img/bookmark.svg";
import { ReactComponent as Message } from "../img/message.svg";
import { ReactComponent as Contact } from "../img/contact.svg";
import { ReactComponent as Location } from "../img/location.svg";
import Error from "./Error";

const UserProfile = () => {
  const { users } = useContext(context);
  const { userId } = useParams();
  const user = users.find((user) => user.login.uuid === userId);

  if (!user) {
    return <Error />;
  }

  return (
    <section className="users">
      <div className="users__content">
        <Sidebar />
        <div className="users__profile__right">
          <div className="user__content-profile">
            <div className="user__content-details">
              <img
                src={user.picture.large}
                alt={user.name.first + " " + user.name.last}
                className="users__content-profile-img"
              />

              <div className="users__content-profile-details">
                <h1 className="users__content-profile-name">
                  {user.name.first} {user.name.last}
                  <span> {user.login.username}</span>
                </h1>

                <div className="users__content-profile-location">
                  <p>
                    <span className="users__content-profile-location-icon">
                      <Location />
                    </span>
                    {user.location.city}, {user.location.country}
                  </p>
                </div>

                <div className="users__content-profile-message">
                  <p>
                    <span className="users__content-profile-contact-icon">
                      <Message />
                    </span>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Message sending...");
                        setTimeout(() => {
                          alert("Message sent!");
                        }, 1000);
                      }}
                    >
                      Message
                    </Link>
                  </p>

                  <p>
                    <span className="users__content-profile-contact-icon">
                      <Contact />
                    </span>
                    <NavLink to={`/tel:${user.phone}`}>Contact</NavLink>
                  </p>
                </div>
                <div className="">&nbsp;</div>
              </div>

              <div className="bookmark">
                <Link to="/users" className="bookmark__link">
                  &larr;
                </Link>
                <Bookmark />
              </div>

              <hr />
            </div>
            <div className="border-line"></div>
            <div className="bio-container">
              <h1>
                Address:
                <span>
                  {user.location.street.number} {user.location.street.name}
                </span>
              </h1>
              <h1>
                Email:
                <span>{user.email}</span>
              </h1>
              <h1>
                Phone:
                <span>{user.phone}</span>
              </h1>
              <h1>
                Date of Birth:
                <span>{user.dob.date}</span>
              </h1>

              <h1>
                Gender: <span>{user.gender}</span>
              </h1>

              <h1>
                Cell: <span>{user.cell}</span>
              </h1>
            </div>

            <div className="border-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
