import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";
import { Link } from "react-router-dom";


const Viewpro = () => {

    const {user}=useContext(AuthContext);
    return (
        <div className="bg-purple-400 h-[300px] md:w-[600px] w-[250px]">
           <div className="flex justify-center mx-auto pb-2 pt-7 ">
           <img className="rounded-full" src={user?.photoURL} alt="" />
           </div>
            <p className="md:text-xl text-sm font-bold pt-3 text-center text-white">Name:{user?.displayName}</p>
            <p className="md:text-xl text-sm font-bold pt-3 text-center text-white">Email:{user?.email}</p>

            <div className="flex mx-auto justify-center pt-3"><Link to={'/des/e'}><button className="btn bg-blue-700 text-white">Edit Profile</button></Link></div>
        </div>
    );
};

export default Viewpro;