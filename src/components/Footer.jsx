import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = ()=>
{
    return(
        <div className="conatiner-footer">
            <div className="col">
                <h4>Company</h4>
                <p>  </p>
                <p>About Us</p>
                <p>Careers</p>
            </div>
            <div className="col">
                <h4>View website in</h4>
                <div className="col-1">
                <CheckIcon />
                
                <p>English</p>
                
                </div>
               
                
                
            </div>
            <div className="col">
                <h4>Need Help?</h4>
                <p>Vist Help center</p>
                <p>Share Feedback</p>
            </div>
            <div className="col">
                <h4>Connect With Us</h4>
                    <div className="col-1">
                    <FacebookIcon />
                
                    <TwitterIcon />
                

                    </div>
                
            </div>
        </div>
    );
}

export default Footer;