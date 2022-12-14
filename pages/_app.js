import Layout from "../components/Layout";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ParallaxProvider>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </AnimatePresence>
    </ParallaxProvider>
  );
}

export default MyApp;
