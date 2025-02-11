import './Header.scss'
import logo from '../../assets/logo/Merliweb.svg';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const showArrow = location.pathname !== "/";

    return (
        <header>
            {showArrow && (
                <Link to="/">
                    <img src={logo} className='arrowLeft' alt='arrowLeft' />
                </Link>
            )}
            <Link to="/">
                <h1 className='nameLogo'>ohmylunch</h1>
            </Link>
        </header>
    )
}

export default Header