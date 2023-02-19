import React from 'react';
import styles from "../style";
import { features, sab2 } from "../assets";

const Feat = () => (
  <div className={`bg-[#971EB5] pr-60 flex justify-center`}>
  
  <div className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.boxWidth} feat-mobile`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 md:my-0 my-10 ml-20 relative`}>
    <img src={features} alt="features" className="w-[574px] h-[314px] relative z-[5]" />
    </div>

    <div className={`${styles.paddingY} md:my-0 relative text-mobile`}>
    <p className={`text-white ${styles.paragraph} mb-4 inline-block bg-secondary px-3 py-2 rounded-[30px]`}>
        Coming Soon ... 
      </p>
      <h2 className={`text-white ${styles.heading3}`}>
      Project & Task <br/>
Management System.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
      With this new feature, you'll be able to easily create projects and assign tasks to team members, set deadlines and track progress, and communicate with each other through built-in chat and collaboration tools. You'll also have access to a range of project management templates and tools, designed to help you get started quickly and stay on track. Whether you're managing a large team or just trying to stay on top of your own workload, the project and task management system on Mintranet will be your go-to tool for staying organized and productive. 
    </p>
    <a className={`${styles.link} my-5 cursor-pointer`}>
    Stay in the know
    </a>
    </div>
  </div>
</div>
);
export default Feat;