import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FaceBookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="socialmedia">
                <Instagram /> <TwitterIcon /> <FaceBookIcon /> <LinkedInIcon />
            </div>
            <p> &copy; 2021 ptpautomobile.com</p>
        </div>
    )
}

export default Footer;