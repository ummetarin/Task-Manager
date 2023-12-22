import { Link } from "react-router-dom";
import Draggable from 'react-draggable';
import { useState } from "react";

const All = ({data,handledlt}) => {
  const{email,Cat,Des,Priority,Dead,Title,_id }=data||{};
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleStop = (e, ui) => {
   
    setPosition({ x: ui.x, y: ui.y });
  };
    return (
      <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={() => {}}
      onDrag={handleStop}
      onStop={() => {}}
    >
      <div className="handle ">
        <div className=" bg-pink-400 text-black rounded-lg">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white ">{data.Title}</h2>
            <p className="font-bold text-black">{data.Des}</p>
            <p  className="font-bold text-black">{data.Dead}</p>
            <div className="card-actions justify-end">
              <Link to={`/des/up/${_id}`}>
                <button className="btn bg-black text-white">Update</button>
              </Link>
              <button onClick={() => handledlt(data._id)} className="btn bg-white text-black">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
    );
};

export default All;