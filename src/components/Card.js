import React from "react";

export default function Card({ user, key }) {
  return (
    <div className="card-container" key={key}>
      <div className="card-main">

        <div className="img-container">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
            alt=""
          ></img>
        </div>

        <div className="card-body">
          <div className="user-name">{user.name}</div>

          <div className="user-info">
            <img src="" alt="abc"></img>
            <p>{user.email}</p>
          </div>

          <div className="user-info">
            <img src="" alt="abc"></img>
            <p>{user.phone}</p>
          </div>

          <div className="user-info">
            <img src="" alt="abc"></img>
            <p>{user.website}</p>
          </div>
        </div>

        <div className="card-bottom"> adjkshadkj</div>
      </div>

      
    </div>
  );
}
