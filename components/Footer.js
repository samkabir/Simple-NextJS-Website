import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
      return (
            <nav className={footerStyles.nav}>
                  <h5>Copyright © Samiul Kabir 2022</h5>
            </nav>
      );
};

export default Footer;