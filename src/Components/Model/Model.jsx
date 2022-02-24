import React from "react";
import "./Model.css";
import { motion } from "framer-motion";

const Model = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    // img will only close if the cicked on the img background who's class is 'img-model'
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        className="model-img"
        src={selected}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      ></motion.img>
    </motion.div>
  );
};

export default Model;
