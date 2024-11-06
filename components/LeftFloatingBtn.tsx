import React from "react";

const LeftFloatingBtn: React.FC = () => {
  return (
    <div>
      <div className="floating">
        <div
          className="row"
          style={{ fontSize: "smaller", paddingBottom: "85px" }}
        >
          <a
            href="https://desk.tazirat135.ir/login"
            className="rotate-item"
            style={{
              backgroundColor: "#C32939",
              color: "white",
              borderRadius: "8px 8px 0px 0px",
              margin: "2px",
              padding: "10px",
              textAlign: "center",
            }}
            id="FloatingBtn1"
          >
            # شکوائیه
          </a>
        </div>
        <div
          className="row"
          style={{ fontSize: "smaller", paddingBottom: "85px" }}
        >
          <a
            href="https://desk.tazirat135.ir/login"
            className="rotate-item"
            style={{
              backgroundColor: "#2A2B52",
              color: "white",
              borderRadius: "8px 8px 0px 0px",
              margin: "2px",
              padding: "10px",
              textAlign: "center",
            }}
            id="FloatingBtn2"
          >
            # پرونده
          </a>
        </div>
        <div
          className="row"
          style={{ fontSize: "smaller", paddingBottom: "85px" }}
        >
          <a
            href="https://desk.tazirat135.ir/login"
            className="rotate-item"
            style={{
              backgroundColor: "#C32939",
              color: "white",
              borderRadius: "8px 8px 0px 0px",
              margin: "2px",
              padding: "10px",
              textAlign: "center",
            }}
            id="FloatingBtn3"
          >
            # تجدید نظرخواهی
          </a>
        </div>
      </div>
      <style jsx>{`
        .floating {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
        }

        .rotate-item {
          display: inline-block;
          transform: rotate(90deg);
          transform-origin: left center;
          margin-bottom: 10px;
          white-space: nowrap;
          padding-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default LeftFloatingBtn;
