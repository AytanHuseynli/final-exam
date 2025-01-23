import { Outlet, Link } from "react-router-dom";
import "./MainLayout.css"


const Layout = () => {
    return (
        <>

            <div className="navbar">
                <nav>
                    <ul>
                        <div className="logo">
                            <li>
                                <img src="https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="" />
                            </li>
                            <li>
                                <img src="https://preview.colorlib.com/theme/florist/img/icon/search.png.webp" alt="" />
                            </li>

                            <li>
                                <img src="https://preview.colorlib.com/theme/florist/img/icon/heart.png.webp" alt="" />
                            </li>
                            <li>
                                <img src="https://preview.colorlib.com/theme/florist/img/icon/bag.png.webp" alt="" />
                            </li>
                        </div>
                        <div className="navbar-ul">

                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Services">Services</Link>
                            </li>
                            <li>
                                <Link to="/Shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/Pages">Pages</Link>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;