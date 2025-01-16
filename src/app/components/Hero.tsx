import Image from "next/image";
//this is a component that will be used in the header it contains the hero image
const Hero = () => {
  return (
    <div
      className="
        relative w-full h-[50vh] 
        mx-auto max-w-screen-xl items-center
        md:h-[60vh]
        lg:h-[70vh]
        "
    >
      <Image
        src="/hero.jpg"
        alt="hero iamge"
        fill
        //style={{ objectFit: "cover" }}
        priority
      />
      ;
      <div
        className="
            absolute bottom-0 left-0
            w-full p-8
            flex flex-col items-center justify-center"
      >
        <h1
          className="
        text-4xl text-center font-bold text-white mb-0
        md:text-6xl
        lg:text-7xl"
        >
          Veridian Models
        </h1>
        <p
          className="text-xs 
            md:text-xl text-white text-center"
        >
          El rostro profesional que tu evento necesita
        </p>
      </div>
    </div>
  );
};

export default Hero;
