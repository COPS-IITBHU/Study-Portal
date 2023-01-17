import React from 'react'
import { AiFillFilePdf } from "react-icons/ai";
import { MdDownload } from "react-icons/md";

const Book = () => {
  return (
    <div className='w-3/4 my-3 bg-mauve flex justify-between m-auto hover:bg-blush '>
      <div className='flex align-middle justify-center'>
        <span className='m-2 p-2'>
          <AiFillFilePdf size={50} />
        </span>
        <span className='my-auto p-2'>Book 1</span>
      </div>
      <div className='my-auto p-2 hover:cursor-pointer'>
        <MdDownload size={50}/>
      </div>
    </div>
  )
}

export default Book;