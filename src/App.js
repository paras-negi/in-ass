import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false)
  const [stateForm, setstateForm] = useState({})
  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
        setLoading(false);
      });
  };
  const editInfo = (d) => {
    setstateForm({
      name:d.name,
      website:d.website,
      email:d.email,
      phone:d.phone
    })
    setOpen(!open)
  }
  const handelClose=()=>{
    setOpen(!open)
    setstateForm({})
  }
  return loading ? (
    <div className="loader-main">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  ) : (
    <div className="App">
      {users?.length
        ? users.map((user, index) => <Card user={user} key={index} editInfo={editInfo} />)
        : null}
      <Modal open={open} handelClose={handelClose} stateForm={stateForm}/>
    </div>
  );
}

export default App;
