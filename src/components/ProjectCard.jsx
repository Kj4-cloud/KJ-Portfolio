import styles from "./ProjectCard.module.css";
import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa";




export const ProjectCard = ({children}) => {


  return (
    <div className={`${styles.ProjectCard} ${styles.ProjectCardHover}`}>
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_3fr] gap-6">


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



       <div className="w-full">

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

       <div className={`${styles.Link_container} `}>
        <a href={children.Github} className={`${styles.LinksOfProject} mr-2`}>< IoLogoGithub size={20} /></a>
        <a href={children.Link} className={`${styles.LinksOfProject} mr-2`}>< FaLink size={20} /></a>
       </div>


     </div>
    </div>
  );
};


