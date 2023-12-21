import Lottie from "lottie-react";
import imgg from '/Task/Task-manager-client/src/Components/task.json'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";



const Banner = () => {
    return (
                <div>
        <div className="hero min-h-screen bg-orange-500 text-white ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="md:w-[30%]">
            <Lottie animationData={imgg}> </Lottie>
            </div>
            <div className="md:w-[60%]">
              <h1 className="mt-2 text-4xl  font-bold">Text <span className="text-blue-800">Manager</span></h1>
           <h1 className='text-xl text-white font-bold pt-1'> <Typewriter
                 words={[' Its a boon for many companies and professionals', 'Its can serve as makeshift project management solutions', 'It can also help the estimated 40% of the workforce']}
                 loop={10}
                 >
                 </Typewriter></h1>
              <p className="py-2 text-sm font-normal">Task Manager, which was previously known as Microsoft Windows Task Manager, is a component of the Windows operating system (OS) that helps administrators and end users monitor, manage and troubleshoot tasks. A task is a basic unit of programming that an OS controls. In the context of Task Manager, a task might be an application, a Windows process or a background process.</p>
        
             
              
             <div className="pt-4">
             <Link to={'/res'}><button className="bg-blue-800  text-white btn">Lets Explore</button></Link>
             </div>
        
           
            </div>
          </div>
        </div>
                    
                </div>
    );
};

export default Banner;