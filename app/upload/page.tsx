"use client"
import {useState} from 'react'
import { CldUploadWidget, CloudinaryUploadWidgetInfo,CldImage } from 'next-cloudinary';

interface cloudnaryresult{
  info:{public_id:string}
}

const Uploadpage = () => {const [imageid,setimageid]=useState<string>("")
  return (
    <div>
     
      <CldUploadWidget uploadPreset='uploadpreset123'
      onUploadAdded={(result:cloudnaryresult)=>{
       
        setimageid(result.info.public_id)
        console.log(result)}}
      >
        {({open}) => (
          <button onClick={() => open()} className='btn btn-primary'>
            Upload
          </button>
        )}
      </CldUploadWidget>
  
    { imageid &&  <CldImage alt="uploaded image" src={imageid} height={200} width={500}></CldImage>}
    </div>
  )
}

export default Uploadpage