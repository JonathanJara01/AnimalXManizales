import ReactPlayer from "react-player";
import Video1 from '../assets/VideoInvitacion.mp4'


const Video = () => {
  return (
    <div>
      <ReactPlayer
        url={Video1}  // Corrige la importación aquí
        width='100%'
        height='100%'
        controls={true}  // Puedes usar controls sin comillas para indicar que es un valor booleano
        playing={true}
        volume={0}
      />
    </div>
  );
}

export default Video;
