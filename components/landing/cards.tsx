import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import animation1 from "./77366-engineering.json";
import animation2 from "./72264-certificate.json";
import animation3 from "./77096-service.json";
export default function Cards({ props }) {
    const index=props.index;
    var animation,css;
    if(index==1){
      animation=animation1;
      css= 'flex flex-col justify-around items-center shadow-xl bg-mauve rounded-l-xl lg:mx-3 my-2';
    }else if(index==2){
      animation=animation2;
      css='flex flex-col justify-around items-center shadow-xl bg-berry lg:mx-3 my-2';
    }else {
      animation=animation3;
      css='flex flex-col justify-around items-center shadow-xl bg-mauve rounded-r-xl lg:mx-3 my-2';
    }
  return (

    <div className={css}>
      <div className="">
      <Lottie animationData={animation} />
      </div>
      

      <div className="text-center">
        <div className="">
        <h1 className="text-2xl font-bold lg:text-3xl">
          {props.cardname}
        </h1>
        </div>
        
        <div className="">
          <p className="font-montserrat leading-loose">
            {props.description}
          </p>
          <p className="font-poppins leading-relaxed">
            {props.endline}
          </p>
        </div>
      </div>
      <div className="rounded-lg text-white mb-2">
        <Link href="">
          <button className="bg-black hover:bg-blue font-bold py-2 px-4 rounded-full">
            Explore More...
          </button>
        </Link>
      </div>
    </div>





  )
}

