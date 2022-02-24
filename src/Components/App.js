import { useState } from "react";
import "./App.css";
import ImageGrid from "./ImageGrid/ImageGrid";
import Model from "./Model/Model";
import UploadForm from "./UploadForm/UploadForm";

function App() {
  // storing the url of the selected img into useState variable
  const [selected, setSelected] = useState(null);
  return (
    <div className="App">
      <div className="header">
        <h1>Photo Gallery</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
          porttitor blandit.
        </h2>
      </div>

      <UploadForm></UploadForm>
      <ImageGrid setSelected={setSelected}></ImageGrid>
      {selected && (
        <Model selected={selected} setSelected={setSelected}></Model>
      )}
    </div>
  );
}

export default App;
