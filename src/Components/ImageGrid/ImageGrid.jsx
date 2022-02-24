import React from "react";
import useFirestore from "../../hooks/useFirestore";
import "./ImageGrid.css";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelected }) => {
  //retriving the data with the help of useFirestore hook
  const { docs } = useFirestore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          // setting the url of the selected image
          <motion.div
            className="img-wrapper"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc && doc.url}
              onClick={() => setSelected(doc.url)}
              alt="uplaoded img"
            ></motion.img>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
