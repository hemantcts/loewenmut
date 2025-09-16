import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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


    const { pathname } = useLocation();

    useEffect(() => {
        setIsOpen(false);
        document.body.classList.remove("body_overflow");
    }, [pathname]);

    return (
        <header>
            <nav className={`navbar ${isOpen ? "btn_color" : ""}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='circle_bg' d="M39.5 79C61.3152 79 79 61.3152 79 39.5C79 17.6848 61.3152 0 39.5 0C17.6848 0 0 17.6848 0 39.5C0 61.3152 17.6848 79 39.5 79Z" fill="inherit" />
                            <path className='iner_logo' d="M43.1942 59.0822H26.9316V19.8447H33.0949V52.9164H43.1853L43.1942 59.0822Z" fill="inherit" />
                            <path className='iner_logo' d="M52.1711 56.1119C52.1763 56.8424 51.9278 57.552 51.4681 58.1198C51.0084 58.6875 50.366 59.0781 49.6504 59.2249C48.9348 59.3717 48.1904 59.2657 47.5443 58.9249C46.8982 58.5841 46.3904 58.0296 46.1075 57.3561C45.8246 56.6826 45.7842 55.9319 45.9932 55.2319C46.2021 54.5319 46.6475 53.9262 47.2533 53.518C47.8592 53.1098 48.5878 52.9245 49.3151 52.9937C50.0423 53.0629 50.7229 53.3823 51.2409 53.8974C51.5389 54.1834 51.7752 54.5275 51.9352 54.9084C52.0952 55.2892 52.1754 55.6988 52.1711 56.1119Z" fill="inherit" />
                        </svg>
                    </Link>
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
                                    <Link className={`nav-link dropdown-toggle ${openDropdown === "angebot" ? "show" : ""}`} to="/angebot">Unser Angebot</Link>
                                    {/* <Link className={`nav-link dropdown-toggle ${openDropdown === "angebot" ? "show" : ""}`} to="/angebot" onClick={(e) => toggleDropdown("angebot", e)}>Unser Angebot</Link> */}
                                    <ul className={`dropdown-menu ${openDropdown === "angebot" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/angebot-detail">Branding</Link></li>
                                        <li><Link className="dropdown-item" to="/angebot-detail">Online / Website</Link></li>
                                        <li><Link className="dropdown-item" to="/angebot-detail">Print</Link></li>
                                        <li><Link className="dropdown-item" to="/angebot-detail">Content</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${openDropdown === "kompetenzen" ? "show" : ""}`} to="/kompetenzen"> Kompetenzen </Link>
                                    {/* <Link className={`nav-link dropdown-toggle ${openDropdown === "kompetenzen" ? "show" : ""}`} to="/kompetenzen" onClick={(e) => toggleDropdown("kompetenzen", e)}> Kompetenzen </Link> */}
                                    <ul className={`dropdown-menu ${openDropdown === "kompetenzen" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/kompetenzen-detail">Marke & Design</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen-detail">Digital & Web</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen-detail">Online-Shops</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen-detail">KMU & Start-ups</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen-detail">Soziales & Non Profit</Link></li>
                                        <li><Link className="dropdown-item" to="/kompetenzen-detail">Immobililen & Bauwesen</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${openDropdown === "agentur" ? "show" : ""}`} to="/agentur" onClick={(e) => toggleDropdown("agentur", e)}> Agentur </Link>
                                    <ul className={`dropdown-menu ${openDropdown === "agentur" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/ueber-uns">Über uns</Link></li>
                                        <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/referenzen">Referenzen</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/kontakt">Kontakt</Link>
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