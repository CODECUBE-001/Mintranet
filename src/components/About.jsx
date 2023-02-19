import React from 'react';
import styles from "../style";
import { sab1, sab2, documents, timer } from "../assets";

const About = () => (
  <div id='about' className={`${styles.boxWidth} ml-40 py-10`}>


  <div className={`flex justify-center items-center md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} ml-20 flex-col xl:px-0 sm:px-16 px-6`}>
      <div>
        <img src={timer} alt='icon' className="w-[50px] h-[50px]" />
        <h2 className={`text-white ${styles.heading3}`}>
        Premier platform for intra  <br/>
        communication needs.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        We understand that in today's fast-paced business world, effective communication is crucial to success. That's why we've created a centralized hub where you can streamline your company's communications and keep your team on the same page. Our intuitive interface and powerful tools make it easy to send messages, share files, and collaborate with colleagues from anywhere in the world. With Mintranet, you'll never miss an important update or lose track of a critical project      </p>
      <a className={`${styles.link} my-5 cursor-pointer`}>
        Join Waitlist
      </a>
      </div>
    </div>

      <div className={` flex ${styles.flexCenter} md:my-0 my-10 ml-20 relative`}>
        <img src={sab1} alt="illustration" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
    </div>
    
    <div className={`flex justify-center aitems-center md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 md:my-0 my-10 ml-20 relative`}>
      <img src={sab2} alt="illustration" className="w-[457px] h-[392px] relative z-[5]" />
      </div>

      <div className={` ${styles.paddingY} md:my-0 ml-20 my-10 relative`}>
      <img src={timer} alt='icon' className="w-[50px] h-[50px]" />
        <h2 className={`text-white ${styles.heading3}`}>
        We Revolutionize due <br/>
to Passion.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        We believe that effective communication is the key to unlocking success, and our mission is to provide companies of all sizes with the tools they need to streamline their communications and stay ahead of the competition. Our team is dedicated to creating a user-friendly platform that's easy to use, even for those with little to no technical expertise. We're constantly improving our platform and adding new features to ensure that our clients have access to the latest and greatest in internal communication technology. Join us today and take the first step towards transforming the way your team communicates.      </p>
      <a className={`${styles.link} my-5 cursor-pointer`}>
        Join Waitlist
      </a>
      </div>
    </div>
  </div>
  
  
);

export default About;