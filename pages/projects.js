import Pagetransition from "@/components/pagetransition";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Inter } from "next/font/google";
import Nord from "@/public/nord.jpeg";
import DocShield from "@/public/docshield.png";
import Invntry from "@/public/invntry.png";
import Image from "next/image";
import ImageCard from "@/components/imagecard";
const inter = Inter({ weight: "600", subsets: ["latin"] });
export default function Projects(props, ref) {
  return (
    <Pagetransition ref={ref}>
      <div className="flex flex-col min-w-full p-14 min-h-screen justify-center items-center gap-10 md:gap-14 lg:gap-20">
        <h1 className={`text-white text-3xl ${inter.className}`}>Projects</h1>
        <ScrollArea className="h-[30rem] w-full grow p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-10">
            <ImageCard
              description="Nord is a decentralized, privacy first streaming platform, it makes use of Web3 authentication to prevent data collection."
              title="Nord"
              img={Nord}
              link="https://nordweb.vercel.app"
            />
            <ImageCard
              description="DocShield is a decentralized, distributed storage platform that helps you secure and privately share important documents."
              title="DocShield"
              img={DocShield}
              link="https://docshield.vercel.app"
            />
            <ImageCard
              description="Invntry is a fast and modern, hospital logistics software built to solve the lifelong problem of outdated healthcare software"
              title="Invtry"
              img={Invntry}
              link="https://github.com/zubairmh/mhacks15"
            />
          </div>
        </ScrollArea>
      </div>
    </Pagetransition>
  );
}
