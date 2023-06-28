import Image from "next/image"
import Link from "next/link"
export default function ImageCard(props) { 
    return (
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl p-[0.1rem] ">
        <div className="flex flex-col grow h-[26rem] rounded-t-xl bg-[#101010]">
          <Image
            width={1044}
            height={598}
            placeholder="blur"
            alt={props.title}
            className="aspect-video object-fill rounded-xl"
            src={props.img}
          />
          <h1 className="pt-3 pl-3 font-bold text-3xl">{props.title}</h1>
          <p className="p-3">
              {props.description}
          </p>
        </div>
        <footer className="pl-2 pt-1 pb-1 bg-[#1a1a1a] rounded-b-xl">Visit: <Link className="text-sky-800" href={props.link}>here</Link></footer>
      </div>
    )
}