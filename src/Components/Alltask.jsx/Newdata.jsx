import { Link } from "react-router-dom";


const Newdata = ({data,handledlt}) => {
    const{email,Cat,Des,Priority,Dead,Title,_id }=data||{};
    return (
        <div className="card bg-black text-white">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.Title}</h2>
          <p>{data.Des}</p>
          <p>{data.Dead}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handledlt(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
       </div>
            
    );
};

export default Newdata;