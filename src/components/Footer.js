import React, { Component } from 'react';

import facebook from './icons/facebook-logo.png';
import twitter from './icons/twitter.png';
import instagram from './icons/instagram.png';
import youtube from './icons/youtube.png';

import "../css/footer.css"

class Footer extends Component{

    getYear = () => {
        return new Date().getFullYear();
    }

    render(){
        return(
            <footer>
            <div className="container">
              <div className="row pt-5 text-center align-self-center">
                {/* About us */}
                <div className="col-4">
                  <h5 className="footerTitle">About Us</h5>
                  <p className="footerText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>
                {/* Newsletter */}
                <div className="col-4">
                  <h5 className="footerTitle">Newsletter Signup</h5>
                  <p className="footerText">Sign up for email updates and promotions</p>
                  <input className="footerInput p-2" type="email" placeholder="Email address"></input>
                  <button className="buttonFooter btn-outline-dark btn-block mt-2 p-2">Subscribe</button>
                </div>
                {/* Icons */}
                <div className="col-2">
                  <h5 className="footerTitle ml-3">Social Media</h5>
                  <div className="row mt-2">
                    <div className="col-1 mx-auto">
                      <img src={facebook} className="footerIcon" alt="facebook-logo"></img>
                    </div>
                    <div className="col-1 mx-auto">
                      <img src={twitter} className="footerIcon" alt='twitter-logo'></img>
                    </div>
                    <div className="col-1 mx-auto">
                      <img src={instagram} className="footerIcon" alt='instagram-logo'></img>
                    </div>
                    <div className="col-1 mx-auto">
                      <img src={youtube} className="footerIcon" alt='youtube-logo'></img>
                    </div>
                  </div>
                </div>
                {/* Copyright */}
                <div className="col-12 text-center">
                    <p className="footerText mt-4">© {this.getYear()} essence.com</p>
                </div>
              </div>
            </div>
          </footer>  
        )
    }
}

export default Footer;