import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-inner">
                {/* <div class="location"><i class="fas fa-globe fa-1x"></i> English (US)</div> */}
                <ul>
                    <li><i class="fas fa-globe fa-1x"></i> English (US)</li>
                    <li><a href="#">Contact us: customer@inhauzejobs.com</a></li>
                    <li><a href="#">HQ: San Jose, CA</a></li>
                    <li><a href="#">Privacy & cookies</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Our partners</a></li>
                    <li><a href="#">Get involved</a></li>
                    <li><a href="#">&copy; InHauze</a></li>
                </ul>
            </div>
	    </footer>
    );
};

export default Footer;
