

const DataComp = ({data}) => {
    const{email,Cat,Des,Priority,Dead,Title,_id }=data||{};
    return (
        <div className=" h-[50px] md:w-[400px] w-[200px] bg-pink-300 ">
          <div className="text-center text-white text-sm font-bold justify-center items-center">
         <div className="flex flex-row items-center">
         <img className="w-10" src="https://i.ibb.co/1XYL22x/png-clipart-green-correct-sign-correct-green-thumbnail-removebg-preview.png" alt="" />
          <h1>{data.Title}</h1>
         </div>
          </div>
      </div>
    );
};

export default DataComp;