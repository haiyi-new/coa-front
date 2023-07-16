import React from 'react';
import logo from '../assets/images/logo.png';
import wording from '../assets/images/wording.png';
import styles from './Navbar.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <table
        style={{ height: '100%' }}
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
                style={{ borderWidth: '0px' }}
                alt="Logo"
              />
            </td>
            <td height="80px" width="100%">
              <img
                className="ms-4"
                src={wording}
                style={{ width: '300px', borderWidth: '0px' }}
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
              <font className={styles.fontTitleBlack}>
                <b>Welcome</b>
              </font>
            </td>
            <td style={{ width: '300px' }} align="right">
              &nbsp;&nbsp;
            </td>
            <td align="right" valign="bottom"></td>
            <td align="right" valign="bottom">
              <a href="/" className={styles.fontTitleBlack}>Logout</a>
            </td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
};

export default Navbar;
