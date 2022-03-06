import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
      return (
            <nav className={navStyles.nav}>
                  <ul>
                        <li>
                              <Link href='/'>Home</Link>    
                        </li>
                        <li>
                              <Link href='/about'>About</Link>    
                        </li>
                        <li>
                              <Link href='/cars'>Cars</Link>    
                        </li>
                        <li>
                              <Link href='/uploadCars'>UploadCar</Link>    
                        </li>
                        <li>
                              <Link href='/recognizeCar'> Car</Link>    
                        </li>
                  </ul>
            </nav>
      );
};

export default Nav;