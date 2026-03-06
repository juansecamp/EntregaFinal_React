import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3" to="/">RAVEN E-COMMERCE</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-lg-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Todo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/Celulares">Celulares</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/Notebooks">Notebooks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/Sillas Gamer">Sillas Gamer</NavLink>
                        </li>
                    </ul>
                    
                    <div className="d-flex align-items-center">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
