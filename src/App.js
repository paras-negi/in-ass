import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import Modal from "./components/Modal";
import { logDOM } from "@testing-library/react";

function App() {
  const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [usersObj, setUsersObj] = useState({});
  const [stateForm, setstateForm] = useState({});


  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    let tempObj = {};
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((d) => {
          tempObj[d.id] = {...d, isFavourite: false};
        });
        // setUsers(res);
        setUsersObj(tempObj);
        setLoading(false);
      });
  };

  const editInfo = (d) => {
    // console.log(d);
    setstateForm({
      name: d.name,
      website: d.website,
      email: d.email,
      phone: d.phone,
      id: d.id,
    });

    setOpen(!open);
  };

  const handelClose = () => {
    setOpen(!open);
    setstateForm({});
  };

  const updateUsersObj = (obj) => {
    setUsersObj(obj);
  };

  console.log(usersObj);

  return loading ? (
    <div className="loader-main">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  ) : (
    <div className="App">
      {Object.values(usersObj)?.length
        ? Object.values(usersObj).map((user, index) => (
            <Card
              user={user}
              key={index}
              editInfo={editInfo}
              users={usersObj}
              updateUsers={updateUsersObj}
            />
          ))
        : null}

      <Modal
        open={open}
        handelClose={handelClose}
        stateForm={stateForm}
        onSubmit={updateUsersObj}
        users={usersObj}
      />
    </div>
  );
}

export default App;
