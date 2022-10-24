import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="users__aside">
      <div className="aside__top">
        <div className="aside__bar">
          <h1>Understand</h1>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Overview</h3>
            </div>
            <span>&rarr;</span>
          </div>

          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Analytics</h3>
            </div>
            <span>&rarr;</span>
          </div>

          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Attribution</h3>
            </div>
            <span>&rarr;</span>
          </div>

          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Engagement</h3>
            </div>
            <span>&rarr;</span>
          </div>

          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Events</h3>
            </div>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="aside__bar">
          <h1>Explore</h1>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Users</h3>
            </div>
            <span>&rarr;</span>
          </div>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Behaviour</h3>
            </div>
            <span>&rarr;</span>
          </div>

          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Drill</h3>
            </div>
            <span>&rarr;</span>
          </div>

          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Formulas</h3>
            </div>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="aside__bar">
          <h1>Reach</h1>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Messaging</h3>
            </div>
            <span>&rarr;</span>
          </div>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Feeback & Rating</h3>
            </div>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="aside__bar">
          <h1>Improve</h1>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Crashes</h3>
            </div>
            <span>&rarr;</span>
          </div>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>Remote Config</h3>
            </div>
            <span>&rarr;</span>
          </div>
          <div className="aside__bar-content">
            <div>
              <span className="dot">&nbsp;</span>
              <h3>A/B Tesint</h3>
            </div>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
      <div className="aside__footer">
        <h1>Enterprise Edition</h1>
        <p>v 1.0.0</p>
      </div>
    </aside>
  );
}

export default Sidebar;
