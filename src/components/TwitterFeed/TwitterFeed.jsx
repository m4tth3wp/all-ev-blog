import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

function TwitterFeed() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("tweet", data => {
      setResponse(data);
      console.log(data)
    });
  }, []);

  return (
    <p>
      It's {response}
    </p>
  );
}

export default TwitterFeed;
