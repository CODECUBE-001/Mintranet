import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row py-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[80px] h-[80px] rounded-full ${styles.flexCenter} border-solid border-[#96d6ab] border-2 bg-white`}>
    <div className={`w-[65px] h-[65px] rounded-full ${styles.flexCenter} border-solid border-[#] border-[0.5px] bg-[#3644c241]`}>
      <img src={icon} alt="icons" className="w-[35%] h-[35%] object-contain" />
    </div>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (
  <section id="features" className={`${layout.section} mobile-padding`}>
    <div className={layout.sectionInfo}>
    <p className={`text-white ${styles.paragraph} mb-4 bg-secondary px-3 py-2 rounded-[30px]`}>
        Who we really are
      </p>
      <h2 className={styles.heading3}>
     Dataless, Seamless
 <br className="sm:block hidden" /> way <span className="font-[200]">  to Collaborate </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
      At Mintranet, we understand the importance of efficient and effective communication within your organization. That's why we've developed a powerful platform that helps streamline internal communication, enhance collaboration, and boost productivity.
</p>
      <Button/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    </section>
    
);

export default Features;