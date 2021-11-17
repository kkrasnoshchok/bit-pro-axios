import React, { useState } from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Axios from "axios";

function PostForm(props) {
  const url = new URL("https://cryp.im/api/v1/web/conversion");

  let headers = {
    Authorization:
      "Bearer jNB0Sqebd8sRFpngSk0rLX8sVh7tTLFMmZau6RNQAKyWkxYAUUYqbByZjVF6",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const [sent, setSent] = useState(false);

  const [data, setData] = useState({
    flow_hash: "6190be7ab827800024",
    landing: "Bitcoin Profit Page",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    ip: "92.168.1.15",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(
      url,
      {
        flow_hash: data.flow_hash,
        landing: data.landing,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        ip: data.ip,
      },
      {
        headers: headers,
      }
    ).then((res) => {
      console.log(res.data);
      setSent(true);
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  if (!sent) {
    return (
      <div className="PostForm">
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => handle(e)}
            id="first_name"
            value={data.first_name}
            type="text"
            placeholder="first name"
          />
          <br />
          <input
            onChange={(e) => handle(e)}
            id="last_name"
            value={data.last_name}
            type="text"
            placeholder="last name"
          />
          <br />
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            type="email"
            placeholder="email"
          />
          <br />
          <input
            onChange={(e) => handle(e)}
            id="phone"
            value={data.phone}
            type="tel"
            placeholder="phone"
          />
          <br />
          <input
            onChange={(e) => handle(e)}
            id="date"
            value={data.date}
            type="date"
            placeholder="date"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <Router>
        <Navigate to="/redirected" />
      </Router>
    );
  }
}

export default PostForm;
