import React from "react";
import { DeleteIco, EditIco, HeartIco, MailIco, PhoneIco, WebIco } from "./icon";

export default function Card({ user, key, editInfo }) {
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
          <h3 className="user-name">{user.name}</h3>

          <div className="user-info">
            <MailIco />
            <p>{user.email}</p>
          </div>

          <div className="user-info">
            <PhoneIco />
            <p>{user.phone}</p>
          </div>

          <div className="user-info">
            <WebIco />
            <p>{user.website}</p>
          </div>
        </div>

        <div className="card-bottom">
          <ul>
            <li className="heart-ico"><button type='button'><HeartIco /></button></li>
            <li><button type='button' onClick={() => editInfo(user)}><EditIco /></button></li>
            <li><button type='button'><DeleteIco /></button></li>
          </ul>
        </div>
      </div>


    </div>
  );
}
