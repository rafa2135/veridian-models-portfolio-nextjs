import Image from "next/image";
import { FaInstagram, FaEnvelope } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

const ContactAside = () => {
  return (
    <div className="w-full p-4 flex flex-col  justify-center items-center bg-black">
      <div
        className="
            relative w-60 h-32
            lg:w-96"
      >
        <Image
          src="/logoName.png"
          alt="menu"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-white text-base text-center">+000 0000-0000</p>
        <div className="flex space-x-2 mt-2">
          <Link href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram
              size={20}
              className="hover:text-gray-300 text-white transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.tiktok.com/" aria-label="TikTok">
            <SiTiktok
              size={20}
              className="hover:text-gray-300  text-white transition-colors duration-200"
            />
          </Link>
          <Link href="mailto:test@test.com" aria-label="Email">
            <FaEnvelope
              size={20}
              className="hover:text-gray-300 text-white transition-colors duration-200"
            />
          </Link>
        </div>
        <p className="text-white text-base text-center mt-2">test@test.com</p>
      </div>
    </div>
  );
};
export default ContactAside;
