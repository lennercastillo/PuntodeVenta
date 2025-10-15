function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = () => {
    window.open('', '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sistema de Inventario</h4>
            <p>Software profesional de escritorio para Windows que transforma la gestión de inventarios de manera eficiente y organizada.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('inicio')} className="footer-link-btn">Inicio</button></li>
              <li><button onClick={() => scrollToSection('precios')} className="footer-link-btn">Precios</button></li>
              <li><a href="/ayuda" className="footer-link">Ayuda</a></li>
              <li><button onClick={handleDownloadClick} className="footer-link-btn">Descargar</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Requisitos del Sistema</h4>
            <p>Windows 10/11 (64-bit)</p>
            <p>4GB RAM mínimo</p>
            <p>500MB espacio libre</p>
            <p>Soporte: soporte@sistemainventario.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Descarga</h4>
            <div className="download-info">
              <p>✅ Compatible con Windows</p>
              <p>✅ Instalación automática</p>
              <p>✅ Base de datos local</p>
              <p>✅ Sistema completo</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sistema de Inventario para Windows. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
