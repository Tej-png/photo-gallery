import "./App.css";
import ImageGrid from "./ImageGrid/ImageGrid";
import UploadForm from "./UploadForm/UploadForm";

function App() {
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <UploadForm></UploadForm>
      <ImageGrid></ImageGrid>
    </div>
  );
}

export default App;
