import React from 'react';
import styles from "../style";
import { timer, documents,} from "../assets";

const Service = () => (
  <div className={`mx-auto py-16 text-white px-20`} id='service'>
    <div className= {`mx-auto text-center`}>
      <p className={`text-white ${styles.paragraph} bg-secondary inline text-center mb-4 px-3 py-2 rounded-[30px]`}>
       Exclusive Features
      </p>
      <h2 className={`${styles.paragraph} mt-5 text-center`}>
      Mintranet offers a range of features that make it a valuable tool for organizations that 

          <br className="sm:block hidden" />   need to share data within their local network.
                </h2>
    </div>
    <div className='flex gap-10 justify-center items-center cards-mobile'>
      <div className='services'>
      <img src={documents } alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center` } >
        File Sharing
        </h3>
        <p className='font-[14px] text-white-500 mt-3 text-center'>
        Mintranet allows users to share files of any size and format with each other within the organization's local network.
</p>
      </div>

      <div className='services'>
      <img src={timer} alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center` } >
          Security
        </h3>
        <p className='font-[14px] mt-3 text-white-500 text-center'>
        Mintranet provides a secure data transfer mechanism by encrypting all data transmitted within the network. This helps to safeguard against data theft, loss, or unauthorized access.
        </p>
      </div>

      <div className='services'>
      <img src={documents} alt='secure' className='w-10 h-10 my-5'/>
        <h3 className={`${styles.heading4} text-center`} >
          User Management
        </h3>
        <p className='font-[12px] mt-3 text-white-500 text-center '>
        Mintranet allows the organization's IT department to manage users and their access rights to the network. This ensures that only authorized users can access sensitive data within the network.
        </p>
      </div>
  </div>

  <div className='flex gap-10 justify-center items-center pb-20 cards-mobile'>
      <div className='services'>
      <img src={timer} alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center` } >
          Collaboration Tools
        </h3>
        <p className='font-[14px] mt-3 text-white-500 text-center'>
        Mintranet comes with collaboration tools, such as chat and video conferencing, which enable users to communicate and collaborate effectively within the organization.
        </p>
      </div>

      <div className='services'>
      <img src={documents} alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center`} >
          Centralized Storage
        </h3>
        <p className='font-[14px] text-white-500 mt-3 text-center'>
        Mintranet provides a centralized storage location for data within the organization's local network, which makes it easy for users to access data and collaborate on projects.
</p>
      </div>

      <div className='services'>
      <img src={timer} className='w-10 h-10 my-5' alt='secure' />
        <h3 className={`${styles.heading4} text-center` }>
          Easy to Setup
        </h3>
        <p className='font-[14px] text-white-500 mt-3 text-center'>
        Mintranet can be easily installed and set up within the organization's local network, without requiring any special technical skills or expertise.        </p>
      </div>
    </div>
</div>
);

export default Service;