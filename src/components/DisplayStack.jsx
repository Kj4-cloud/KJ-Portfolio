import "./DisplayStack.css"

import { useSelector } from "react-redux"
import { StackesDetails } from "./StackesDetails"

export const DisplayStack = () => {

    const stack = useSelector((store)=>store.storeStack);
  

    return (
        <div>
           <div className="container text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

       <div className="col"><div className="stacksContainer"> <span className="Domain">Frontend</span><StackesDetails>{stack.Frontend}</StackesDetails></div></div>
       <div className="col"><div className="stacksContainer"> <span className="Domain">Backend</span><StackesDetails>{stack.Backend}</StackesDetails></div></div>
       <div className="col"><div className="stacksContainer"> <span className="Domain">Devops</span><StackesDetails>{stack.Devops}</StackesDetails></div></div>
       <div className="col"><div className="stacksContainer"> <span className="Domain">Tools</span><StackesDetails>{stack.Tools}</StackesDetails></div></div>
   
  </div>
</div>  
        </div>
    )
} 