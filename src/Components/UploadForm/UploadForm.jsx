import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import './UploadForm.css';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const types = ['image/jpeg', 'image/png'];

  const handleUpload = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select an image(png or jpeg)");
    }
  };

  return (
    <form className="upload">
      <label>
        <input type="file" onChange={handleUpload}></input>
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className='error'>{error}</div>}
        {file && <h1>{file.name}</h1>}
        {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
        
      </div>
    </form>
  );
}

export default UploadForm;
