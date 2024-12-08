import Image from "next/image";


export default function Product() {

    return(
        
   <div className="w-[90vw] h-auto  flex justify-center  items-center mx-auto py-20 flex-col ">

     <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
         <div className="  w-full sm:w-1/2 lg:w-1/3 ">
              <Image src={"/Products (1).png"} alt="Logo" width={400} height={400} />
            </div>
            <div className=" w-auto sm:w-1/2 flex  items-start flex-col gap-5 font-bold  ">
              <p></p>
              <span className="text-5xl">Library Stool</span>
              <span className="text-5xl">Chair</span>
              <span className="text-5xl"></span>
         
              <div className="relative w-max">
                  <Image
                      src="/Group 51.png"
                      alt="Shop Now"
                      width={120}
                      height={120}
                      className=""
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
             $20.00 USD
           </span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis voluptatum ut, tenetur nesciunt, praesentium consequatur dolorem, veritatis qui veniam aliquam et maiores reiciendis! A?</p>
              <div className="w-max">
                  <Image
                      src="/Button.png"
                      alt="Shop Now"
                      width={120}
                      height={120}
                      className=""
                    />
              </div>
            </div>
     </div>
     <div>
         <div className="my-24 font-bold flex justify-between">
           <div>
               <p className="text-3xl">Featured Products</p>
           </div>
           <div>
               <button
                     type="submit"
                     className="w-[30vw] sm:w-[7vw] border-b-2 border-black focus:outline-none focus:ring-0 text-black"
                   >
                     View all
                   </button>
           </div>
         </div>
            <div>
            <div className="flex flex-col sm:flex-nowrap sm:flex-row justify-center gap-12 mx-auto my-5 overflow-x-auto">
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src={"/chaircousin.png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src={"/Products.png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src={"/Image (6).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src={"/Products (2).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src={"/Image (4).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
         </div>
         
            </div>
      </div>
     </div>
    );

}