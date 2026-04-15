import styles from "./Hackathons.module.css";
import { HackathonsCard } from "./HackathonsCard";
import { useSelector } from "react-redux";

export const HackathonsDiv = () => {

    const Hackathon1 = useSelector((state) => state.Hackathon1);
    const Hackathon2 = useSelector((state) => state.Hackathon2);

    return (
        <div>
            <div className={`${styles.StackDiv} `}>
        <span className="Stack">HACKATHONS</span>
        <h3 className=" text-white text-[40px] ">Hackathons I've Participated In  </h3>
      </div>

       <div className="flex flex-wrap gap-5 justify-center mt-10">
        <HackathonsCard children={Hackathon1}/>
        <HackathonsCard children={Hackathon2}/>
       </div>
              

        </div>
    );
}