import "./DisplayStack.css"

import { useSelector } from "react-redux"
import { StackesDetails } from "./StackesDetails"

export const DisplayStack = () => {

    const stack = useSelector((store)=>store.storeStack);
  

    return (
        <div>
           <div className="container text-center">
  <div className="row row-cols-4 g-3">

       <div className="col"><div className="stacksContainer"> <span className="Domain">Frontend</span><StackesDetails>{stack.Frontend}</StackesDetails></div></div>
       <div className="col"><div className="stacksContainer"> <span className="Domain">Backend</span><StackesDetails>{stack.Backend}</StackesDetails></div></div>
       <div className="col"><div className="stacksContainer"> <span className="Domain">Devops</span><StackesDetails>{stack.Devops}</StackesDetails></div></div>
       <div className="col"><div className="stacksContainer"> <span className="Domain">Tools</span><StackesDetails>{stack.Tools}</StackesDetails></div></div>
   
  </div>
</div>  
        </div>
    )
} 