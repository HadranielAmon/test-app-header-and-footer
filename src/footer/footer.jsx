import React from "react";
import './footer.css';

const footer=()=> {
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Adom</h4>
                        <a href="/lorem lpsumissimplydummytextoftheprintingandtypesetting industry">
                            <p>Lorem lpsum is simply 
                                <p>dummy text of the printing</p> 
                                <p>and typesetting industry</p>
                               </p>
                        </a>
                    </div>
                    <div className="sb__fo0ter-links_div">
                        <h4>Policy Info</h4>
                        <a href="privacypolicy">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="termsofsale">
                            <p>Terms of sale</p>
                        </a>
                        <a href="termsofuse">
                            <p>Terms of use</p>
                        </a>
                        <a href="reportabuse">
                            <p>Report Abuse</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="aboutus">
                            <p>About us</p>
                        </a>
                        <a href="blog">
                            <p>Blog</p>
                        </a>
                        <a href="sitemap">
                            <p>Sitemap</p>
                        </a>
                        <a href="faq">
                            <p>FAQ</p>
                        </a>
                        <a href="contactus">
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Business</h4>
                        <a href="sellonshopio">
                            <p>Sell on Shopio</p>
                        </a>
                        <a href="advertiseonshopio">
                            <p>Advertise on Shopio</p>
                        </a>
                        <a href="mediaenquiries">
                            <p>Media Enquiries</p>
                        </a>
                        <a href="beanaffliate">
                            <p>Be an Affliate</p>
                        </a>
                        <a href="dealoftheday">
                            <p>Deal of the Day</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Subscribe</h4>

                    </div>

                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            Copyright {(new Date().getFullYear)} . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer;