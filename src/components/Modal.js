import React, { useState, useEffect } from "react";
import { CrossIco } from "./icon";
import Require from "./required";

export default function Modal({
  handelClose,
  open,
  stateForm,
  onSubmit,
  users,
}) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(stateForm);
  }, []);

  if (!open) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const updateFormData = () => {
    let usersCopy = { ...users };
    usersCopy[userInfo.id] = { ...usersCopy[userInfo.id], ...userInfo };
    onSubmit(usersCopy);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Basic Modal</h3>
          <button type="button" onClick={handelClose}>
            <CrossIco />
          </button>
        </div>
        <div className="modal-body">
          <form className="form" onClick={onSubmit}>
            <div className="form-group">
              <label>
                Name: <Require />
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={userInfo?.name}
                handleChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Email: <Require />
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userInfo?.email}
                handleChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Phone: <Require />
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={userInfo?.phone}
                handleChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Website: <Require />
              </label>
              <input
                type="text"
                className="form-control"
                name="website"
                value={userInfo?.website}
                handleChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-border mr-1"
            onClick={() => {
              updateFormData();
              handelClose();
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              updateFormData();
              handelClose();
            }}
          >
            Ok
          </button>
        </div>
      </div>
      <div className="modal-bg" onClick={handelClose}></div>
    </div>
  );
}
