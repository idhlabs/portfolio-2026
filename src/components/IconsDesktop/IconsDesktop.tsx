import { useState } from "react";
import AboutMeContent from "../AboutMe/AboutMeContent";
import WindowModal from "../WindowModal/WindowModal";
import Terminal from "../Terminal";
import ContactMe from "../ContactMe/ContactMe";
import Certifications from "../Certifications/Certifications";
import MyProjects from "../MyProjects/MyProjects";
import ProjectInfraDHLabs from "../MyProjects/ProjectInfraDHLabs";
import "./IconsDesktop.css";

type WindowId =
  | "about-window"
  | "projects-window"
  | "terminal-window"
  | "mail-window"
  | "certifications-window"
  | "infra-window";
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
      <section className="mt-5 flex flex-col flex-wrap max-h-[90vh] gap-4 max-w-6 pl-6 text-center text-xl">
        <div className="desktop-icon w-25 flex flex-col items-center">
          <img className="w-12" src="/assets/folderIcon.svg" alt="meIcon" />
          <p className="desktop-icon-label">Mis Cosas</p>
        </div>
        <button
          className="desktop-icon w-25 flex flex-col items-center cursor-pointer"
          onClick={() => openWindow("certifications-window")}
        >
          <img className="w-12" src="/assets/certsIcon.svg" alt="meIcon" />
          <p className="desktop-icon-label">Certificaciones</p>
        </button>
        <button
          className="desktop-icon w-25 flex flex-col items-center cursor-pointer"
          onClick={() => openWindow("projects-window")}
        >
          <img className="w-12" src="/assets/projectsIcon.svg" alt="meIcon" />
          <p className="desktop-icon-label">Mis Proyectos testing</p>
        </button>
        
        <button
          className="desktop-icon max-w-25 flex flex-col items-center cursor-pointer"
          onClick={() => openWindow("terminal-window")}
        >
          <img
            className="w-12"
            src="/assets/terminalIcon.svg"
            alt="terminalIcon"
          />
          <p className="desktop-icon-label">Terminal</p>
        </button>
        <a
          href="/CV_Ivan_Duarte_Herrera.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-icon w-25 flex flex-col items-center"
        >
          <img className="w-12" src="/assets/pdfIcon.svg" alt="meIcon" />
          <p className="desktop-icon-label">CV - Iván Duarte Herrera</p>
        </a>
        <button
          className="desktop-icon w-25 flex flex-col items-center cursor-pointer"
          onClick={() => openWindow("mail-window")}
        >
          <img className="w-12" src="/assets/emailIcon.svg" alt="meIcon" />
          <p className="desktop-icon-label">Contacto DH-MAIL</p>
        </button>
      </section>

      {/* Papelera de reciclaje - Esquina inferior derecha */}
      <div className="desktop-icon absolute bottom-6 right-6 w-25 flex flex-col items-center text-center">
        <img className="w-16" src="/assets/trashIcon.svg" alt="trashIcon" />
        <p className="desktop-icon-label">Papelera</p>
      </div>

      <WindowModal
        id="about-window"
        title="Sobre Mí"
        isOpen={openWindows["about-window"]}
        onClose={closeWindow}
        docked={true}
      >
        <AboutMeContent />
      </WindowModal>

      <WindowModal
        id="projects-window"
        title="Mis Proyectos"
        isOpen={openWindows["projects-window"]}
        onClose={closeWindow}
      >
        <MyProjects onOpenProject={openWindow} />
      </WindowModal>

      <WindowModal
        id="terminal-window"
        title="Terminal - ivan@portfolio"
        isOpen={openWindows["terminal-window"]}
        onClose={closeWindow}
        width="w-[95vw] max-w-[980px]"
        height="h-[82vh] max-h-[600px]"
        noPadding={true}
      >
        <Terminal />
      </WindowModal>

      <WindowModal
        id="mail-window"
        title="DH-MAIL"
        isOpen={openWindows["mail-window"]}
        onClose={closeWindow}
        width="w-[960px]"
        height="h-[78vh]"
        noPadding={true}
      >
        <ContactMe />
      </WindowModal>

      <WindowModal
        id="certifications-window"
        title="Certificaciones - Ivan Duarte"
        isOpen={openWindows["certifications-window"]}
        onClose={closeWindow}
        width="w-[980px]"
        height="h-[700px]"
        noPadding={true}
      >
        <Certifications />
      </WindowModal>

      <WindowModal
        id="infra-window"
        title="Infraestructura Homelab"
        isOpen={openWindows["infra-window"]}
        onClose={closeWindow}
        width="w-[1020px]"
        height="h-[640px]"
      >
        <ProjectInfraDHLabs />
      </WindowModal>
    </>
  );
};

export default IconsDesktop;
