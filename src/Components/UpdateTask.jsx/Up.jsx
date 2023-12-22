import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthPro";
import { useLoaderData } from "react-router-dom";


const Up = () => {
  const{ user }=useContext(AuthContext)
  const data=useLoaderData()
  console.log(data);
  const{email,Cat,Des,Priority,Dead,Title,_id }=data||{};
  const handleupdate=event=>{
    event.preventDefault();
    const form=event.target;
    const Cat=form.Cat.value;
    const Des=form.Des.value;
    const Priority=form.Priority.value;
    const Title=form.Title.value;
    const Dead=form.Dead.value;
    const Order={
        Dead:Dead,
        Cat:Cat,
        Des:Des,
        Priority:Priority,
        Title:Title,
   }
     console.log(Order);


 fetch(`http://localhost:5000/com/datatask/${_id}`,{
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
            
           <div>
  <div className="mt-4 flex flex-col bg-purple-400 rounded-lg p-4 shadow-sm">
    <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl text-center">Update TASK</h2>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Title</label>
      <input placeholder="Title" defaultValue={data.Title} name="Title" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="description">Description</label>
      <textarea placeholder="Description" defaultValue={data.Des} name="Des" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="description" defaultValue={""} />
    </div>
    <div className="mt-4 flex flex-row space-x-2">
      <div className="flex-1">
        <label className="text-black font-bold" htmlFor="emotions">Deadlines</label>
        <input placeholder="Deadlines" name="Dead" defaultValue={data.Dead} className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="emotions" type="text" />
      </div>
      <div className="flex-1">
        <label className="text-black font-bold" htmlFor="symbols">Priority</label>
        <input placeholder="Priority" defaultValue={data.Priority} name="Priority" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="symbols" type="text" />
      </div>
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Category</label>
      <input placeholder="Ongoing or Pending" defaultValue={data.Cat} name="Cat" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    
    <div className="flex mx-auto justify-center py-6">
        <button className="btn bg-pink-700 text-white">Update</button>
    </div>
  </div>
</div> 
            
            </form> 
        </div>
    );
};

export default Up;