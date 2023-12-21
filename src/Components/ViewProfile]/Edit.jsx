import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";
import { Link } from "react-router-dom";


const Edit = () => {

    const{user}=useContext(AuthContext);

    return (
        <div>
            
            <div>
  <div className="mt-4 flex flex-col bg-purple-400 rounded-lg p-4 shadow-sm">
    <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl text-center">Edit Your Profile</h2>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Email</label>
      <input defaultValue={user?.email}  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
   
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Name</label>
      <input defaultValue={user?.displayName} className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Image</label>
      <input defaultValue={user?.photoURL} className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="Image" />
    </div>
   
    
    <div className="flex mx-auto justify-center py-6">

        <button className="btn bg-blue-700 text-white">Updated Profile</button>
        </div>
        </div>
        </div>
        </div>


        )
};

export default Edit;