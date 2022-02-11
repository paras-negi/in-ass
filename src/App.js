import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

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
        ? users.map((user, index) => <Card user={user} key={index} />)
        : null}
    </div>
  );
}

export default App;
