import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";
import Swal from "sweetalert2";
import DataOn from "./DataOn";

const Ongoing = () => {
  const [data, setdata] = useState([]);
  const{user}=useContext(AuthContext)
  useEffect(() => {
    fetch(`http://localhost:5000/addtask/data/${user?.email}`)
        .then((res) => res.json())
        .then((tasks) => {
            // Filter tasks where Cat==="Ongoing"
            const ongoingTasks = tasks.filter(task => task.Cat === "Ongoing");
            setdata(ongoingTasks);
        })
        .catch((error) => {
            console.error(error);
        });
}, [user]);

    const handledlt=_id=>{
      console.log(_id);
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          fetch(`http://localhost:5000/addtask/data/${_id}`,{
              method:"DELETE"
    
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.deletedCount>0){
                const fil = data.filter(get => get._id != _id)
                setdata(fil)
    
              Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
              }
          })
    
          }
        })
       
     }
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 mx-auto items-center  justify-center  gap-3  ">
      {
      data.map(item =><DataOn handledlt={handledlt}   key={item._id} data={item}></DataOn>)
      }
   </div> 
    );
};

export default Ongoing;