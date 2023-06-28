import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Inter, Cabin } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ weight: "500", subsets: ["latin"] });
const rubik = Cabin({ weight: "700", subsets: ["latin"] });
export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="grow justify-center flex flex-col items-center gap-4 text-gray-300"
    >
      <Avatar className="h-32 w-32 border-2 bord-solid bord-white">
        <AvatarImage src="https://github.com/zubairmh.png" />
        <AvatarFallback>ZM</AvatarFallback>
      </Avatar>
      <span className={rubik.className}>Hi, I&apos;m Zubair 👋🏻</span>
      <h1
        className={`text-5xl text-center ${inter.className} tracking-wide leading-tight from-white  to-gray-700 bg-gradient-to-bl bg-clip-text text-transparent`}
      >
        Building modern and <br /> scalable applications <br /> for the future
      </h1>
    </motion.div>
  );
}
