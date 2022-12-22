import React from 'react'
import Image from 'next/image'
export default function About() {
    const about_content = {
        about_image: {
            path: "/landing/about.png",
            alt: "About-Image",
        }
    }
    return (
        <div className='bg-mauve lg:flex  mt-2 max-md:flex-col'>
            <div className='basis-1/2 shrink-0 grow-0 h-full ' >
                <Image
                    className="lg:rounded-br-full max-md:rounded-none"
                    src={about_content?.about_image?.path}
                    alt={about_content?.about_image?.alt}
                    width={750}
                    height={100}
                    priority
                />
            </div>
            <div className='flex-col'>
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit rerum explicabo veniam. Sapiente doloremque repudiandae libero optio fugiat aliquam hic, iure impedit illo architecto consequatur quasi corrupti pariatur esse?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias debitis perferendis blanditiis. Quam nostrum, necessitatibus, quibusdam corporis error, asperiores delectus illo illum itaque ad dolores quis consequatur porro eaque saepe?
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    )
}

