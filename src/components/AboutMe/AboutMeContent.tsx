const AboutMeContent: React.FC = () => {
  return (
    <div className="w-full overflow-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mt-2 md:mt-3">
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="coin-container about-coin-container">
            <div className="coin">
              <div className="coin-face coin-front">
                <img
                  src="/assets/perfil1.png"
                  alt="Perfil 8bit"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="coin-face coin-back">
                <img
                  src="/assets/perfil2.png"
                  alt="Perfil real"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <p className="text-center mt-3 text-2xl md:text-3xl">
            Iván Duarte Herrera
          </p>
        </div>

        <div className="flex-1 w-full">
          <p className="mb-3 leading-relaxed text-2xl md:text-3xl text-center md:text-left">
            Ingeniero en Informática
          </p>
          <p className="mb-3 leading-relaxed text-xl md:text-2xl text-center md:text-left">
            DevOps y Desarrollo de software.
          </p>
          <p className="mb-3 leading-relaxed text-lg md:text-xl text-left">
            Ingeniero en Informática con orientación al desarrollo de software,
            plataformas cloud y prácticas DevOps, con experiencia en desarrollo
            full-stack, despliegue de aplicaciones en entornos cloud,
            automatización CI/CD, contenedores Docker y trabajo con
            arquitecturas monolíticas y de microservicios
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
