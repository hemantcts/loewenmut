import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle("body_overflow"); // mimic your jQuery body toggle
    };

    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (menu, e) => {
        e.preventDefault(); // prevent immediate navigation
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <header>
            <nav className={`navbar ${isOpen ? "btn_color" : ""}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src='./images/yellow-loewenmut-logo.png' /></Link>
                    <div className='theme_switch_btn'>
                        <ThemeSwitcher />
                    </div>
                    <button className={`navbar-toggler ${isOpen ? "active" : ""}`} onClick={handleToggle} type="button">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div className={`nav_overlay ${isOpen ? "show" : ""}`} onClick={handleToggle}></div>
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="mainNavbar">
                        <div className='menu_container'>
                            <ul className="navbar-nav">
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${openDropdown === "angebot" ? "show" : ""}`} to="/angebot" onClick={(e) => toggleDropdown("angebot", e)}>Unser Angebot</Link>
                                    <ul className={`dropdown-menu ${openDropdown === "angebot" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/angebot/#">Branding</Link></li>
                                        <li><Link className="dropdown-item" to="/angebot/#">Online / Website</Link></li>
                                        <li><Link className="dropdown-item" to="/angebot/#">Print</Link></li>
                                        <li><Link className="dropdown-item" to="/angebot/#">Content</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${openDropdown === "kompetenzen" ? "show" : ""}`} to="/kompetenzen" onClick={(e) => toggleDropdown("kompetenzen", e)}> Kompetenzen </Link>
                                    <ul className={`dropdown-menu ${openDropdown === "kompetenzen" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/kompetenzen/#">Marke & Design</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen/#">Digital & Web</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen/#">Online-Shops</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen/#">KMU & Start-ups</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen/#">Soziales & Non Profit</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen/#">Immobililen & Bauwesen</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${openDropdown === "agentur" ? "show" : ""}`} to="/sgentur" onClick={(e) => toggleDropdown("agentur", e)}> Agentur </Link>
                                    <ul className={`dropdown-menu ${openDropdown === "agentur" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/agentur/#">Über uns</Link></li>
                                        <li><Link className="dropdown-item" to="/agentur/#">Blog</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Referenzen</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Kontakt</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar