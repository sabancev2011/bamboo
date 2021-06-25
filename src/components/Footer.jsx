import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <p className="policy">TERMS &amp; CONDITION POLICY</p>
                    <Link to='/'>
                        <img src="img/logoFooter.png" alt="Logo" />
                    </Link>
                    <p className="rights">© 2021 Bamboo All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;