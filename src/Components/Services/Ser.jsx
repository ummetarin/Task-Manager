

const Ser = () => {
    return (
        <div className="py-16 font-bold text-white">
            
            <div className="flex md:flex-row flex-col mx-auto justify-center gap-3 items-center  ">
                 <div className="flex flex-col w-[320px] h-[350px] bg-pink-600 items-center justify-center  shadow-lg">
                  <div>
                  <img className="h-[100px]" src="https://i.ibb.co/MBBMxmh/download-1-removebg-preview.png" alt="" />
                  </div>
                    <p className="text-center px-3">Users can create tasks, assign them to specific team members, and set due dates. This helps in clearly defining responsibilities and deadlines.</p>
                 </div>

                 <div className="flex flex-col w-[320px] h-[350px]  bg-pink-600 items-center justify-center shadow-lg">
                    <img className="h-[100px]" src="https://i.ibb.co/HFH1pzf/download-2-removebg-preview.png" alt="" />
                    <p className="text-center px-3">Monitoring the progress of tasks is a crucial aspect of task management. Users should be able to see the status of tasks and know who is responsible for each task.</p>
                 </div>

                 <div className="flex flex-col w-[320px] h-[350px]  bg-pink-600 items-center justify-center  shadow-lg">
                    <img className="h-[100px]" src="https://i.ibb.co/6g2xpWh/images-3-removebg-preview.png" alt="" />
                    <p className="text-center px-3">Task management services often include communication tools such as comments, file sharing, and discussion threads to facilitate collaboration among team members.</p>
                 </div>


            </div>
        </div>
    );
};

export default Ser;