import React from 'react';

function Home() {
  return (
    <div
      className="d-flex flex-column vh-100"
      style={{ backgroundColor: "#eff1f3" }}
    >
      <div className="text-center">
        <h1 className="display-2 mb-4" style={{fontWeight:"700",marginTop:"120px" }}>Revolutionize Your Inventory Management</h1>
        <h3 className>Track, manage and optimize your stock in real-time</h3>
        <button className="btn" style={{marginRight: "20px",marginTop:"50px", backgroundColor:"#2e4a58ff", color:"#eff1f3", width:"20vh", height:"6vh", fontSize:"17px"}}>Start Free Trail</button>
        <button className="btn" style={{marginTop:"50px", backgroundColor:"#2e4a58ff", color:"#eff1f3", width:"20vh", height:"6vh", fontSize:"17px"}}>Watch Demo</button>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Home;
