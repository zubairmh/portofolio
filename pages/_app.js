import "@/styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import FloatingNavigator from "@/components/floatingnavagitor";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <FloatingNavigator>
      <AnimatePresence initial={false} mode="popLayout">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </FloatingNavigator>
  );
}
