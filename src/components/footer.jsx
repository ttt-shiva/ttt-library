import React from 'react'
import '../styles/footer.css'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links_div'>
                        <h4>For Business</h4>
                        <a href="">
                            <p>Employer</p>
                        </a>
                        <a href="/library">
                            <p>library</p>
                        </a>
                        <a href="">
                            <p>Individual</p>
                        </a>
                    </div>

                    <div className='sb_footer-links_div'>
                        <h4>Resources</h4>
                        <a href="">
                            <p>Wikipedia</p>
                        </a>
                        <a href="/library">
                            <p>Books library</p>
                        </a>
                        <a href="">
                            <p>Freepik</p>
                        </a>
                    </div>

                    <div className='sb_footer-links_div'>
                        <h4>Partners</h4>
                        <a href="/">
                            <p>ttt-library</p>
                        </a>
                    </div>


                    <div className='sb_footer-links_div'>
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/contact">
                            <p>Contact-us</p>
                        </a>
                        <a href="/library">
                            <p>library</p>
                        </a>
                    </div>

                    <div className='sb_footer-links_div'>
                        <h4>Comming soon on</h4>
                        <div className='socialmedia'>
                        <p>  <FontAwesomeIcon icon={faFacebook} size="2x" /> </p>
                            <p> <FontAwesomeIcon icon={faTwitter} size="2x" />  </p>
                            <p>  <FontAwesomeIcon icon={faLinkedin} size="2x" /> </p>
                            <p> <FontAwesomeIcon icon={faInstagram} size="2x" /> </p>

                        </div>
                    </div>
                </div>
                <hr />

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved
                        </p>
                    </div>

                    <div className='sb_footer-below-links'>
                        <a href=""><div><p>Terms & Conditions</p></div></a>
                        <a href=""><div><p>Privacy</p></div></a>
                        <a href=""><div><p>Terms & Conditions</p></div></a>
                        <a href=""><div><p>Security</p></div></a>
                        <a href=""><div><p>Cookie Declaration</p></div></a>
                    </div>

                    

                </div>

            </div>

        </div>
    )
}

export default Footer
