// src/components/Footer.jsx
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="logo-badge" aria-hidden="true">JM</span>
                    <div>
                        <strong>Jorge Magzul</strong>
                        <span>Desarrollador Web &amp; Mobile</span>
                    </div>
                </div>
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Jorge Magzul. Desarrollado con React &amp; Vite.
                </p>
                <a href="#hero" className="back-to-top">
                    Volver arriba <span aria-hidden="true">↑</span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
