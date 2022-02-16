import React from "react";
import useFirestore from "../../hooks/useFirestore";

const ImageGrid = () => {
  //retriving the data from with the help of useFirestore hook
  const { docs } = useFirestore("images");

  return (
    <div className='image-grid'>
      {docs && docs.map(doc => (
        <img src={doc && doc.url} alt='uplaoded img'></img>
      ))}
    </div>
  );
};

export default ImageGrid;
