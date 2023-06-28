import Pagetransition from "@/components/pagetransition";
import { FaGithub, FaTwitter, FaLinkedin, FaBlogger } from "react-icons/fa";
import { Montserrat } from "next/font/google";
const mont=Montserrat({weight:"700", subsets:["latin"]})
import Link from "next/link";
export default function Socials(props, ref) {
    return (
        <Pagetransition ref={ref}>
            <div className="flex flex-col min-h-screen items-center justify-center text-white space-y-4">
                <h1 className={`text-4xl ${mont.className}`}>Socials</h1>
                <div className="flex flex-row gap-8 justify-center items-center text-white">
                    <Link target="_blank" href="https://github.com/zubairmh"><FaGithub className="hover:text-gray-300" size={64}/></Link>
                    <Link target="_blank" href="https://twitter.com/zubairmh_"><FaTwitter className="hover:text-gray-300" size={64}/></Link>
                    <Link target="_blank" href="https://linkedin.com/in/zubairmh"><FaLinkedin className="hover:text-gray-300" size={64}/></Link>
                    <Link target="_blank" href="https://zubairmh.xyz"><FaBlogger className="hover:text-gray-300" size={64}/></Link>
                </div>
            </div>

        </Pagetransition>

    )
}