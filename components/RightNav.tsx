import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Collapse } from "react-bootstrap";
//import { Player } from "@lordicon/react";

const Player = dynamic(
  () => import("@lordicon/react").then((mod) => mod.Player),
  { ssr: false }
);

const ICON1 = "./public/LordIcon/home.json";
const ICON2 = "/LordIcon/Survey.json";
const ICON3 = "/LordIcon/Articles.json";
const ICON4 = "/LordIcon/chart.json";
const ICON5 = "/LordIcon/glob.json";
const ICON6 = "/LordIcon/newspaper.json";
const ICON7 = "/LordIcon/Payment.json";

const RightNav: React.FC = () => {
  const [isMultiCollapsed, setIsMultiCollapsed] = useState(false);
  //  const playerRef = useRef<Player>(null); // Ref for the Lordicon player

  return (
    <div>
      <nav
        className="snav shadow-right snav-light changefont"
        style={{ backgroundColor: "#F1F1F1" }}
        id="rightnav"
      >
        <div className="snav-menu" style={{ marginLeft: "20px" }}>
          <div className="nav accordion" id="accordionSidenav">
            {/* Logo */}
            <div
              className="row"
              style={{ textAlign: "center", marginBottom: "50px" }}
            >
              <Link href="/">
                <Image
                  src="/img/LoginArm.png"
                  alt="تعزیرات"
                  width={200}
                  height={200}
                  style={{
                    padding: "21px 49px 15px 14px",
                    marginRight: "20px",
                  }}
                />
              </Link>
            </div>

            {/* Main Navigation Links */}
            <Link href="/" passHref legacyBehavior>
              <a
                className="nav-link pt-0 changehoverstyle borderstyle"
                style={{ marginRight: "30px", marginBottom: "10px" }}
              >
                <div className="nav-link-icon">
                  {/* <Player
                  icon={ICON1}
                  colors="primary:#2a2b52,secondary:#c32939"
                /> */}
                </div>
                <h6 className="changefont" style={{ paddingTop: "15px" }}>
                  صفحه اصلی
                </h6>
              </a>
            </Link>

            <Link href="/question" passHref legacyBehavior>
              <a
                className="nav-link changehoverstyle borderstyle"
                style={{ marginRight: "30px", marginBottom: "10px" }}
              >
                <div className="nav-link-icon">
                  {/* <Player
                  icon={ICON2}
                  colors="primary:#2a2b52,secondary:#c32939"
                /> */}
                </div>
                <h6 className="changefont">سوالات پر تکرار</h6>
              </a>
            </Link>

            {/* Multi-step Form Links */}
            <a
              className="nav-link collapsed changehoverstyle borderstyle"
              style={{ marginRight: "30px", marginBottom: "10px" }}
              onClick={() => setIsMultiCollapsed(!isMultiCollapsed)}
            >
              <div className="nav-link-icon">
                {/* <Player
                icon={ICON3}
                colors="primary:#2a2b52,secondary:#c32939"
              /> */}
              </div>
              <h6 className="changefont">پیوندها</h6>
              <div className="snav-collapse-arrow">
                <i
                  className={`bx bx-chevron-${
                    isMultiCollapsed ? "up" : "down"
                  }`}
                />
              </div>
            </a>

            {/* Collapsible Links */}
            <Collapse in={isMultiCollapsed}>
              <div id="accordionMultiPages">
                <Link
                  href="https://shafaf.tazirat.gov.ir/گزارش-عملکرد-سازمان"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="nav-link changehoverstyle borderstyle"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="nav-link-icon">
                      {/* <Player
                      icon={ICON4}
                      colors="primary:#2a2b52,secondary:#c32939"
                    /> */}
                    </div>
                    <h6 className="changefont">عملکرد سازمان</h6>
                  </a>
                </Link>

                <Link
                  href="https://shafaf.tazirat.gov.ir/راهبردها-و-روال-دستگاه"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="nav-link changehoverstyle borderstyle"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="nav-link-icon">
                      {/* <Player
                      icon={ICON5}
                      colors="primary:#2a2b52,secondary:#c32939"
                    /> */}
                    </div>
                    <h6 className="changefont">راهبرد سازمان</h6>
                  </a>
                </Link>

                <Link
                  href="https://tazirat.gov.ir/default.aspx?tabid=191126"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="nav-link changehoverstyle borderstyle"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="nav-link-icon">
                      {/* <Player
                      icon={ICON6}
                      colors="primary:#2a2b52,secondary:#c32939"
                    /> */}
                    </div>
                    <h6 className="changefont">اخبار مناقصات</h6>
                  </a>
                </Link>

                <Link
                  href="https://shafaf.tazirat.gov.ir/هزینه-کرد-سازمان"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="nav-link changehoverstyle borderstyle"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="nav-link-icon">
                      {/* <Player
                      icon={ICON7}
                      colors="primary:#2a2b52,secondary:#c32939"
                    /> */}
                    </div>
                    <h6 className="changefont">هزینه کرد سازمان</h6>
                  </a>
                </Link>
              </div>
            </Collapse>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .borderstyle {
          border-style: dashed;
          border-width: 1px 0 1px 0;
          border-color: #c32939;
        }

        .changefont {
          font-size: calc(7px + 0.390625vw) !important;
        }
      `}</style>
    </div>
  );
};

export default RightNav;
