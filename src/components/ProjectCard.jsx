import styles from "./ProjectCard.module.css";
import { HealthProjectSlice } from "../store/project";


export const ProjectCard = ({children}) => {


  return (
    <div className={`${styles.ProjectCard} ${styles.ProjectCardHover}`}>
    <div className="grid grid-cols-[1fr_3fr] gap-6">


       <div>
        <div className="m-2"><span className="text-blue-600 ma">YEAR</span><br/>
        <span>{children.Year}</span>
        </div>

        <div className="m-2"><span className="text-blue-600 ma">Role</span><br/>
        <span>{children.Role}</span>
        </div>

        <div className="m-2"><span className="text-blue-600 ma">SCALE</span><br/>
        <span>{children.Scale}</span>
        </div>
       </div>



       <div className="w-1/2">

         <div     className="m-2">
        <span>{children.Title}</span>
        </div>

        <div className="m-2">
        <span>{children.Description}</span>
        </div>

        <div className="m-2"  >
        { children.Technologies.map((item, index) =>(<span key={index} className ={`${styles.Tools} ${styles.newStack}`}>
           {item}
          </span>)) }
        </div>

       </div>


     </div>
    </div>
  );
};


