import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex py-4 items-center justify-center bg-slate-700">
      <ul className="flex gap-3">
        <li className="cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
          <a href="#" target="_blank">
            <FaFacebook size={20} color="white" />
          </a>
        </li>
        <li className="cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
          <a href="#" target="_blank">
            <FaInstagram size={20} color="white" />
          </a>
        </li>

        <li className="cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
          <a href="#" target="_blank">
            <FaLinkedin size={20} color="white" />
          </a>
        </li>

        <li className="cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
          <a href="https://x.com/EliasBelay62961" target="_blank">
            <FaTwitter size={20} color="white" />
          </a>
        </li>

        <li className="cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
          <a href="https://t.me/Eliasdevstack" target="_blank">
            <FaTelegram size={20} color="white" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
