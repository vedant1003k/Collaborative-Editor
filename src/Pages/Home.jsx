import React from "react";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/assets/viCode.png" alt="" className="logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ENTER ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinbtn">Join</button>
        </div>
        <span className="creatInfo">
          If you don;t have invite then create &nbsp;
          <a href="" className="createNewBtn">
            new Room
          </a>
        </span>
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
