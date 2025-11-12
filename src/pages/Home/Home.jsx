import { motion } from "motion/react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 5 } }}
        className="bg-white shadow dark:bg-gray-800 dark:shadow-none dark:text-gray-100"
      >
        <h3>Name: Aspin Chakma</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odio
          alias molestias cumque dolores ea fugiat ex id nemo voluptatibus
          architecto iure placeat asperiores similique consectetur repudiandae
          amet accusamus accusantium.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
