import React, { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";

const Footer: React.FC = () => {
  const [onlineUserCount, setOnlineUserCount] = useState<string>("");
  const [todayUserCount, setTodayUserCount] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  const [browserInfo, setBrowserInfo] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const date = new Date().toLocaleDateString("fa-IR-u-nu-latn", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setCurrentDate(date);

    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      if (userAgent.includes("Edg")) return "Microsoft Edge";
      if (userAgent.includes("Chrome")) return "Chrome";
      if (userAgent.includes("Firefox")) return "Firefox";
      if (userAgent.includes("Safari")) return "Safari";
      if (userAgent.includes("Opera")) return "Opera";
      if (userAgent.includes("Trident") || userAgent.includes("MSIE"))
        return "Internet Explorer";
      return "Unknown";
    };

    setBrowserInfo(`${detectBrowser()} : مرورگر شما`);

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(`ادرس آی پی : ${data.ip}`);
        // Placeholder for async functions GetOnlineUser and AddOnlineUser
        GetOnlineUser();
        AddOnlineUser(data.ip, detectBrowser());
      })
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  const GetOnlineUser = async () => {
    try {
      const response = await fetch(`https//test.ir/api/user/getUserCount`);
      const result = await response.json();
      setOnlineUserCount(`کاربران آنلاین : ${result.onlineUserCount}`);
      setTodayUserCount(`بازدید امروز : ${result.todayUserCount}`);
    } catch (error) {
      console.error("Error fetching online users:", error);
    }
  };

  const AddOnlineUser = async (ip: string, browser: string) => {
    const uniqueClientId = Date.now().toString(36);
    const response = JSON.stringify({
      ip,
      date: currentDate,
      browser,
      uniqueClientId,
    });

    try {
      await fetch(`https//test.ir/api/user/adduser`, {
        method: "POST",
        body: response,
      });
    } catch (error) {
      console.error("Error adding online user:", error);
    }
  };

  return (
      <footer className={styles.footer}
        style={{
          backgroundColor: "#2a2b52",
          padding: "5px",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
        }}
        
      >
        <div id="snavAccordion2">
          <div className="row justify-content-md-center">
            <div className="col-md-auto small" style={{ color: "white" }}>
              {onlineUserCount}
            </div>
            <div className="col-md-auto small" style={{ color: "white" }}>
              {todayUserCount}
            </div>
            <div className="col-md-auto small" style={{ color: "white" }}>
              {ipAddress}
            </div>
            <div className="col-md-auto small" style={{ color: "white" }}>
              کشور شما :ایران
            </div>
            <div className="col-md-auto small" style={{ color: "white" }}>
              {browserInfo}
            </div>
            <div className="col-md-auto small" style={{ color: "white" }}>
              تاریخ آخرین به روز رسانی : {currentDate}
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{ textAlign: "center", color: "white" }}
            >
              تمامی حقوق مادی و معنوی این درگاه متعلق به سازمان تعزیرات حکومتی
              می باشد
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
