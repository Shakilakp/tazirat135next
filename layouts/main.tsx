import React, { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import RightNav from "@/components/RightNav";
import LeftFloatingBtn from "@/components/LeftFloatingBtn";
import Accessability from "@/components/Accessablity";
import Head from "next/head";


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ip, setIp] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };
    fetchIp();

    const getOnlineUsers = async () => {
      try {
        const response = await fetch("/api/user/getUserCount");
        const result = await response.json();
        setOnlineUsers(result.onlineUserCount);
      } catch (error) {
        console.error("Error fetching online users:", error);
      }
    };
    getOnlineUsers();
  }, []);

  return (
    <div id="bodypage">
      <Head>
        <title>میز خدمت الکترونیک تعزیرات حکومتی</title>
        <meta
          name="description"
          content="سامانه میز خدمت الکترونیک سازمان تعزیرات حکومتی"
        />
        <meta name="keywords" content="سامانه میز خدمت, میز خدمت الکترونیک" />
      </Head>
      <HeaderNav />
      
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <RightNav />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-xl is-rtl" id="basecontext">
              {children}
            </div>
            <div
              className="is-rtl"
              style={{ marginRight: "30px", marginTop: "20px" }}
            >
              <Accessability />
            </div>
            <Footer />
          </main>
        </div>
      </div>
      <LeftFloatingBtn />
    </div>
  );
};

export default MainLayout;
