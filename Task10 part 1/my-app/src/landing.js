import React, { Component } from "react";



class Landing extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <img src="./images/logo.png" width="100" alt="logo" />
            <div>
              <ul>
                <li>THIS IS THE LANDING PAGE FOR THE COMPANY</li>
               
              </ul>
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>kindself.</span> <br /> where we reinvent <br />
            the meaning of selfcare
          </div>

          <img src="./images/leaf.png" width="520" alt="leaf" />
        </section>
      </div>
    );
  }
}

export default Landing;