import { projectFireStore } from "../firebase/config";
import React ,{ useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";

const useFirestore = (currentCollection) => {
    // storing images url in a state variable
    const [docs, setDocs] = useState([])

    useEffect(() => {
        // makin query into the firestore database to retrive the currentCollection
        const q = query(collection(projectFireStore, currentCollection))
        // firestore will take the snapshot of all the data
        const unsub = onSnapshot(q, (snap)=>{
            const documents = []
            // loop the the each document in the data
            snap.forEach(doc => {
                // pushing the data in object form ('...' will store all the keys inside the current document)
                documents.push({...doc.data(), id: doc.id})
            })
            // sorting the data according to the time it was uploaded 
            setDocs(documents.sort((a, b) => {return b.createAt - a.createAt}))
        })
        // the function will only run when the need is
        return ()=> unsub()
    }, [currentCollection])
  return {docs}
}

export default useFirestore