import { Link, Outlet } from "react-router-dom";
import Lottie from "lottie-react";
import imgdesh from '/Task/Task-manager-client/src/Components/dess.json'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";

const Dash = () => {
     const{user}=useContext(AuthContext);

    return (
        <div className="flex flex-row">
            <div className="bg-orange-500 w-[200px]  min-h-screen">
            <div>

                <div className="mx-auto justify-center flex pt-7 ">
                <img className="rounded-full w-16" src={user?.photoURL} alt="" />
                </div>
               <h1 className="text-center text-sm font-bold text-white">{user?.displayName}</h1>
             
            </div>
            <Lottie animationData={imgdesh}> </Lottie>

            <div className="text-center font-bold py-4 flex mx-auto justify-center text-white">
               <Link to={'/des/v'}> <button className="btn bg-blue-700 text-center text-white">My Profile</button></Link>
            </div>
           <div className="flex justify-center">
         <Link to={'/'}>  <button className="btn bg-blue-700 text-white">Go Home</button></Link>
           </div>
            </div>
            <div className="justify-center mx-auto "> 
            <div className='py-3 '>
               <Link to={'/des/add'}> <button className='bg-blue-800 btn text-white'>+  Add New Task</button></Link>
            </div>
            <div className=" flex flex-row md:gap-5 gap-2   font-bold text-blue-800">
               <Link to={'/des/all'}> <h1>All Task</h1></Link>
              <Link to={'/des/new'}>  <h1>New Task</h1></Link>
             <Link to={'/des/on'}><h1>Ongoing Task</h1></Link>
               <Link to={'/des/com'}> <h1>Complete Task</h1></Link>
             <Link to={'/des/pen'}>   <h1>Pending Task</h1></Link>
            </div>
               <div className="py-10">
               <Outlet></Outlet>
               </div>
            </div>
        </div>
    );
};

export default Dash;