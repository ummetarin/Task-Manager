import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthPro";
import Swal from "sweetalert2";


const Nav = () => {
  const {user,LogOut}=useContext(AuthContext);
  const handllogout=()=>{
     LogOut()
     .then(()=>{

      Swal.fire({
        title: "Loged Out!",
        icon: "Loged Out"
      });
  
     })
     .catch(err=>console.log(err))

  }
    return (
        <div className="navbar  bg-teal-600 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
      <li><Link to={'/'}><a>Home</a></Link></li>
        <li>
          <a>Dashboard</a>
        </li>

        <li>
        <a >Register </a>
      </li>
      </ul>
    </div>
   <div className="flex flex-row items-center">
   <a className="btn btn-ghost text-xl">Task Manager</a>
   <img className="w-12" src="https://i.ibb.co/hZff4LC/46cd20a33efe24abce136ee09cea122a-removebg-preview.png" alt="" />
   </div>
  </div>
  <div className="navbar-center hidden lg:flex font-bold">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}><a>Home</a></Link></li>
     
      <li>
       <Link to={'/res'}> <a >Register</a></Link>
      </li>
      <li><Link to={'/des'}><a>Dashboard</a></Link></li>
    </ul>
  </div>
  <div className="navbar-end lg:mr-36 md:mr-36 mr-52 md:mt-1 mt-7 gap-4 ">
   {
    user?<div className='flex md:flex-row flex-col'> <button onClick={handllogout} className="btn bg-orange-500 font-bold">LogOut</button> 
    <img className='rounded-full h-12 w-12 md:ml-1 ml-7 md:mt-0 mt-6 ' src={user?.photoURL}></img></div>
    :<Link to={'/log'}>  <button className="btn bg-orange-500 font-bold">LOGIN</button></Link>
   }
   
   
  
       
  </div>
</div>
    );
};

export default Nav;