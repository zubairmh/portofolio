import Hero from "@/components/hero";
import Pagetransition from "@/components/pagetransition";
export default function Home(props, ref) {
  return (
      <Pagetransition ref={ref}>
        <div className="flex flex-col min-h-screen">
          <Hero />
        </div>
      </Pagetransition>
  );
}
