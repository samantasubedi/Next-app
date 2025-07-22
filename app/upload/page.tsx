"use client"
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';

const Uploadpage = () => {
  return (
    <div>
      <CldUploadWidget uploadPreset='uploadpreset123'>
        {({open}) => (
          <button onClick={() => open()} className='btn btn-primary'>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  )
}

export default Uploadpage