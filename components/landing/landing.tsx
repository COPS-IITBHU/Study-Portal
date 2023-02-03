import animation from "./105040-course.json";
import Lottie from "lottie-react";

export default function Landing_Top() {
  const hero_content = {
    h1: "IIT BHU",
    h2: "Study Portal",
    description:
      "A One Stop solution to all your academic ailments. Lorem ipsum dolor sit amet consectetur adipisicing elit.A One Stop solution to all your academic ailments. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    hero_image: {
      alt: "Hero Image",
      path: "/landing/Untitled.png",
    },
  };
  return (
    <>
      <section className="flex flex-col justify-around items-center lg:flex-row  bg-berry">
          <div className="ml-5">
            <h1
              className={`text-5xl font-bold lg:text-7xl my-auto mx-auto leading-loose`}
            >
              {hero_content?.h1}
            </h1>

            <h2 className={`text-5xl font-bold  lg:text-7xl leading-loose`}
            >
              {hero_content?.h2}
            </h2>
            <br />
            <p className="max-w-lg text-xl leading-loose">
              {hero_content?.description}
            </p>
          </div>

          <div className="bg-white lg:rounded-l-full mr-0">
            <Lottie animationData={animation} />
          </div>
      </section>

    </>
  );
}