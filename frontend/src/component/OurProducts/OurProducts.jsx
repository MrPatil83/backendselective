import React from 'react';
import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
import glass from "../../assets/ourproduct/glass.webp";
import officepartition from "../../assets/ourproduct/officepatition.webp";
import queuestand from "../../assets/ourproduct/queuestand.webp";
import { motion} from "framer-motion";
import { FadeLeft } from '../../utility/animation';

const ProductData = [
  {
    id: 1,
    title: "Invisible Grill",
    link: "",
    Description: "lorem dcgdsuyc hcydgugu",
    img: invisiblegrill,
    delay:0.3,
  },
  {
    id: 2,
    title: "Glass Railing",
    link: "",
    Description: "lorem dcgdsuyc hcydgugu",
    img: glass,
    delay:0.6,
  },
  {
    id: 3,
    title: "Office Partition",
    link: "",
    Description: "lorem dcgdsuyc hcydgugu scgsuydd dhvdusgvys dsgygvu",
    img: officepartition,
    delay:0.9,
  },
  {
    id: 4,
    title: "Queue stand",
    link: "",
    Description: "lorem dcgdsuyc hcydgugu",
    img: queuestand,
    delay:1.2,
  },
];

const OurProducts = () => {
  return (
    // <section>
    //   <div className="container pt-12 pb-20 overflow-hidden mb-[10rem]">
    //     <motion.h1 
    //     initial={{opacity:0,x:-200}}
    //     whileInView={{opacity:1,x:0}}
    //     transition={{duration:1,delay:0.3}}
    //     className="text-3xl font-semibold text-left pb-10 uppercase">Our Products</motion.h1>
    //     <div className=' h-[15rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6' >
    //       {ProductData.map((product) => (
    //         <motion.div 
    //         variants={FadeLeft(product.delay)}
    //         initial="hidden"
    //         whileInView={"visible"}
    //         whileHover={{scale:1.1}}
    //         className='bg-white cursor-pointer rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] text-center gap-3 md:w-[11rem] lg:w-[13rem] xl:w-full' key={product.id}>
    //           <img src={product.img} alt={product.title} className=' h-[12rem] w-[18rem] m-3 mb-[2rem]  scale-110 transform-translate-y-6 rounded-2xl md:h-[9rem] md:w-[9rem] md:m-2 md:-ml-[0.2px]  lg:h-[8.5rem] lg:w-[10.2rem] lg:m-2 xl:h-[10rem] xl:w-[16rem] xl:m-2 xl:ml-3' />
    //           <div>
    //             <h1 className='text-lg font-semibold lg:text-sm'>{product.title}</h1>
    //             <h1 className='text-sm font-semibold text-primary lg:text-sm'>{product.Description}</h1>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section>
  <div className="container pt-12 pb-20 overflow-hidden font-poppins">
    <motion.h1 
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-3xl font-semibold text-left pb-10 uppercase"
    >
      Our Products
    </motion.h1>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
      {ProductData.map((product) => (
        <motion.div 
          variants={FadeLeft(product.delay)}
          initial="hidden"
          whileInView={"visible"}
          whileHover={{ scale: 1.1 }}
          className="bg-white cursor-pointer rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] text-center gap-3 sm:w-full md:w-full lg:w-[13rem] xl:w-full"
          key={product.id}
        >
          <img 
            src={product.img} 
            alt={product.title} 
            className="h-[12rem] w-[18rem] m-3 mb-[2rem] scale-110 transform-translate-y-6 rounded-2xl sm:h-[12rem] sm:w-[19rem] md:h-[10rem] md:w-[18rem] md:m-3 lg:h-[8.5rem] lg:w-[10.2rem] lg:m-2 xl:h-[12rem] xl:w-[16rem] xl:m-2 xl:-mt-7 xl:ml-3 2xl:h-[13rem]" 
          />
          <div>
            <h1 className="text-lg font-semibold xl:text-base 2xl:text-base 2xl:mt-4">{product.title}</h1>
            <h1 className="text-sm  lg:text-sm xl:text-base 2xl:text-base">{product.Description}</h1>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default OurProducts;
