import { useState } from "react";

export const Photo = () => {
  const [initialImage , setImage] = useState("./karanPfp.png");

  const newImage = () => {
    setImage( initialImage === "./karanPfp.png" ? "./karanPfp2.png" : "./karanPfp.png" );
  }

  return (
    <button  
      className="bg-transparent border-none p-0 cursor-pointer focus:outline-none w-full flex justify-center hover:-translate-y-2 transition-transform duration-300" 
      onClick={newImage} 
    >
      <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full border-[3px] border-[#9acd32] overflow-hidden shadow-xl transition-all duration-300 group">
        <img 
          src={initialImage} 
          alt="Developer Profile" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-[#9acd32]/5 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
    </button>
  )
}