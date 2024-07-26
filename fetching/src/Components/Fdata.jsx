import React, { useEffect } from 'react'
import axios from 'axios'

const Fdata = () => {
    const URL = `https://jsonplaceholder.typicode.com/posts`
    const getData = async()=>{
          let res = await axios.get(URL)
          return res.data
      }

      
      useEffect(()=>{
        getData().then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log('error is there')
        })
      })

  return (
    <div>
      
    </div>
  )
}

export default Fdata
