import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fdata = () => {
    const [data,setData] = useState([])
    // const objj= {}
    const[coor,setCoor]= useState({X:0,Y:0})

    const getData = async()=>{
        const URL = `https://jsonplaceholder.typicode.com/posts`
          let res = await axios.get(URL)
          return res.data
      }

      
      useEffect(()=>{
        getData().then((res)=>{
            console.log(res);
            setData(res)
        }).catch((err)=>{
            console.log('error io')
        })
      },[])

      const handlemove =(e)=>{
        setCoor({

            
            X:e.clientX,
            Y:e.clientY
        })
            
        
        
        // console.log(objj)
    }

  return (
    <div>

<div
      style={{ height: '100vh', border: '1px solid black' }}
      onMouseMove={handlemove}
    >
      <p>Mouse position: {coor.X}, {coor.Y}</p>
    </div>
    
   
      <h1>DATA</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'5px'}}>

      {
          data.map((el)=>{
              return <div key={el.id} style={{border:'1px solid black', columnGap:'25px',rowGap:'25px',borderRadius:'9px'}}>
                    <h3>ID-User: {el.userId}  </h3>
                <h4>{el.title}</h4>
            </div>
})

}
    </div>
</div>
  )
}

export default Fdata
