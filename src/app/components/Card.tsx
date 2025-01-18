import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ src, alt }) => {
  return (
    <div
      className="relative w-full 
    h-48
    md:h-[45vh]    
    xl:h-[55vh]"
    >
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default Card;
