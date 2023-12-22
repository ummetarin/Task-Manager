import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Edit = () => {

  const{ user }=useContext(AuthContext)
 

  const handleupdate=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const name=form.name.value;
    const Order={
       email:email,
       name:name,
   }
     console.log(Order);


 fetch(`http://localhost:5000/person/data`,{
     method:'PUT',
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify(Order),

 }
 )
 .then(res=>res.json())
 .then(data=>{
  console.log(data);
  if(data.modifiedCount>0){
    Swal.fire({
      position: 'top-middle',
      icon: 'success',
      title: ' Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
 })


  }



    return (
        <div>
           <form onSubmit={handleupdate}>
            
           <div className="mt-4 flex flex-col bg-purple-400 rounded-lg p-4 shadow-sm">
    <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl text-center">Edit Your Profile</h2>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Email</label>
      <input defaultValue={user?.email} name="email"  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
   
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Name</label>
      <input defaultValue={user?.displayName} name="name" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
   
   
    
    <div className="flex mx-auto justify-center py-6">

        <button className="btn bg-blue-700 text-white">Updated Profile</button>
        </div>
        </div>
            
            </form> 
           
        </div>


        )
};

export default Edit;