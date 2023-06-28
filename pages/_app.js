import "@/styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import DirectionProvider from "@/context/directioncontext";
import FloatingNavigator from "@/components/floatingnavagitor";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <FloatingNavigator>
      <DirectionProvider>
        <AnimatePresence initial={true} mode="wait">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </DirectionProvider>
    </FloatingNavigator>
  );
}
