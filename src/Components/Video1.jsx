import React from 'react'
import ReactPlayer from 'react-player'
import VideoHola from '../assets/HolaManizales.mp4'


const Video1 = () => {
  return (
    <div>
        <ReactPlayer
        url={VideoHola}  // Corrige la importación aquí
        width='100%'
        height='100%'
        controls={true}  // Puedes usar controls sin comillas para indicar que es un valor booleano
        playing={true}
        volume={0}
      />
    </div>
  )
}

export default Video1