import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {Inter, Cabin} from "next/font/google"

const inter=Inter({weight:"500", subsets:["latin"]})
const rubik=Cabin({weight:"700", subsets:["latin"]})
export default function Hero() {
  return (
    <div className="grow justify-center flex flex-col items-center gap-4 text-gray-300">
      <Avatar className="h-32 w-32 border-2 bord-solid bord-white">
        <AvatarImage src="https://github.com/zubairmh.png" />
        <AvatarFallback>ZM</AvatarFallback>
      </Avatar>
      <span className={rubik.className}>Hi, I'm Zubair 👋🏻</span>
      <h1 className={`text-5xl text-center ${inter.className} tracking-wide leading-tight from-gray-300  to-gray-600 bg-gradient-to-r bg-clip-text text-transparent`}>Building modern and <br/> scalable applications <br/> for the future</h1>
    </div>
  );
}
