import React from 'react'

export function VideoCom(){
  return (
      <video autoPlay="autoplay" loop style={{ width: '100%' }}>
        <source src="/assets/Video/VideoCartoon.mp4" type="video/mp4" />
      </video>
   )
 }