import React from "react";

const HeaderNav: React.FC = () => {
  return (
    <div>
      <nav
        className="is-rtl topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light"
        id="snavAccordion"
        style={{ backgroundColor: "#2A2B52" }}
      >
        <button
          className="btn btn-icon order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
          id="sidebarToggle"
          style={{
            color: "white",
            backgroundColor: "#C32939",
            position: "fixed",
            marginRight: "5px",
          }}
        >
          <i className="bx bx-menu bx-sm"></i>
        </button>

        <a
          className="navbar-brand pe-3 ps-4 ps-lg-2"
          href="/"
          style={{ color: "white", marginRight: "50px" }}
          id="title"
        >
          میز خدمت الکترونیک سازمان تعزیرات حکومتی (نسخه آزمایشی)
        </a>

        {/* Navbar Items */}
        <ul className="navbar-nav align-items-center ms-auto">
          {/* Documentation Dropdown */}
          <li className="nav-item dropdown no-caret d-md-block me-3">
            <a
              className="nav-link dropdown-toggle changehovercolor"
              style={{
                backgroundColor: "#4B96F1",
                borderRadius: "8px 1px 8px 1px",
                paddingRight: "30px",
              }}
              id="navbarDropdownDocs"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="bx bx-help-circle"
                style={{ marginLeft: "10px", color: "white" }}
              ></i>
              <div className="fw-400" style={{ color: "white" }}>
                راهنما
              </div>
              <i
                className="bx bx-chevron-down bx-sm"
                style={{ color: "white" }}
              ></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-w15 dropdown-menu-start py-0 ms-sm-n15 ms-lg-0 o-hidden animated--fade-in-up"
              aria-labelledby="navbarDropdownDocs"
              style={{ minWidth: "12rem" }}
            >
              <a
                className="dropdown-item changehoverstyle py-2 borderstyle"
                href="/Help14030613.pdf"
                target="_blank"
              >
                <div className="changefont" style={{ fontSize: "larger" }}>
                  <i
                    className="bx bx-message-square-edit"
                    style={{ paddingLeft: "5px", color: "#C32939" }}
                  ></i>
                  راهنمای متنی
                </div>
              </a>
              <div className="dropdown-divider m-0"></div>
              <a
                className="dropdown-item changehoverstyle"
                href="https://www.aparat.com/v/q26m8ev"
                target="_blank"
              >
                <div className="changefont" style={{ fontSize: "larger" }}>
                  <i
                    className="bx bx-play-circle"
                    style={{ paddingLeft: "5px", color: "#C32939" }}
                  ></i>
                  راهنمای تصویری
                </div>
              </a>
            </div>
          </li>

          {/* Login Dropdown */}
          <li className="nav-item dropdown no-caret d-md-block me-3">
            <a
              className="nav-link dropdown-toggle changehovercolor"
              style={{
                backgroundColor: "#4B96F1",
                borderRadius: "8px 1px 8px 1px",
                paddingRight: "30px",
              }}
              id="loginbtn"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="bx bx-user"
                style={{ marginLeft: "10px", color: "white" }}
              ></i>
              <div className="fw-400" style={{ color: "white" }}>
                ورود
              </div>
              <i
                className="bx bx-chevron-down bx-sm"
                style={{ color: "white" }}
              ></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-w15 dropdown-menu-start py-0 ms-sm-n15 ms-lg-0 o-hidden animated--fade-in-up"
              aria-labelledby="loginbtn"
              style={{ minWidth: "12rem" }}
            >
              <a
                className="dropdown-item changehoverstyle py-2 borderstyle"
                href="https://desk.tazirat135.ir/login"
              >
                <div style={{ fontSize: "larger" }} className="changefont">
                  <i
                    className="bx bx-log-in"
                    style={{ paddingLeft: "5px", color: "#C32939" }}
                  ></i>
                  ورود
                </div>
              </a>
              <div className="dropdown-divider m-0"></div>
              <a
                className="dropdown-item changehoverstyle"
                href="https://desk.tazirat135.ir/register"
              >
                <div style={{ fontSize: "larger" }} className="changefont">
                  <i
                    className="bx bx-pen"
                    style={{ paddingLeft: "5px", color: "#C32939" }}
                  ></i>
                  ثبت نام
                </div>
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .borderstyle {
          border-style: dashed;
          border-width: 1px 0 1px 0;
          border-color: #c32939;
        }

        @media only screen and (max-width: 800px) {
          #title {
            display: none;
          }
        }

        @media screen {
          .changefont {
            font-size: calc(10px + 0.390625vw) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderNav;
