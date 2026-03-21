import { useState } from "react"

export const Photo = () => {


 const [initialImage , setImage] = useState("./karanPfp.png") 

  
 const NewImage = () => {
        // if(initialImage === "./karanPfp.png"){
        //   setImage("./karanPfp2.png")
        // }
        // else{
        //   setImage("./karanPfp.png")
        // }
 
        setImage( initialImage === "./karanPfp.png" ? "./karanPfp2.png":"./karanPfp.png" )

 

 }

  return (
      <button  className="ImgButton" onClick={NewImage} >
      <img src={initialImage} alt="Photo" className="Photo" /></button>
  
  )
}