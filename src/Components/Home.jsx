
import imagenHome from '../assets/cropped-logo-diagonal-1536x672.png';
import imagenLogo from '../assets/AnimalX-1Recurso-1.svg'
import Logo from './Logo';
import LogoPrincipal from '../assets/logosssRecurso 3@4x.png'
import Bombea from '../assets/BombeaAnimalX.jpg'
import AnimalIngles from '../assets/AnimalXingles.jpg'

//CSS
import style from './home.module.css';
import Video from './Video';
import Video1 from './Video1';
import Video2 from './Video2';
import Footer from './Footer';


const Home = () => {
  return (
  <div>
    <div className="container ">
      <div className="d-flex align-items-center justify-content-center animate__animated animate__flip">
          <img src={imagenLogo} height='200px' alt="Logo" />
      </div>
            {/* VIDEO E IMAGEN ANIMALX */}
      <div className="d-flex align-items-center justify-content-center animate__animated animate__slideInDown">
          <Video/>
        <div>
          <img src={imagenHome} height='350px'/>
        </div>
      </div>
            {/* VideoHola */}
            <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <h2 className="col-12 text-center d-flex align-items-center justify-content-center text-white">QUIENES</h2>
              <h1 className="col-12 text-center d-flex align-items-center justify-content-center text-white">SOMOS</h1>
            </div>
            <div className="row">
              <h5 className="col-12 text-center text-white " >Somos el MEJOR SISTEMA DE ENTRENAMIENTO DEL MUNDO, con más de 13 años de experiencia hemos cambiado más de 100.000 vidas a nivel internacional con el sistema mas efectivo de entrenamiento físico del mundo.</h5>
            </div>
            <Video1/>
            </div>
            {/* IMAGEN REFOCUS */}
            <Logo/>
            <div className="d-flex align-items-center justify-content-center">
            <img src={Bombea} height='350px' alt="Bombea" />
            <Video2/>
            <img src={AnimalIngles} height='350px' alt="AnimalIngles" />
            </div>
        </div>
        <Footer/>
    </div>
  )
};

export default Home;