import React, { useState } from "react";
import Client from "../Components/Client";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Vedant k" },
    { socketId: 2, username: "jHON dONk" },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImg" src="/assets/viCode.png" alt="" />
          </div>
          <h3>Connected</h3>
          <div className="clientList">
            {clients.map((client, index) => (
              <Client key={index} username={client.username} />
            ))}
          </div>
        </div>
      </div>
      <div className="editiorWrap">Editor goes here...</div>
    </div>
  );
};

export default EditorPage;
