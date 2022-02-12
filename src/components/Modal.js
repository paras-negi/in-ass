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
  }, [stateForm]);

  const handleChange = (e) => {
      e.preventDefault();
      console.log(e);
    const { name, value } = e.target;
    const copyUserInfo = {...userInfo};
    setUserInfo({ ...copyUserInfo, [name]: value });
  };

  const updateFormData = () => {
    let usersCopy = { ...users };
    usersCopy[userInfo.id] = { ...usersCopy[userInfo.id], ...userInfo };
    onSubmit(usersCopy);
  };

  if (!open) {
    return null;
  }

//   onClick={onSubmit}

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

          <form className="form">
            <div className="form-group">
              <label>
                Name: <Require />
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={userInfo?.name}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
