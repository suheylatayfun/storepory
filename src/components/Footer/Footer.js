import React from 'react';
import "../../styles/Footer.css"

function Footer(){
    let currentTimeLine = new Date();
    let currentYear =currentTimeLine.getFullYear()
    return(
        <div className="footer">
            <p>	&copy;{currentYear}   Sto-repo-ry</p>
        </div>
    )
}
export default Footer;