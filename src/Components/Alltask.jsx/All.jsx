import { Link } from "react-router-dom";


const All = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
         <div>
         <div className="card bg-black text-white">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Title</h2>
    <p>Des</p>
    <p>priority</p>
    <div className="card-actions justify-end">
     <Link to={'/des/up'}> <button className="btn btn-primary">Update</button></Link>
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
         </div>
       
         
        
        </div>
    );
};

export default All;