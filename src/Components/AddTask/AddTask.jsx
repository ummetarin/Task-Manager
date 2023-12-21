import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";


const AddTask = () => {
const {user}=useContext(AuthContext)


    return (
        <div>  
            <div>
  <div className="mt-4 flex flex-col bg-purple-400 rounded-lg p-4 shadow-sm">
    <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl text-center">ADD NEW TASK</h2>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Email</label>
      <input defaultValue={user?.email} className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Title</label>
      <input placeholder="Title" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="description">Description</label>
      <textarea placeholder="Description" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="description" defaultValue={""} />
    </div>
    <div className="mt-4 flex flex-row space-x-2">
      <div className="flex-1">
        <label className="text-black font-bold" htmlFor="emotions">Deadlines</label>
        <input placeholder="Deadlines" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="emotions" type="text" />
      </div>
      <div className="flex-1">
        <label className="text-black font-bold" htmlFor="symbols">Priority</label>
        <input placeholder="Priority" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="symbols" type="text" />
      </div>
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Category</label>
      <input placeholder="Ongoing or Pending" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    
    <div className="flex mx-auto justify-center py-6">
        <button className="btn bg-pink-700 text-white">ADD TASK</button>
    </div>
  </div>
</div>

        </div>
    );
};


export default AddTask;