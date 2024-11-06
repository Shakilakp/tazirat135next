import React, { useState } from "react";

const Accessablity: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isGray, setIsGray] = useState(false);
  const [fontSizeIndex, setFontSizeIndex] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isNightMode, setIsNightMode] = useState(true);

  const colors = ["blue", "green", "purple", "brown", "orange"];

  const changeColor = () => {
    const currentColor = colors[colorIndex];
    document.querySelectorAll(".changefont").forEach((element) => {
      (element as HTMLElement).style.color = currentColor;
    });
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const toggleGrayPage = () => {
    const backgroundSite = document.getElementById("backgroundSite");
    if (backgroundSite) {
      backgroundSite.style.filter = isGray ? "" : "grayscale(100%)";
      setIsGray(!isGray);
    }
  };

  const changeFontSize = () => {
    const sizes = ["1rem", "1.2rem", "1.4rem", "1.6rem", "1.8rem"];
    document.querySelectorAll(".changefont").forEach((element) => {
      (element as HTMLElement).style.fontSize =
        sizes[fontSizeIndex] + " !important";
    });
    setFontSizeIndex((fontSizeIndex + 1) % sizes.length);
  };

  const changeZoomLevel = () => {
    const bodyPage = document.getElementById("bodypage");
    if (bodyPage) {
      const zoomLevels = [1, 1.1, 1.2, 1.3, 1.4];
      bodyPage.style.zoom = `${zoomLevels[zoomLevel]}`;
      setZoomLevel((zoomLevel + 1) % zoomLevels.length);
    }
  };

  const toggleNightMode = () => {
    const pageBody = document.getElementById("bodypage");
    if (pageBody) {
      pageBody.style.backgroundColor = isNightMode ? "#212529" : "#fff";
      setIsNightMode(!isNightMode);
    }
  };

  const resetAll = () => {
    setColorIndex(0);
    setIsGray(false);
    setFontSizeIndex(1);
    setZoomLevel(1);
    setIsNightMode(true);

    // Reset styles
    const bodyPage = document.getElementById("bodypage");
    if (bodyPage) {
      bodyPage.style.filter = "";
      bodyPage.style.zoom = "1";
      bodyPage.style.backgroundColor = "#fff";
    }
  };

  return (
    <div>
      <div className="floating-container" style={{ bottom: "100px" }}>
        <div className="floating-button">
          <i
            className="bx bx-handicap bx-md"
            style={{ paddingTop: "12px" }}
          ></i>
        </div>
        <div className="element-container">
          <button
            onClick={changeColor}
            className="float-element"
            style={{ backgroundColor: "#2a2b52" }}
          >
            <i className="bx bx-palette"></i>
          </button>
          <button
            onClick={toggleGrayPage}
            className="float-element"
            style={{ backgroundColor: "#2a2b52" }}
          >
            <i className="bx bx-adjust"></i>
          </button>
          <button
            onClick={changeZoomLevel}
            className="float-element"
            style={{ backgroundColor: "#2a2b52" }}
          >
            <i className="bx bx-zoom-in"></i>
          </button>
          <button
            onClick={changeFontSize}
            className="float-element"
            style={{ backgroundColor: "#2a2b52" }}
          >
            <i className="bx bx-font-size"></i>
          </button>
          <button
            onClick={toggleNightMode}
            className="float-element"
            style={{ backgroundColor: "#2a2b52" }}
          >
            <i className="bx bx-moon"></i>
          </button>
          <button
            onClick={resetAll}
            className="float-element"
            style={{ backgroundColor: "red" }}
          >
            <i className="bx bx-revision"></i>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .graypage {
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
          }

          @import url("https://fonts.googleapis.com/css?family=Roboto");
          @-webkit-keyframes come-in {
            0% {
              -webkit-transform: translatey(100px);
              transform: translatey(100px);
              opacity: 0;
            }
            30% {
              -webkit-transform: translateX(-50px) scale(0.4);
              transform: translateX(-50px) scale(0.4);
            }
            70% {
              -webkit-transform: translateX(0px) scale(1.2);
              transform: translateX(0px) scale(1.2);
            }
            100% {
              -webkit-transform: translatey(0px) scale(1);
              transform: translatey(0px) scale(1);
              opacity: 1;
            }
          }
          @keyframes come-in {
            0% {
              -webkit-transform: translatey(100px);
              transform: translatey(100px);
              opacity: 0;
            }
            30% {
              -webkit-transform: translateX(-50px) scale(0.4);
              transform: translateX(-50px) scale(0.4);
            }
            70% {
              -webkit-transform: translateX(0px) scale(1.2);
              transform: translateX(0px) scale(1.2);
            }
            100% {
              -webkit-transform: translatey(0px) scale(1);
              transform: translatey(0px) scale(1);
              opacity: 1;
            }
          }
          * {
            margin: 0;
            padding: 0;
          }

          html,
          body {
            background: #eaedf2;
            font-family: "Roboto", sans-serif;
          }

          .floating-container {
            position: fixed;
            width: 80px;
            right: auto;
            margin: -7px;
          }

          .floating-container:hover {
            height: 470px;
          }
          .floating-container:hover .floating-button {
            box-shadow: 0 10px 25px rgba(44, 179, 240, 0.6);
            -webkit-transform: translatey(5px);
            transform: translatey(5px);
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }
          .floating-container:hover
            .element-container
            .float-element:nth-child(1) {
            -webkit-animation: come-in 0.4s forwards 0.2s;
            animation: come-in 0.4s forwards 0.2s;
          }
          .floating-container:hover
            .element-container
            .float-element:nth-child(2) {
            -webkit-animation: come-in 0.4s forwards 0.2s;
            animation: come-in 0.4s forwards 0.2s;
          }
          .floating-container:hover
            .element-container
            .float-element:nth-child(3) {
            -webkit-animation: come-in 0.4s forwards 0.2s;
            animation: come-in 0.4s forwards 0.2s;
          }
          .floating-container:hover
            .element-container
            .float-element:nth-child(4) {
            -webkit-animation: come-in 0.4s forwards 0.2s;
            animation: come-in 0.4s forwards 0.2s;
          }
          .floating-container:hover
            .element-container
            .float-element:nth-child(5) {
            -webkit-animation: come-in 0.4s forwards 0.2s;
            animation: come-in 0.4s forwards 0.2s;
          }
          .floating-container:hover
            .element-container
            .float-element:nth-child(6) {
            -webkit-animation: come-in 0.4s forwards 0.2s;
            animation: come-in 0.4s forwards 0.2s;
          }

          .floating-container .floating-button {
            position: absolute;
            width: 65px;
            height: 65px;
            background: #2a2b52;
            bottom: 0;
            border-radius: 50%;
            left: 0;
            right: 0;
            margin: auto;
            color: white;
            line-height: 65px;
            text-align: center;
            font-size: 23px;
            z-index: 100;
            box-shadow: 0 10px 25px -5px rgba(44, 179, 240, 0.6);
            cursor: pointer;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }
          .floating-container .float-element {
            position: relative;
            display: block;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin: 15px auto;
            color: white;
            font-weight: 500;
            text-align: center;
            line-height: 50px;
            z-index: 0;
            opacity: 0;
            -webkit-transform: translateY(100px);
            transform: translateY(100px);
          }
          .floating-container .float-element .material-icons {
            vertical-align: middle;
            font-size: 16px;
          }
          .floating-container .float-element:nth-child(1) {
            background: #42a5f5;
            box-shadow: 0 20px 20px -10px rgba(66, 165, 245, 0.5);
          }
          .floating-container .float-element:nth-child(2) {
            background: #4caf50;
            box-shadow: 0 20px 20px -10px rgba(76, 175, 80, 0.5);
          }
          .floating-container .float-element:nth-child(3) {
            background: #ff9800;
            box-shadow: 0 20px 20px -10px rgba(255, 152, 0, 0.5);
          }
          .floating-container .float-element:nth-child(4) {
            background: #ff9800;
            box-shadow: 0 20px 20px -10px rgba(255, 152, 0, 0.5);
          }
          .floating-container .float-element:nth-child(5) {
            background: #ff9800;
            box-shadow: 0 20px 20px -10px rgba(255, 152, 0, 0.5);
          }
          .floating-container .float-element:nth-child(6) {
            background: #ff9800;
            box-shadow: 0 20px 20px -10px rgba(255, 152, 0, 0.5);
          }

          @media only screen and (max-width: 800px) {
            .floating-container:hover {
              height: 350px;
            }
            .floating-container .float-element {
              position: relative;
              display: block;
              border-radius: 50%;
              width: 37px;
              height: 40px;
              margin: 15px auto;
              color: white;
              font-weight: 500;
              text-align: center;
              line-height: 50px;
              z-index: 0;
              opacity: 0;
              -webkit-transform: translateY(100px);
              transform: translateY(100px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Accessablity;
