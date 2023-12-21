import { Outlet } from "react-router-dom";
import Nav from "../../Navbar/Nav";
import Foooter from "../../Navbar/Foooter";


const MainLayout = () => {
    return (
        <div className="md:px-12">
            <Nav></Nav>
          <Outlet></Outlet> 
          <Foooter></Foooter> 
        </div>
    );
};

export default MainLayout;