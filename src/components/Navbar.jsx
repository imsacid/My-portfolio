import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {



  return (
    <nav className=" mb-20 flex items-center justify-between py-6">

        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="Logo"/> */}
            <h1 className="text-4xl font-bold  text-cyan-100">Ibr<span className="text-cyan-700">a.<span className="text-cyan-300">..</span></span></h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
            
            <a className="hover:text-cyan-300" href="https://www.linkedin.com/in/imsacid/"><FaLinkedin/></a>
            <a className="hover:text-cyan-300" href="https://github.com/imsacid"><FaGithub/></a>
            <a className="hover:text-cyan-300" href="https://www.instagram.com/thereal.s.g/"><FaInstagram/> </a>
            <a className="hover:text-cyan-300" href="https://x.com/imsacid"><FaTwitter/></a>
        </div>
        
    </nav>
);
};

export default Navbar
