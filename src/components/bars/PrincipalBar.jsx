import './PrincipalBar.css';

const PrincipalBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <a href="/home">
                        <img className="logo_image" src="logo512.png" alt="" />
                    </a>
                </div>
                <ul className="navbar-links">
                    {/* <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de</a></li> */}
                    <li className='login-buttom'><a href="/login">Log in</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default PrincipalBar;
