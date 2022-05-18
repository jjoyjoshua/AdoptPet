import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPaw,FaInfo,FaPhoneAlt} from "react-icons/fa"; 
function Navigation(){
    return(<>
            <nav className="nav-bar bg-white w-100 pt-4 rounded-top d-flex justify-content-evenly">
                <NavLink to="/"><FaHome className="material-icons" size={22} color="grey"/></NavLink>
                <NavLink to="/Dashboard"><FaPaw className="material-icons" size={22}/></NavLink>
                <a><FaInfo className="material-icons" size={22} color="grey"/></a>
                <a><FaPhoneAlt className="material-icons" size={22} color="grey"/></a>
             </nav>
        </>
        )
}
export default Navigation;