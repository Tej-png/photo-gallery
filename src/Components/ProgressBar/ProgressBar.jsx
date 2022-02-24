import React, {useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import './ProgressBar.css'
import {motion} from 'framer-motion'

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
      
    <motion.div className='progress-bar' initial={{width: 0}} animate={{width:progress+'%'}}></motion.div>
  )
}

export default ProgressBar