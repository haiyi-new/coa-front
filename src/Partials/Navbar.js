import React from "react";
import logo from "../assets/images/logo.png";
import wording from "../assets/images/wording.png";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#fff" }}>
      <table
        style={{ height: "100%" }}
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr>
            <td width="90" height="80px" align="left" valign="bottom">
              <img
                src={logo}
                style={{  borderWidth: "0px" }}
                alt="Logo"
              />
            </td>
            <td height="80px" width="100%">
              <img
                className="ms-4"
                src={wording}
                style={{ width: "300px", borderWidth: "0px" }}
                alt="Wording"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table width="100%">
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <font
                className="font_titleblack"
                style={{
                  display: "inline-block",
                  width: "200px",
                  color: "#224099",
                }}
              >
                <b>Welcome</b>
              </font>
            </td>
            <td style={{ width: "300px" }} align="right">
              &nbsp;&nbsp;
            </td>
            <td align="right" valign="bottom"></td>
            <td align="right" valign="bottom">
              <a href="/" className="font_titleblack">Logout</a>
            </td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
};

export default Navbar;
