import Image from "next/image";
export default function Cards({props}) {

    return (
      
    <div className="max-w-sm overflow-hidden shadow-lg mx-auto bg-landing">
    
    
    
      
      <Image
              src={props.url}
              alt="card_image"
              width={700}
              height={30}
              priority
      />
    
    <div className="mx-6 my-4 border-b border-gray-light ">
      <div className="font-medium text-base text-gray-darker mb-4">{props.cardname}</div>
      <p className="font-normal text-gray-dark text-sm mb-2">
       {props.description}
      </p>
      <p className="font-normal text-gray-dark text-sm mb-4">
       {props.endline}
      </p>
    </div>
    <div className="mx-6 my-4 flex">
      <div className="flex-grow">
       
      </div>
    
    </div>
  </div>
  
  
  
  
  
    )
  }
  
  