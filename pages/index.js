import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { db } from '../firebase'
import { messagePrefix } from '@ethersproject/hash'

export default function Home() {
  const router = useRouter()
  const inputRef = useRef(null)
  const sendPost = (e) => {}
    
    


  
  
  
  

  return (
    <div>
      <div>
        Name
        <input ref={inputRef} />
      </div>
      <div>
        Last Name
        <input ref={inputRef}/>
      </div>
      <div>
        Age
        <input ref={inputRef}/>

      </div>
      <button hidden type='submit'  onClick={sendPost}>Submit</button>

      
     
      
        
    </div>
    
  

  )
}
