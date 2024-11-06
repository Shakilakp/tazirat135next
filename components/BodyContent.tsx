import React, { useEffect, useRef } from "react";
//import "BodyContent.css"; // Import the CSS file if styles are separated
//import dynamic from "next/dynamic";
//import "@lordicon/lord-icon-element"; // Import Lord Icon if using icons
//const LordIcon = dynamic(() => import("@lordicon/react"), { ssr: false });
//import { Player } from "@lordicon/react";
//const Player = dynamic(() => import('@lordicon/react').then((mod) => mod.Player), { ssr: false });

const ICON1 = "/LordIcon/Complaint.json";
const ICON2 = "/LordIcon/Folder.json";

const BodyContent: React.FC = () => {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  //  const playerRef = useRef<Player>(null); // Ref for the Lordicon player

  return (
    <div>
      <div style={{ marginTop: "5px" }} id="basecontext">
        <div className="card-body p-5">
          <div
            className="row align-items-center justify-content-between"
            style={{ textAlign: "justify", padding: "5px" }}
          >
            <div className="row">
              <div className="col-lg-6 col-sm-12" style={{ padding: "8px" }}>
                <h4 className="changefont lh-base lh-sm lh-lg">
                  به منظور تسريع در رسيدگي به شکايات مردمي از تخلفات صنفي و با
                  هدف کاهش مراجعات مردمي و پاسخگويي به تقاضاهاي مطروحه در اين
                  زمينه، سامانه ميز خدمت الکترونيک سازمان تعزيرات حکومتي (135)
                  طراحي و مورد بهره برداري قرار گرفت.
                </h4>
                <h4 className="changefont lh-base lh-sm lh-lg">
                  يکي از قابليت هاي اين سامانه دريافت شکايات با موضوع :
                  <b style={{ color: "red" }}>
                    گرانفروشي، کم فروشي، تقلب،عدم درج قيمت، اختفاء و امتناع از
                    عرضه کالا، عرضه خارج از شبکه، فروش اجباري، عدم رعايت ضوابط و
                    مقررات بهداشتي
                    &nbsp;</b>
                  مي باشد که بصورت برخط ثبت و تمامي مراحل رسيدگي تا صدور حکم از
                  طريق ارسال پيامک به اطلاع شاکي خواهد رسيد.
                </h4>
              </div>
              <div className="col-lg-6 col-sm-12">
                <video
                  ref={videoPlayer}
                  controls
                  loop
                  poster="/view-img.png"
                  width="100%"
                  height="auto"
                >
                  <source src="/taziratvideo.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "100px" }}>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="custom-tooltip">
              <a href="https://desk.tazirat135.ir/login">
                <div className="grid-item">
                  <div className="box-content">
                    {/* <Player
                    icon={ICON1}
                    colors="primary:#2a2b52,secondary:#c32939"
                    size={70}
                  /> */}
                    <h3 className="changefont">ثبت شکوائیه</h3>
                  </div>
                </div>
              </a>
              <div className="tooltip-content">
                پس از انجام ثبت نام در سامانه، به‌منظور ثبت شکوائیه و رسیدگی در
                شعب تعزیرات در خصوص 8 تخلف
                <b> &nbsp;
                  گران‌فروشی، تقلب، کم‌فروشی، عدم درج قیمت، فروش اجباری کالا،
                  عرضه خارج از شبکه، اخفاء و امتناع از عرضه کالا، عدم رعایت
                  ضوابط و مقررات بهداشتی
                  &nbsp; </b>
                از این بخش اقدام نمائید
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="custom-tooltip">
              <a href="https://desk.tazirat135.ir/login">
                <div className="grid-item">
                  <div className="box-content">
                    {/* <Player
                    icon={ICON1}
                    colors="primary:#2a2b52,secondary:#c32939"
                    size={70}
                  /> */}
                    <h3 className="changefont">پیگیری شکوائیه</h3>
                  </div>
                </div>
              </a>
              <div className="tooltip-content">
                به‌منظور پیگیری شکوائیه از این بخش اقدام نمایید
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            font-family: "Roboto", sans-serif;
            text-align: center;
            background: #f1f1f1;
          }
          p,
          h1,
          h2,
          h3,
          h4,
          b {
            font-family: "Shabnam";
            text-align: justify;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .grid-item {
            background-color: #b8b9d5;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(128, 128, 128, 0.5);
            transition: box-shadow 0.3 ease;
            text-align: center;
            margin: 5px;
            cursor: pointer;
          }

          .grid-item:hover {
            box-shadow: 0px 8px 15px rgba(29, 178, 247, 0.8);
          }

          .box-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .grid-item:hover {
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
          }

          @media screen and (max-width: 767px) {
            .changefont {
              font-size: 0.9rem !important;
            }
          }

          @media screen {
            .changefont {
              font-size: calc(10px + 0.390625vw);
            }
          }

          b {
            color: red !important;
          }

          .custom-tooltip {
            position: relative;
            cursor: pointer;
          }

          .custom-tooltip .tooltip-content {
            font-size: smaller;
            visibility: hidden;
            width: 300px; /* Adjust width as needed */
            background-color: rgb(22, 22, 24);
            color: white;
            text-align: justify;
            text-align-last: center;
            border-radius: 5px;
            padding: 7px;
            position: absolute;
            z-index: 1;
            bottom: 105%;
            left: 50%;
            margin-left: -150px;
            opacity: 0;
            transition: opacity 0.3s;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }

          .custom-tooltip:hover .tooltip-content {
            visibility: visible;
            opacity: 1;
          }

          .tooltip-content b {
            color: red;
          }

          .custom-tooltip .tooltip-content::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: rgb(22, 22, 24) transparent transparent transparent;
          }
        `}
      </style>
    </div>
  );
};

export default BodyContent;
