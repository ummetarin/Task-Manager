import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";
import Swal from "sweetalert2";


const AddTask = () => {
const {user}=useContext(AuthContext);

var date=new Date();
    

const handlenewtask=e=>{
    e.preventDefault();
    const form=e.target;
    const title=form.title.value;
    const email=form.email.value;
    const des=form.des.value;
    const dead=form.dead.value;
    const pri=form.pri.value;
    const cat=form.cat.value;
    const time=form.time.value;
  console.log(title,email,des,dead,time,pri,cat);


  const currentDate = new Date();
  const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();
  console.log(currentMinutes);

  const order={
    email:email,
    Title:title,
    Des:des,
    Dead:dead,
    Priority:pri,
    Cat:cat,
    time:time,
    currentMinutes:currentMinutes
  }
  console.log(order);
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Added in Wishlist',
    showConfirmButton: false,
    timer: 1500
  })


  fetch('http://localhost:5000/addtask/data',{

  method:'POST',
  headers:{
    'content-type':"application/json"

  },
  body:JSON.stringify(order)
  }
  )
  .then(res=>res.json())
  .then(data=>{

    console.log(data);
  })




}



    return (
        <div>  
            <div>
<form onSubmit={handlenewtask}>
<div className="mt-4 flex flex-col bg-purple-400 rounded-lg p-4 shadow-sm">
    <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl text-center">ADD NEW TASK</h2>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Email</label>
      <input name="email" defaultValue={user?.email} className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="email" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Title</label>
      <input placeholder="Title" name="title" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Time</label>
      <input placeholder="Time" name="time" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="time" />
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="description">Description</label>
      <textarea placeholder="Description" name="des" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="description" type="text" defaultValue={""} />
    </div>
    <div className="mt-4 flex flex-row space-x-2">
      <div className="flex-1">
        <label className="text-black font-bold" htmlFor="emotions">Deadlines</label>
        <input placeholder="Deadlines" name="dead" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="emotions" type="date" />
      </div>
      <div className="flex-1">
        <label className="text-black font-bold" htmlFor="symbols">Priority</label>
        <input placeholder="Priority" name="pri" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="symbols" type="text" />
      </div>
    </div>
    <div className="mt-4">
      <label className="text-black font-bold" htmlFor="title">Category</label>
      <input name="cat" placeholder="Ongoing or Pending" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
    </div>
    
    <div className="flex mx-auto justify-center py-6">
        <button className="btn bg-pink-700 text-white">ADD TASK</button>
    </div>
  </div>
</form>
</div>

        </div>
    );
};


export default AddTask;