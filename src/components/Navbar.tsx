import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <nav className="custom-navbar">
            <div className="custom-navbar-brand">
                <Link to="/">
                    <strong>HOME</strong>
                </Link>
            </div>

            <button
                className="custom-navbar-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            <div className={`custom-navbar-links ${isOpen ? "open" : ""}`}>
                <Link
                    to="/"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Dashboard
                </Link>
                <Link
                    to="/renaissance"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Renaissance 
                </Link>
                <Link
                    to="/baroque"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Baroque
                </Link>
                <Link
                    to="/rococo-neoclassicism"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Rococo \ Neoclassicism
                </Link>
                <Link
                    to="/romanticism-realism"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Romanticism \ Realism
                </Link>
                <Link
                    to="/impressionism"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Impressionism \ Post-Impressionism
                </Link>
                <Link
                    to="/modern"
                    className="custom-nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    Modern
                </Link>
                <button
                    onClick={() => setIsDark((prev) => !prev)}
                    className="text-xl rounded-md p-1"
                    aria-label="Toggle Theme"
                >
                    {isDark ? "🌞" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

