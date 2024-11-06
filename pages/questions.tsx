import React from "react";
import MainLayout from "../layouts/main";
import QandA from "../components/QandA";

const Questions: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <h1
          className="changefont" // Use imported style classes if needed
          style={{
            textAlign: "center",
            color: "#c32c3c",
            fontWeight: "bold",
          }}
          id="qanda"
        >
          سوالات پر تکرار
        </h1>
      </div>
      <QandA />
    </MainLayout>
  );
};

export default Questions;
