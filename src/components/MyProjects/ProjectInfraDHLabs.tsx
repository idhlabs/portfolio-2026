import "./ProjectInfraDHLabs.css";

const ProjectInfraDHLabs: React.FC = () => {
  return (
    <div className="project-infra-container">
      <div className="project-infra-grid">
        {/* Columna izquierda: descripción */}
        <div className="project-infra-text">
          <h3 className="project-infra-title">
            Infraestructura DevOps Personal Homelab
          </h3>
          <p className="project-infra-description">
            Con mis conocimientos de operaciones TI y complementado con mi
            especialidad en Ingeniería de Software he levantado mi propia
            infraestructura local, configurando un dominio propio nacional junto
            con el servicio de Cloudflare Tunnel, sistemas Linux como Ubuntu,
            Docker y un sistema de gestión de redireccionamiento de servicios
            contenerizados llamado Traefik. Gracias a esto puedo alojar
            servicios y soluciones Frontend, Microservicios y Bases de datos en
            mi propio servidor.
          </p>
        </div>

        {/* Columna derecha: imagen GIF */}
        <div className="project-infra-image">
          <img
            src="/assets/infra-dhlabs.gif"
            alt="Flujo de infraestructura Homelab DHLabs"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfraDHLabs;