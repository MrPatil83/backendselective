import React from 'react'
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";
import qualitywhite from "../../assets/About/qualitywhite.jpg";
import endtoendservice from "../../assets/About/endtoendservice.jpg";
import customersatisfaction from "../../assets/About/customersatisfaction.jpg";
import robustpacaging from "../../assets/About/robustpacaging.jpg";
import ontimedilivery from "../../assets/About/ontimedilivery.jpg";

// import railing2 from "../../assets/Railing/HeroImage/railing2.jpg"

const Banner = () => {
  return (
    <section className=' bg-gray-800 w-screen font-poppins'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Baneer image */}
            <div className=' flex justify-center items-center'>
                <motion.img 
                initial={{opacity: 0, scale:0.3}}
                whileInView={{opacity: 1, scale:1}}
                transition={{type:"spring", stiffness:35, delay:2}}
                viewport={{once:true}}
                src={qualitywhite} alt='' className=' w-[15rem] h-[15rem] ml-8 rounded-[2rem] object-cover md:h-[16rem] lg:h-[15rem] lg:ml-14 xl:h-[18rem] xl:ml-12 2xl:h-[20rem] 2xl:w-[20rem]'/>
            </div>
            {/* Brand ingo */}
            <div className=' flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(1.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-2xl mr-10 font-bold uppercase text-primary ml-12 md:text-[1.8rem] lg:text-4xl 2xl:text-5xl'>Quality Assurance</motion.h1>
                <motion.p
                variants={FadeUp(1.8)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }} className=' text-base px-16 text-secondary md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 2xl:px-1 2xl:ml-10'>
                Quality Assurance is not merely a checkpoint but a relentless pursuit of excellence at every phase. It’s the commitment to perfection and the precision in each step that defines true quality.
                </motion.p>
                <motion.p
                variants={FadeUp(1.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className=' text-base px-16 text-secondary  md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 2xl:px-1 2xl:ml-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, pariatur eligendi aliquam iusto esse a?</motion.p>
                {/* <motion.div 
                    variants={FadeUp(3.1)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
            </div>
        </div>

        {/* Sceond image */}
        <section>
        <div className='flex flex-col md:flex-row-reverse justify-center items-center'>
            <motion.img 
                initial={{opacity: 0, scale:0.3}}
                whileInView={{opacity: 1, scale:1}}
                transition={{type:"spring", stiffness:100, delay:2.2}}
                viewport={{once:true}}
                src={endtoendservice} 
                alt='' 
                className='w-[15rem] h-[15rem] ml-3 rounded-[2rem] object-cover md:h-[16rem] md:mr-12 lg:h-[15rem] lg:ml-4 xl:h-[18rem] 2xl:h-[20rem] 2xl:w-[20rem] '
            />
        
        <div className='flex flex-col justify-center mt-4 md:mt-0 md:mr-4'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1 
                variants={FadeUp(1.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-2xl font-bold uppercase text-primary md:text-[1.8rem] lg:text-4xl 2xl:text-5xl md:ml-[5rem] lg:ml-10 xl:-ml-[5.2rem]'>
                End-to-End Service
            </motion.h1>
            
            <motion.p
                variants={FadeUp(1.8)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }} className='text-base px-[4.4rem]  text-secondary md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] md:ml-[5rem] lg:ml-10 xl:-ml-[9.2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi tempora nam quia temporibus aut facilis deleniti! Dolorem asperiores, dolore facilis quisquam iure repellat laudantium sit nam, modi minima illum!
            </motion.p>
            
            <motion.p
                variants={FadeUp(1.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className='text-base px-[4.4rem]  text-secondary md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] md:ml-[5rem] lg:ml-10 xl:-ml-[9.2rem]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, pariatur eligendi aliquam iusto esse a?
            </motion.p>
            
            {/* <motion.div 
                    variants={FadeUp(3.4)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center -ml-36 shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
           </div>
        </div>
        </section>
        {/* Sceond image */}




        {/* third image */}
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Baneer image */}
            <div className=' flex justify-center items-center'>
                <motion.img 
                initial={{opacity: 0, scale:0.3}}
                whileInView={{opacity: 1, scale:1}}
                transition={{type:"spring", stiffness:100, delay:2.2}}
                viewport={{once:true}}
                src={customersatisfaction} alt='' className=' w-[15rem] h-[15rem] ml-3 rounded-[2rem] object-cover md:h-[16rem] lg:h-[15rem] lg:ml-14 xl:h-[18rem] xl:ml-12 2xl:h-[20rem] 2xl:w-[20rem]'/>
            </div>
            {/* Brand ingo */}
            <div className=' flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(1.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-[1.36rem] mr-10 font-bold uppercase text-primary ml-12 md:text-[1.8rem] lg:text-4xl 2xl:text-5xl'>Customer Satisfaction</motion.h1>
                <motion.p
                variants={FadeUp(1.8)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }} className='text-base mr-14 text-secondary ml-14  md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 2xl:px-1 2xl:ml-10'>
                Quality Assurance is not merely a checkpoint but a relentless pursuit of excellence at every phase. It’s the commitment to perfection and the precision in each step that defines true quality.
                </motion.p>
                <motion.p
                variants={FadeUp(1.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className='text-base mr-14 text-secondary ml-14 md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 2xl:px-1 2xl:ml-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, pariatur eligendi aliquam iusto esse a?</motion.p>
                {/* <motion.div 
                    variants={FadeUp(5.3)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
            </div>
        </div>
        {/* third image */}




        {/* fourth image */}
             <section>
        <div className='flex flex-col md:flex-row-reverse justify-center items-center'>
            <motion.img 
                initial={{opacity: 0, scale:0.3}}
                whileInView={{opacity: 1, scale:1}}
                transition={{type:"spring", stiffness:100, delay:2.5}}
                viewport={{once:true}}
                src={robustpacaging} 
                alt='' 
                className='w-[15rem] h-[15rem] ml-3  rounded-[2rem] object-cover md:h-[16rem] md:mr-12 lg:h-[15rem] lg:ml-4 xl:h-[18rem] 2xl:h-[20rem] 2xl:w-[20rem]'
            />
        
        <div className='flex flex-col justify-center mt-4 md:mt-0 md:mr-4'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px] '>
            <motion.h1 
                variants={FadeUp(2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-2xl ml-4 font-bold uppercase text-primary md:text-[1.8rem] lg:text-4xl 2xl:text-5xl md:ml-[5rem] lg:ml-10 xl:-ml-[5.2rem]'>
               Robust Packaging
            </motion.h1>
            
            <motion.p
                variants={FadeUp(2)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }} className='text-base px-16 text-secondary md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] md:ml-[5rem] lg:ml-10 xl:-ml-[9.2rem]'>
               Quality Assurance is not merely a checkpoint but a relentless pursuit of excellence at every phase. It’s the commitment to perfection and the precision in each step that defines true quality.
            </motion.p>
            
            <motion.p
                variants={FadeUp(2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className='text-base mr-16 ml-16 text-secondary md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] md:ml-[5rem] lg:ml-10 xl:-ml-[5.2rem]'>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, pariatur eligendi aliquam iusto esse a?
            </motion.p>
            
            {/* <motion.div 
                    variants={FadeUp(6.5)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center -ml-36 shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
           </div>
        </div>
        </section>
        {/* fourth image */}




        {/* fivth image */}
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Baneer image */}
            <div className=' flex justify-center items-center'>
                <motion.img 
                initial={{opacity: 0, scale:0.3}}
                whileInView={{opacity: 1, scale:1}}
                transition={{type:"spring", stiffness:100, delay:2.5}}
                viewport={{once:true}}
                src={ontimedilivery} alt='' className='w-[15rem] h-[15rem] ml-3 rounded-[2rem] object-cover md:h-[16rem] lg:h-[15rem] lg:ml-4 xl:h-[18rem] 2xl:h-[20rem] 2xl:w-[20rem]'/>
            </div>
            {/* Brand ingo */}
            <div className=' flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-2xl mr-10 font-bold uppercase text-primary ml-10 md:text-[1.8rem] lg:text-4xl 2xl:text-5xl'>On Time Delivery</motion.h1>
                <motion.p
                variants={FadeUp(2)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }} className='text-base mr-16 ml-16 text-secondary md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 2xl:-px-1 2xl:ml-10'>
                Quality Assurance is not merely a checkpoint but a relentless pursuit of excellence at every phase. It’s the commitment to perfection and the precision in each step that defines true quality.
                </motion.p>
                <motion.p
                variants={FadeUp(2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className='text-base mr-16 ml-16 text-secondary  md:text-base lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 2xl:-px-1 2xl:ml-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, pariatur eligendi aliquam iusto esse a?</motion.p>
                {/* <motion.div 
                    variants={FadeUp(7.4)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
            </div>
        </div>
        {/* fivth image */}
    </section>
  )
}

export default Banner;
