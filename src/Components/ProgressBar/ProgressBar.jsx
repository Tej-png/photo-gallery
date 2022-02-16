import React, {useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import './ProgressBar.css'

const ProgressBar = ({file, setFile}) => {
    // destructuring return data from the useStorage hook
    const {url, progress} = useStorage(file)
    console.log(progress)
    useEffect(() =>{
        if(url){
            setFile(null)
        }
    },[url, setFile])
  return (
      
    <div className='progress-bar' style={{width: progress+'%'}}></div>
  )
}

export default ProgressBar