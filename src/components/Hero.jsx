import styles from "../style";
import { laptop, bshape4 } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mobile-center`}>
    <div>
      <p className={`text-white ${styles.paragraph} mb-4 bg-secondary px-3 py-2 rounded-[30px]`}>
        Streamline Your Workflow
      </p>
    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[55px] text-white ss:leading-[70px] leading-[45px]">
        Faster PC <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Transfer</span>{" "} App
      </h1>
    </div>

    
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    The traditional means of sharing data, such as flash drives or cloud servers, can be time-consuming, costly, and insecure. This is where Mintranet comes in. Mintranet is a mini intra-network designed to provide a secure and efficient means for organizations to share large amounts of data within their local network
    </p>
        <br/>
    <Button />
  </div>


  <div className={` flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img src={laptop} alt="laptop" className="w-[800px] h-[100%] relative z-[5]" />
  </div>


</section>
);
  
export default Hero;