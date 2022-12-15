import Image from "next/image";
import Link from "next/link";
export default function Cards({ props }) {

  return (

    <div className="max-w-sm overflow-hidden shadow-lg mx-auto my-auto bg-mauve">




      <Image
        src={props.url}
        alt="card_image"
        width={700}
        height={30}
        priority
      />

      <div className="mx-4 my-4 border-b border-gray-light ">
        <div className="font-medium text-base text-gray-darker mb-4">{props.cardname}</div>
        <p className="font-normal text-gray-dark text-sm mb-2">
          {props.description}
        </p>
        <p className="font-normal text-gray-dark text-sm mb-4">
          {props.endline}
        </p>
      </div>
      <div className="mx-4 my-4 flex text-blush">
        <Link href=""><b>Explore More</b></Link>
      </div>
    </div>





  )
}

