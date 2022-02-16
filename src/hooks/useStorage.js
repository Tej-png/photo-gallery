import { projectStorage, projectFireStore, timestamp } from "../firebase/config";
import { useState, useEffect } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Creating storage refrence for firebase storage
    const storage = projectStorage.getStorage()
    const storageRef = projectStorage.ref(storage, file.name);
    const uploadTask = projectStorage.uploadBytesResumable(storageRef, file)
    //creating images collection for firetore databse
    const collectionRef = collection(projectFireStore, 'images')

    uploadTask.on(
      // register three observations
      //1. 'state_changed' observer called when ever the state changes
      //2. error observer called incase any error occured
      //3. completion observer called on successful completion
      "state_changed",
      (snap) => {
          // progress of the uploading file
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
          // if any error occured while uploading file
        setError(err);
      },
      async () => {
          // get the file url from cloud storage
        const url = await projectStorage.getDownloadURL(uploadTask.snapshot.ref);
        const createAt = Timestamp.fromDate(new Date())
        // uploading the url of the images in the firestore database
        addDoc(collectionRef, {url,createAt })
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;