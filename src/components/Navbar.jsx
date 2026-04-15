import { useState, useEffect } from "react";
export const Navbar = () => {

   const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="Navbar"> 
    <ol className="NavContent">
      <li>KARAN.<span className="devContent">DEV</span></li>
      {/* <li>About</li>
      <li>Contact</li> */}

       <h1 className="TimeStyle mb-0 text-white-50">
      {time.toLocaleTimeString()}
    </h1>
      
      <li className="NavItem font-poppins text-1xl ">No Sleep Just Code💻 </li>
    
    </ol>
   
    </div>

    )}