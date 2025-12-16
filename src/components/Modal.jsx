import { useEffect } from 'react';
import { FaTimes, FaDownload, FaArrowLeft, FaStar, FaClock, FaBook } from 'react-icons/fa';

function Modal({ isOpen, onClose, helpItem }) {
  console.log('Modal props:', { isOpen, helpItem });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !helpItem) {
    console.log('Modal not rendering because:', { isOpen, helpItem });
    return null;
  }

  console.log('Modal should be visible now:', { isOpen, helpItem });

  console.log('Modal rendering with:', helpItem);

  const instructions = {
    "Nueva Factura con Crédito": [
      "1. Abre el sistema de inventario",
      "2. Ve al menú 'Facturación'",
      "3. Selecciona 'Nueva Factura'",
      "4. Elige 'Pago a Crédito'",
      "5. Ingresa los datos del cliente",
      "6. Agrega los productos",
      "7. Configura las condiciones de crédito",
      "8. Guarda la factura"
    ],
    "Nueva Factura con Efectivo": [
      "1. Abre el sistema de inventario",
      "2. Ve al menú 'Facturación'",
      "3. Selecciona 'Nueva Factura'",
      "4. Elige 'Pago en Efectivo'",
      "5. Ingresa los datos del cliente",
      "6. Agrega los productos",
      "7. Calcula el total",
      "8. Confirma el pago y guarda"
    ],
    "Inicio del Sistema": [
      "1. Ejecuta el archivo .exe del sistema",
      "2. Espera a que se complete la instalación",
      "3. Abre el programa desde el escritorio",
      "4. En la primera ejecución, crea tu usuario administrador",
      "5. Configura la información de tu empresa",
      "6. Establece la moneda y zona horaria",
      "7. El sistema estará listo para usar"
    ],
    "Agregar nueva categoria": [
      "1. Ve al menú 'Categorias'",
      "2. Click en 'Nueva categoria'",
      "3. Completa: 'Nombre' con el tipo de categoria",
      "4. Guarda los cambios"
    ],
    "Agregar nuevo cliente": [
      "1. Ve al menú 'Clientes'",
      "2. Click en 'Nuevo cliente'",
      "3. Completa: 'Nombre', 'Telefono', 'Indentificacion', 'Telefono','Direccion'",
      "4. Guarda los cambios"
    ],
    "Agregar nuevo producto": [
      "1. Ve al menú 'Productos'",
      "2. Click en 'Nuevo producto'",
      "3. Completa: 'Nombre', 'Codigo de barras', 'Precio', 'Existencia', 'Categoria', 'Descripcion', 'Imagen'",
      "4. Guarda los cambios"
    ],
    "Agregar nuevo proveedor": [
      "1. Ve al menú 'Proveedores'",
      "2. Click en 'Nuevo'",
      "3. Completa: 'Nombre', 'Indentificacion', 'Telefono','Domicilio'",
      "4. Guarda los cambios"
    ],
    "Agregar nuevo usuario": [
      "1. Ve al 'Administracion de usuarios'",
      "2. Click en 'Nuevo'",
      "3. Completa: nombres, apellidos, correo, usuario, contraseña, perfil",
      "4. Guarda el usuario"
    ],
    "Consultar ganancias por producto": [
      "1. Ve a 'Reportes'",
      "2. El el menu de reportes selecciona 'Ganancias por producto'",
    ],
    "Consultar kardex": [
      "1. Ve al 'Kardex de inventario'",
      "2. Busca el producto que deseas consultar",
    ],
    "Realizar apertura de caja": [
      "1. Ve a 'Caja'",
      "2. Click en 'Apertura caja'",
      "3. Ingresa el monto de apertura",
      "4. Ingresa una nota de apertura",
      "5. Guarda los cambios"
    ],
    "Realizar cierre de caja": [
      "1. Ve a 'Caja'",
      "2. Click en 'Cierre caja'",
      "3. Ingresa el monto de cierre",
      "4. Ingresa una nota de cierre",
      "5. Guarda los cambios"
    ],
    "Realizar compra": [
      "1. Ve a 'Nueva compra'",
      "2. Click en 'Nueva compra'",
      "3. Busca el producto",
      "4. Ingresa el precio del producto",
      "5. Ingresa la cantidad del producto",
      "6. Ingresa el numero de factura",
      "7. Ingresa el proveedor",
      "8. Ingresa el monto total",
      "9. Ingresa una nota de la compra",
      "10. Guarda los cambios"
    ],
    "reimprimir factura": [
      "1. Ve a 'Hist. Facturas'",
      "2. Busca la factura que deseas reimprimir",
      "3. Seleccione la factura",
      "4. Click en 'Reimprimir factura'",
    ],

  };

  const currentInstructions = instructions[helpItem.title] || [];

  const getDifficultyLevel = (title) => {
    const easy = ["Inicio del Sistema", "Gestión de Productos"];
    const medium = ["Nueva Factura con Efectivo", "Reportes del Sistema"];
    const hard = ["Nueva Factura con Crédito", "Configuración de Usuarios"];

    if (easy.includes(title)) return { level: "Fácil", color: "#10b981" };
    if (medium.includes(title)) return { level: "Intermedio", color: "#f59e0b" };
    if (hard.includes(title)) return { level: "Avanzado", color: "#ef4444" };
    return { level: "Intermedio", color: "#f59e0b" };
  };

  const getEstimatedTime = (title) => {
    const times = {
      "Inicio del Sistema": "5-10 min",
      "Gestión de Productos": "2-5 min",
      "Nueva Factura con Efectivo": "3-7 min",
      "Nueva Factura con Crédito": "5-10 min",
      "Reportes del Sistema": "3-8 min",
      "Configuración de Usuarios": "5-15 min",
      "Realizar reimprimir factura": "2-5 min",
      "Realizar compra": "2-5 min",
      "Realizar reimprimir compra": "2-5 min",


    };
    return times[title] || "5-10 min";
  };

  const difficulty = getDifficultyLevel(helpItem.title);
  const estimatedTime = getEstimatedTime(helpItem.title);

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 9999,
        display: 'block',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '0',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          boxShadow: 'none',
          position: 'relative',
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Header */}
        <div className="modal-header" style={{
          padding: '2rem',
          borderBottom: '1px solid #e2e8f0',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div className="modal-header-content" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem'
          }}>
            <div className="modal-header-info" style={{ flex: 1 }}>
              <h3 className="modal-title" style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 1rem 0',
                lineHeight: '1.2'
              }}>
                {helpItem.title}
              </h3>
              <div className="modal-badges" style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <span className="modal-badge" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#e2e8f0',
                  color: '#475569',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <FaBook />
                  {helpItem.category}
                </span>
                <span className="modal-badge" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#f1f5f9',
                  color: difficulty.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <FaStar />
                  {difficulty.level}
                </span>
                <span className="modal-badge" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#f1f5f9',
                  color: '#475569',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <FaClock />
                  {estimatedTime}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="modal-close"
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '44px',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f1f5f9';
                e.target.style.color = '#1e293b';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'none';
                e.target.style.color = '#64748b';
              }}
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body" style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Image */}
          <div className="modal-image-container" style={{
            width: '100%',
            maxWidth: '100%',
            margin: 'auto'
          }}>
            <div className="modal-image-wrapper" style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              maxWidth: '1200px',
              margin: '0 auto'

            }}>
              <img
                src={helpItem.gif}
                alt={helpItem.title}
                className="modal-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="modal-description" style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p className="modal-description-text" style={{
              fontSize: '1.25rem',
              color: '#475569',
              lineHeight: '1.6',
              margin: 0
            }}>
              {helpItem.description}
            </p>
          </div>

          {/* Instructions */}
          <div className="modal-instructions" style={{
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h4 className="modal-instructions-title" style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 1.5rem 0',
              textAlign: 'center'
            }}>
              📋 Instrucciones Paso a Paso:
            </h4>
            <ol className="modal-instructions-list" style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '1rem'
            }}>
              {currentInstructions.map((instruction, index) => (
                <li key={index} className="modal-instruction-item" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#f8fafc',
                  borderRadius: '1rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <span className="modal-instruction-number" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.875rem',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </span>
                  <span className="modal-instruction-text" style={{
                    color: '#475569',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontWeight: '500'
                  }}>
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tags */}
          <div className="modal-tags" style={{
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h5 className="modal-tags-title" style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 1rem 0',
              textAlign: 'center'
            }}>
              Etiquetas relacionadas:
            </h5>
            <div className="modal-tags-list" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              {helpItem.tags.map(tag => (
                <span key={tag} className="modal-tag" style={{
                  background: '#e2e8f0',
                  color: '#475569',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer" style={{
          padding: '2rem',
          borderTop: '1px solid #e2e8f0',
          background: '#f8fafc',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'sticky',
          bottom: 0,
          zIndex: 10
        }}>
          <button
            onClick={onClose}
            className="modal-btn modal-btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.5rem',
              border: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              background: '#64748b',
              color: 'white',
              transition: 'all 0.3s ease',
              minHeight: '44px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#475569';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(100, 116, 139, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#64748b';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <FaArrowLeft />
            Cerrar
          </button>
          <a
            href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn modal-btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.5rem',
              border: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              transition: 'all 0.3s ease',
              minHeight: '44px',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #059669, #047857)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #10b981, #059669)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <FaDownload />
            Descargar Sistema
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
