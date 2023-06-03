import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../../src/Shared/Navbar/Navbar.jsx';
import Footer from '../../src/Shared/Footer/Footer.jsx';

const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;