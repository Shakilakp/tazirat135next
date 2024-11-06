import React from "react";
import MainLayout from "@/layouts/main";
import BodyContent from "@/components/BodyContent";
import styles from "@/styles/index.module.css"

const Index: React.FC = () => {
  return (
    
    <MainLayout>
      <div
      className={styles.moarefi}
        id="moarefi"
        style={{
          backgroundColor: "#b8b9d5",
          borderRadius: "5px",
        }}
      >
        <div style={{ padding: "5px" }}>
          <h4 className="changefont" style={{ textAlign: "center" }}>
            معرفی سامانه
          </h4>
        </div>

      </div>
      <BodyContent />

    </MainLayout>
    
  );
};

export default Index;
