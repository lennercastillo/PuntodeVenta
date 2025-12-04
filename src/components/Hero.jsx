import { FaDownload, FaArrowRight, FaWindows, FaShieldAlt, FaRocket, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          
          {/*<div className="hero-badge">
            <FaRocket className="badge-icon" />
            <span>Sistema 2024 - Versión Profesional</span>
          </div>*/}
          
          <h1 className="hero-title">
            Sistema de Inventario 
            <span className="hero-title-highlight">Empresarial</span>
          </h1>
          
          <p className="hero-subtitle">
            Solución integral de gestión de inventario diseñada para empresas que buscan 
            eficiencia, control total y reportes avanzados. Base de datos local segura 
            con interfaz intuitiva.
          </p>
          
          <div className="hero-buttons">
            <a 
              href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-hero"
            >
              <FaDownload className="btn-icon" />
              Descargar para Windows
              <FaArrowRight className="btn-arrow" />
            </a>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <FaWindows className="feature-icon" />
              <span>Windows 10/11 Compatible</span>
            </div>
            <div className="hero-feature">
              <FaRocket className="feature-icon" />
              <span>Instalación Rápida</span>
            </div>
            <div className="hero-feature">
              <FaShieldAlt className="feature-icon" />
              <span>100% Seguro</span>
            </div>
            <div className="hero-feature">
              <FaCheckCircle className="feature-icon" />
              <span>Sistema Completo</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="app-preview">
                <img src="/assets/images/iniciopv.png" alt="Vista previa del sistema" className="app-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
