import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import './index.css';

function App() {
  return (
    <div>
        <table id="header" border={0} width="100%" cellPadding={0} cellSpacing={0} bgcolor="#8F8E86">
          <tbody><tr>
              <td>
                <table border={0} cellPadding={15} cellSpacing={0} width="90%" align="center">
                  <tbody><tr>
                      <td>
                      </td>
                      <td>
                        <font face="Times New Roman" size={6}>
                          <b>Chandeep Kaushitha</b>
                        </font>
                      </td>
                      <td width="15%">
                      </td>
                      <td>
                        <a href="#home" style={{textDecoration: 'none'}}>
                          <font face="Times New Roman" size={5} color="black">
                            Home
                          </font>
                        </a>
                      </td>
                      <td>
                        |
                      </td>
                      <td>
                        <a href="#about" style={{textDecoration: 'none'}}>
                          <font face="Times New Roman" size={5} color="black">
                            About
                          </font>
                        </a>
                      </td>
                      <td>
                        |
                      </td>
                      <td>
                        <a href="#education" style={{textDecoration: 'none'}}>
                          <font face="Times New Roman" size={5} color="black">
                            Education
                          </font>
                        </a>
                      </td>
                      <td>
                        |
                      </td>
                      <td>
                        <a href="#contact" style={{textDecoration: 'none'}}>
                          <font face="Times New Roman" size={5} color="black">
                            Contact
                          </font>
                        </a>
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table>
        <table id="home" border={1} width="100%" cellPadding={20} cellSpacing={0} bgcolor="black">
          <tbody><tr>
              <td>
                <table border={0} cellPadding={15} cellSpacing={0} width="90%" align="center">
                  <tbody><tr>
                      <td align="center">
                        <h3>
                          <font face="Copperplate" size={6} color="#ffffff">
                            Hello, I'm Chandeep <br />
                            Software Engineer | Freelancer
                          </font>
                        </h3>
                        <h2>
                          <font face="Times New Roman" size={6} color="#8F8E86">
                          </font>
                        </h2>
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table>
        <table id="about" border={0} width="100%" cellPadding={0} cellSpacing={0} bgcolor="black">
          <tbody><tr>
              <td>
                <table border={0} cellPadding={15} cellSpacing={0} width="80%" align="center">
                  <tbody><tr>
                      <td height={180} align="center" valign="middle" colSpan={2}>
                        <font face="Times New Roman" size={7} color="#8F8E86">
                          About Me
                        </font>
                        <hr color="#8F8E86" width={90} />
                      </td>
                    </tr>
                    <tr>
                      <td width="40%">
                        <img src={require('./img/image1.jpg')} />
                      </td>
                      <td width="60%">
                        <font face="Rubik,sans-serif!important" size={4} color="white">
                          I'm Chandeep Kaushitha, an undergraduate of the University of Colombo School of Computing.
                          <hr color="black" />
                          I'm a Freelancer Front-end Developer. I'm from Sri Lanka. I code and create web elements for amazing people around the world. I like to work with new people. New people new Experiences.
                          <hr color="black" />
                          Name : Chandeep Kaushitha <br />
                          Date of Birth : 20<sup>th</sup> June 2000 <br />
                          Age : 22y/o <br />
                          Address : Galle, Sri Lanka <br />
                          University : University of Colombo <br />
                          YouTube : <a href="https://www.youtube.com/channel/UCkfseHHHal7cKZHor6yTxBg">Chandeep Kaushitha</a>
                        </font>
                        <br />
                        <hr />
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table>
        <table id="education" border={0} width="100%" cellPadding={0} cellSpacing={0} bgcolor="black">
          <tbody><tr>
              <td>
                <table border={0} cellPadding={15} cellSpacing={0} width="80%" align="center">
                  <tbody><tr>
                      <td height={180} align="center" valign="middle">
                        <font face="Times New Roman" size={7} color="#8F8E86">
                          Education
                          <hr color="#8F8E86" width={100} />
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font face="Rubik,sans-serif!important" size={4} color="white">
                        </font><ul><font face="Rubik,sans-serif!important" size={4} color="white">
                            <li>
                              <b>Higher Education</b>
                              <ul>
                                <li>
                                  Bsc. in Information Systems(Reading) (UCSC)
                                </li>
                                <li>
                                  Dip. In Computer Literacy (OUSL)
                                </li>
                                <li>
                                  CMJD (IJSE)
                                </li>
                              </ul>
                            </li>
                          </font><li><font face="Rubik,sans-serif!important" size={4} color="white">
                              <hr color="black" />
                              <hr color="black" />
                              <hr color="black" />
                              <b>School Education</b>
                              <ul>
                                <li>
                                  G.C.E. (A/L) : 1A Pass &amp; 2C Passes in Physical Science Stream
                                </li>
                                <li>
                                  G.C.E. (O/L) : 9A Passes
                                </li>
                              </ul>
                              <hr />
                            </font>
                          </li></ul></td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table>
        <table id="contact" border={0} width="100%" cellPadding={0} cellSpacing={0} bgcolor="black">
          <tbody><tr>
              <td>
                <table border={0} cellPadding={15} cellSpacing={0} width="80%" align="center">
                  <tbody><tr>
                      <td height={180} align="center" valign="middle" colSpan={2}>
                        <font face="Times New Roman" size={7} color="#8F8E86">
                          Contact
                        </font>
                        <hr color="#8F8E86" width={90} />
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <table border={0} width="50%" cellPadding={15} cellSpacing={0} align="center" bgcolor="#8F8E86">
                          <tbody><tr>
                              <td width="30%">
                                <hr color="#8F8E86" />
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  Name
                                </font>
                              </td>
                              <td width="70%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  <input type="text" size={40} />
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td width="30%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  Email
                                </font>
                              </td>
                              <td width="70%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  <input type="email" size={40} />
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td width="30%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  Number
                                </font>
                              </td>
                              <td width="70%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  <input type="number" size={12} />
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td width="30%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  Message
                                </font>
                              </td>
                              <td width="70%">
                                <font face="Rubik,sans-serif!important" size={4} color="black">
                                  <textarea rows={5} cols={37} defaultValue={"                                            "} />
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td width="30%">
                              </td>
                              <td width="70%">
                                <button type="Submit">
                                  <font face="Rubik,sans-serif!important" size={4} color="black">
                                    <b>Submit</b>
                                  </font>
                                </button>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table>
        <table id="footer" border={0} width="100%" cellPadding={0} cellSpacing={0} bgcolor="black">
          <tbody><tr>
              <td>
                <table border={0} cellPadding={15} cellSpacing={0} width="90%" align="center">
                  <tbody><tr>
                      <td width="80%" valign="top" style={{ textAlign: "center" }}>
  <font face="Copperplate" color="white" size={3}>
    ©Copyright 2023 by
    ChandeepKaushitha. All rights reserved.
  </font>
</td>
                    </tr></tbody></table></td></tr></tbody></table>
                    
                    </div>
  )
}

export default App
