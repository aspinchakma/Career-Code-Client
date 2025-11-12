import { motion } from "motion/react";
import bannerOne from "../../assets/bannerImage/banner1.png";
import bannerTwo from "../../assets/bannerImage/banner2.png";
import bannerThree from "../../assets/bannerImage/icon-bottom-banner.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen dark:bg-gray-800 dark:text-gray-100">
      <div className="w-[95%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <div>
          <motion.h1
            initial={{ translateY: -100 }}
            animate={{ translateY: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl font-bold"
          >
            Latest Jobs For You!
          </motion.h1>
          <motion.span
            className="text-3xl font-bold"
            animate={{
              color: [
                "#009432",
                "#C4E538",
                "#006266",
                "#F79F1F",
                "#1B1464",
                "#009432",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Jobs
          </motion.span>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1 } }}
            className="py-6"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="lg:block hidden">
          <motion.img
            animate={{ y: [70, 0, 70] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            src={bannerOne}
            alt=""
          />
          <motion.img
            animate={{ x: [170, 270, 170] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeIn",
              delay: 1,
            }}
            src={bannerTwo}
            alt=""
          />
          <motion.img
            animate={{ y: [-200, 0, -200], x: [100] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            src={bannerThree}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
