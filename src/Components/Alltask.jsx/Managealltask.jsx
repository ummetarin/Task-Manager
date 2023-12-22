import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthPro";
import All from "./All";



const Managealltask = () => {

 
  const [data, setdata] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/addtask/data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [user]);

  const handledlt = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addtask/data/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const fil = data.filter((get) => get._id !== _id);
              setdata(fil);

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
            }
          });
      }
    });
  };

         


    return (
      <div>
      
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center justify-center gap-3 ">
          {data.map((item) => (
            <div key={item._id} className="handle">
              <All handledlt={handledlt} data={item} />
            </div>
          ))}
        </div>
      
    </div>
    );
};

export default Managealltask;