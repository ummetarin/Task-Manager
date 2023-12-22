import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthPro";
import DataComp from "./DataComp";


const Complete = () => {

  const [data, setdata] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/com/data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [user]);

    return (
      <div>
      
      <div className=" flex flex-col gap-8 ">
        {data.map((item) => (
          <div key={item._id} className="handle">
            <DataComp  data={item}></DataComp>
          </div>
        ))}
      </div>
    
  </div>
    );
};

export default Complete;