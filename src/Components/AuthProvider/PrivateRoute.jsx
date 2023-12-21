import { useContext } from "react";
import { AuthContext } from "./AuthPro";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const {user,loading}=useContext(AuthContext);
    console.log(user);

    if(loading){
        return(
        
        <div>
                  
            <div className="loader">
  <span></span>
</div>
        </div>
        )
    }

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to={'/res'} ></Navigate>; 
        </div>
    );
};

export default PrivateRoute;