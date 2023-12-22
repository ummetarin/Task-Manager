import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthPro";
import { useLoaderData } from "react-router-dom";


const DataofCom = () => {
 
    const data=useLoaderData()
    console.log(data);

    const{email,Cat,Des,Priority,Dead,Title,_id }=data||{};
    const {user}=useContext(AuthContext);
    

    

    const handlenewtask=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const ans=form.ans.value;
      console.log(email,ans);
    
      const order={
        email:email,
        ans:ans,
        Cat:Cat,
        Des:Des,
        Priority:Priority,
        Dead:Dead,
        Title:Title

    
    
      }
      console.log(order);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Completed',
        showConfirmButton: false,
        timer: 1500
      })
    
    
      fetch('http://localhost:5000/com/data',{
    
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
        <form onSubmit={handlenewtask}>
        <div className="mt-4 flex flex-col bg-purple-400 rounded-lg p-4 shadow-sm">
            <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl text-center">Complete Task</h2>
            <div className="mt-4">
              <label className="text-black font-bold" htmlFor="title">Email</label>
              <input name="email" defaultValue={user?.email} className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="email" />
            </div>
              <div className="flex-1">
                <label className="text-black font-bold" htmlFor="symbols">Are You Sure About It</label>
                <input placeholder="Yes" name="ans" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="symbols" type="text" />
              </div>
            </div>
           
            
            <div className="flex mx-auto justify-center py-6">
                <button className="btn bg-pink-700 text-white">Completed</button>
            </div>
        </form>
        
    );
};

export default DataofCom;