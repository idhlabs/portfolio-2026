import { useState } from "react";
import WindowModal from "../WindowModal/WindowModal";
import Terminal from "../Terminal";
import "./IconsDesktop.css";

type WindowId = "about-window" | "projects-window" | "terminal-window";
type OpenWindowsState = Record<string, boolean>;

const IconsDesktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindowsState>({
    "about-window": true,
  });

  const openWindow = (id: WindowId): void => {
    setOpenWindows((prev) => ({ ...prev, [id]: true }));
  };

  const closeWindow = (id: string): void => {
    setOpenWindows((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <section className="mt-5 flex flex-col flex-wrap max-h-[90vh] gap-4 max-w-6 pl-6 text-center">
        <button
          className="max-w-25 flex flex-col items-center cursor-pointer"
          onClick={() => openWindow("about-window")}
        >
          <img className="w-12" src="/assets/aboutMeIcon.svg" alt="meIcon" />
          <p className="bg-amber-50 p-1">Sobre Mí</p>
        </button>
        <div className="w-25 flex flex-col items-center">
          <img className="w-12" src="/assets/folderIcon.svg" alt="meIcon" />
          <p className="bg-amber-50 p-1">Mis Cosas</p>
        </div>
        <div className="w-25 flex flex-col items-center">
          <img className="w-12" src="/assets/certsIcon.svg" alt="meIcon" />
          <p className="bg-amber-50 p-1">Certificaciones</p>
        </div>
        <div className="w-25 flex flex-col items-center">
          <img className="w-12" src="/assets/projectsIcon.svg" alt="meIcon" />
          <p className="bg-amber-50 p-1">Mis Proyectos</p>
        </div>
        <button
          className="max-w-25 flex flex-col items-center cursor-pointer"
          onClick={() => openWindow("terminal-window")}
        >
          <img
            className="w-12"
            src="/assets/terminalIcon.svg"
            alt="terminalIcon"
          />
          <p className="bg-amber-50 p-1">Terminal</p>
        </button>
        <a
          href="/CV_Ivan_Duarte_Herrera.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-25 flex flex-col items-center"
        >
          <img className="w-12" src="/assets/pdfIcon.svg" alt="meIcon" />
          <p className="bg-amber-50 p-1">CV - Iván Duarte Herrera</p>
        </a>
        <div className="w-25 flex flex-col items-center">
          <img className="w-12" src="/assets/emailIcon.svg" alt="meIcon" />
          <p className="bg-amber-50 p-1">DH-MAIL</p>
        </div>
      </section>

      {/* Papelera de reciclaje - Esquina inferior derecha */}
      <div className="fixed right-6 w-25 flex flex-col items-center text-center">
        <img className="w-16" src="/assets/trashIcon.svg" alt="trashIcon" />
        <p className="bg-amber-50 p-1">Papelera</p>
      </div>

      <WindowModal
        id="about-window"
        title="Sobre Mí"
        isOpen={openWindows["about-window"]}
        onClose={closeWindow}
      >
        <div className="flex gap-8 items-start mt-10">
          {/* Foto con efecto de moneda girando y nombre */}
          <div className="flex flex-col items-center">
            <div className="coin-container">
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
            <p className="text-center mt-3 text-xl">Iván Duarte Herrera</p>
          </div>

          {/* Texto descriptivo */}
          <div className="flex-1">
            <p className="mb-3 leading-relaxed text-2xl">
              Ingeniero en Informática
            </p>
            <p className="mb-3 leading-relaxed text-xl">
              DevOps y Desarrollo de software.
            </p>
            <p className="mb-3 leading-relaxed text-base">
              Ingeniero en Informática con orientación al desarrollo de
              software, plataformas cloud y prácticas DevOps, con experiencia en
              desarrollo full-stack, despliegue de aplicaciones en entornos
              cloud, automatización CI/CD, contenedores Docker y trabajo con
              arquitecturas monolíticas y de microservicios
            </p>
          </div>
        </div>
      </WindowModal>

      <WindowModal
        id="projects-window"
        title="Mis Proyectos"
        isOpen={openWindows["projects-window"]}
        onClose={closeWindow}
      >
        <p>Lista de proyectos...</p>
      </WindowModal>

      <WindowModal
        id="terminal-window"
        title="Terminal - ivan@portfolio"
        isOpen={openWindows["terminal-window"]}
        onClose={closeWindow}
        width="w-[1100px]"
        height="h-[600px]"
        noPadding={true}
      >
        <Terminal />
      </WindowModal>
    </>
  );
};

export default IconsDesktop;
