import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">

    
    <div className="container">
        <div className="row">

                {/*company info*/}
                <div className="column">
                    <h4>OM Tour & Travel</h4>
               
                <ul>
                    <li><a href ="#">About us</a></li>
                    <li><a href ="#">Blog</a></li>
                    <li><a href ="#">Gallery</a></li>
                    <li><a href ="#">Contact us</a></li>

                </ul>
                </div>

                {/*popular destination by states*/}
                <div className="column">
                    <h4>Destination</h4>
                    <ul>
                      <li><a href ="#">kerala</a></li>
                      <li><a href ="#">jammu & kasmir</a></li>
                      <li><a href ="#">Ladakh</a></li>
                      <li><a href ="#">Masoorie</a></li>  
                    </ul>
                </div>

                {/*Quick Links */}
                <div className="column">
                    <h4>Quick Links</h4>
                    <ul>
                    <li><a href ="#">Enquiry Now</a></li>
                    <li><a href ="#">Holiday Packages</a></li>
                    <li><a href ="#">Cruise Holidays</a></li>
                    <li><a href ="#">Wildlife Tours</a></li>
                    </ul>
                </div>

                
        </div>
      
    </div>
    </footer>
  )
}

export default Footer
