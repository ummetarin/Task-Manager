import React from 'react';
import { Link } from 'react-router-dom';

const DataOn = ({data,handledlt}) => {
    const{email,Cat,Des,Priority,Dead,Title,_id }=data||{};
    console.log(data);
    return (
      <div className="handle ">
      <div className=" bg-pink-400 text-black rounded-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white ">{data.Title}</h2>
          <p className="font-bold text-black">{data.Des}</p>
          <p  className="font-bold text-black">{data.Dead}</p>
          <div className="card-actions justify-end">

            <button onClick={() => handledlt(data._id)} className="btn bg-black text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DataOn;