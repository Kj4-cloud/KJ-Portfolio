import styles from './ProjectDetails.module.css';
import { ProjectCard } from './ProjectCard';
import { useSelector } from "react-redux";

export const ProjectDetails = () => {
 
    const healthProject = useSelector((state) => state.HealthProjectSlice);
    const carbonXProject = useSelector((state) => state.CarbonXProjectSlice);



  return (
          <div className={styles.ProjectsDetails}>
       <span className='text-blue-600'>Selected Work </span> 
        <h1 className='text-white text-4xl md:text-[60px] font-bold'>Projects that define my craft.</h1>
  
          <div className={` ${styles.ProjectDetailsContainer} flex flex-col gap-6`}>
            <ProjectCard children={healthProject} />
            <ProjectCard children={carbonXProject} />
           
            
          </div>


      </div> 
  )};

