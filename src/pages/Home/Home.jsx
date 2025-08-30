import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import TrendingSection from "../../components/TrendingSection/TrendingSection";
import NewArrival from "../../components/NewArrival/NewArrival";
import { motion } from "framer-motion";
import EmailNotify from "../../components/EmailNotify/EmailNotify";

function Home() {
  return (
    <div>
      <div className="ScrollImg">
        <Carousel />
      </div>
      <TrendingSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <NewArrival />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <EmailNotify />
      </motion.div>
    </div>
  );
}

export default Home;
