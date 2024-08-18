import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const creatNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    // console.log(id);
    setRoomId(id);
    toast.success("Created new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    //redirect
    navigate(`/editor/:${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    // console.log(e.code);
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/assets/viCode.png" alt="" className="logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="inputBox"
            placeholder="ENTER ROOM ID"
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinbtn" onClick={joinRoom}>
            Join
          </button>
        </div>
        <div className="creatInfo">
          <span>
            If you don't have invite then create &nbsp;
            <button onClick={creatNewRoom} className="createNewBtn">
              Create New Room
            </button>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Build with 💛 by &nbsp;{" "}
          <a href="https://github.com/vedant1003k">Coder's Vedant</a>{" "}
        </h4>
      </footer>
    </div>
  );
};

export default Home;
