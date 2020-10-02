import React from 'react';
import { CityLogo } from '../ui/icons';
const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    link={true}
                    linkTo="/"
                    width="70px"
                    height="70px"
                />
            </div>
        </footer>
    );
};

export default Footer;