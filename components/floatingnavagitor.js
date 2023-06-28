import Link from "next/link";
export default function FloatingNavigator({ children }) {
  return (
    <div className="overflow-hidden">
      <div className="absolute border border-solid border-white w-8 h-20 right-3 top-[10%] lg:top-[45%] rounded-lg z-50">
        <div className="flex flex-col h-full justify-around items-center">
          <Link
            className="bg-white w-3 h-3 rounded-full hover:scale-150 delay-50 ease-in-out transition"
            href="/"
          />
          <Link
            className="bg-white w-3 h-3 rounded-full hover:scale-150 delay-50 ease-in-out transition"
            href="/projects"
          />
          <Link
            className="bg-white w-3 h-3 rounded-full hover:scale-150 delay-50 ease-in-out transition"
            href="/socials"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
