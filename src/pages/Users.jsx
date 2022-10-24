import React, { useEffect, useState, useContext } from "react";
import "./Users.css";
import { ReactComponent as Menu } from "../img/menu.svg";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { context } from "../context";
import Pagination from "../components/Pagination";

function Users() {
  const { loading, users, selectedUsers, page, setPage, pages } =
    useContext(context);
  // render the users
  const renderUsers = () => {
    if (loading) {
      return <h1 className="loading">Loading...😢</h1>;
    }
    return selectedUsers.map((user) => {
      const { name, picture, location, email, phone, login } = user;
      return (
        <Link
          key={login.uuid}
          to={{
            pathname: `/users/${login.uuid}`,
            state: { user },
          }}
          role="row"
          className="row"
        >
          <div role="gridcell" className="cell">
            {name.first} {name.last}
          </div>
          <div role="gridcell" className="cell">
            {email}
          </div>
          <div role="gridcell" className="cell">
            {phone}
          </div>
        </Link>
      );
    });
  };

  return (
    <section className="users">
      <div className="users__content">
        <Sidebar />
        <div className="users__content-right">
          <div className="users__content-profile">
            <h1 className="users__title">User Profile</h1>
            <Menu />
          </div>

          <div className="users__content-bottom">
            <div className="users__content-filtering">
              <div>
                <h2>Users</h2>
                {/* select  */}
                <select name="users" id="users">
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="border"></div>
              <div>
                <h2>Filter</h2>
                {/* toggle option  */}
                <div className="toggle">
                  <input type="checkbox" id="toggle" />
                  <label htmlFor="toggle">Apply</label>
                </div>
              </div>
            </div>

            <div className="users__content-search">
              <div className="search__input">
                <input type="text" placeholder="Search for name or email" />
                <button>Search</button>
              </div>
            </div>
            <div className="users__content-table">
              {/* Create a clickable link table */}
              <div role="grid" className="table">
                <div role="row" className="row first-row">
                  <div role="gridcell" className="cell">
                    👥Name
                  </div>
                  <div role="gridcell" className="cell">
                    📧Email
                  </div>
                  <div role="gridcell" className="cell">
                    📲Tel:
                  </div>
                </div>
                {renderUsers()}
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Users;
