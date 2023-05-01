import logo from '../assets/airbnb-logo.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='AirBnb Logo' className="nav--logo"/>
        </nav>
    )
}