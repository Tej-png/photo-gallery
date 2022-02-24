import { useState } from "react";
import "./App.css";
import ImageGrid from "./ImageGrid/ImageGrid";
import Model from "./Model/Model";
import UploadForm from "./UploadForm/UploadForm";

function App() {
  // storing the url of the selected img into useState variable
  const [selected, setSelected] = useState(null)
  return (
    <div className="App">
      <h1 className="header">Photo Gallery</h1>
      <UploadForm></UploadForm>
      <ImageGrid setSelected={setSelected}></ImageGrid>
      {selected  && <Model selected={selected} setSelected={setSelected}></Model>}
    </div>
  );
}

export default App;
