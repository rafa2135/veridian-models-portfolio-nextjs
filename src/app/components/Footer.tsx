import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-6">
      <div
        className="container mx-auto max-w-screen-xl flex flex-wrap items-center px-4 
      md:justify-between "
      >
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <Link href="https://wa.me/+1234567890" aria-label="WhatsApp">
            <FaWhatsapp
              size={24}
              className="hover:text-gray-300 transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram
              size={24}
              className="hover:text-gray-300 transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.tiktok.com/" aria-label="TikTok">
            <SiTiktok
              size={24}
              className="hover:text-gray-300 transition-colors duration-200"
            />
          </Link>
          <Link href="mailto:test@test.com" aria-label="Email">
            <FaEnvelope
              size={24}
              className="hover:text-gray-300 transition-colors duration-200"
            />
          </Link>
        </div>

        {/* Footer Text */}
        <div className="text-sm mt-2">
          &copy; Veridian Models {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
