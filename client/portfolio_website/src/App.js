import React from 'react';
import './App.css';
import gif1 from './media/sample.gif';
import ProjectCards from './components/ProjectCards';

function App() {
  return (
    <div className="App">
      <div style={gifContainer} >
          <img src={gif1} style={gif} />
          {/* <div style={infoBox}>
              <div style={{fontSize : "10vw"}}>Thomas Reilly</div>
              <div style={{fontSize : "3vw"}}>Software Engineer</div>
              <div>

              </div>
              <div style={viewProjBtn}>View Projects</div>
          </div> */}
      </div>
      <div className="section">
          <div className="head-text">
              <h2 className="gradient-color">Project Portfolio</h2>
              <ProjectCards />
          </div>
      </div>

    </div>
  );
}

const gifContainer = {
    position : "relative",
}

const gif = {
    width : "100%",
    position : "relative",
    top : "-10px",
    transform: "skewY(-2deg)",
}

const infoBox = {
    position: "absolute",
    top : "50%",
    left : "50%",
    transform: "translate(-50%, -50%)",
    width : "100%",
    /* font-weight: bold; */
    /* color : #ff8c1a; */
    color : "#fff",
    textAlign: "center",

}

const viewProjBtn = {
    border : "1px solid #fff",
    padding : "1vw",
    borderRadius : "5px",
    maxWidth : "20vw",
    margin : "0 auto",
    cursor : "pointer",
    fontSize : "2vw",
    marginTop : "8px",
}

export default App;
