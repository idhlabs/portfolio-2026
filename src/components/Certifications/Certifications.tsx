import { useMemo, useState } from "react";
import "./Certifications.css";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  skills?: string[];
  credentialUrl?: string;
  iconPath: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: "depc-certiprof",
    title: "DevOps Essentials Professional Certification - DEPC",
    issuer: "CertiProf",
    issued: "feb. 2026",
    credentialId: "7b55ae55-2c20-4271-9de7-6cfc9f1e34e3",
    skills: ["Cultura DevOps", "Integracion Continua", "Entrega Continua"],
    credentialUrl:
      "https://www.credly.com/badges/7b55ae55-2c20-4271-9de7-6cfc9f1e34e3/linked_in_profile",
    iconPath: "/assets/devops_certiprof.png",
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issued: "ene. 2026",
    credentialId: "da18469f-7816-48c6-b9a7-c1f4eb71a3b8",
    skills: ["Servicios Azure", "Seguridad en la nube", "Modelos de costos"],
    credentialUrl:
      "https://www.credly.com/badges/da18469f-7816-48c6-b9a7-c1f4eb71a3b8/linked_in_profile",
    iconPath: "/assets/azure_fundamentals.png",
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "6ae3d9c9-f78a-4bc6-801f-4b872322b2eb",
    issued: "nov. 2025",
    skills: [
      "Fundamentos AWS",
      "Arquitectura cloud",
      "Buenas practicas de seguridad",
    ],
    credentialUrl:
      "https://www.credly.com/badges/6ae3d9c9-f78a-4bc6-801f-4b872322b2eb/linked_in_profile",
    iconPath: "/assets/aws_cloud_foundations.png",
  },
  {
    id: "ef-set-b2",
    title: "Certificado EF SET Ingles 55/100 (B2 Intermedio Alto)",
    issuer: "EF SET",
    issued: "s/f en LinkedIn",
    skills: [
      "Comprension lectora B2",
      "Comprension auditiva B2",
      "Comunicacion tecnica en ingles",
    ],
    credentialUrl: "https://cert.efset.org/es/7yasxR",
    iconPath: "/assets/Certificado_EF_SET_Ingles.png",
  },
  {
    id: "aws-cloud-101",
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services (AWS)",
    issued: "mar. 2025",
    credentialId: "1dc22663-9d33-4f3c-9ce0-a566b08fd5e6",
    skills: [
      "Conceptos de computacion en la nube",
      "Modelos de despliegue",
      "Escalabilidad",
    ],
    credentialUrl:
      "https://www.credly.com/badges/1dc22663-9d33-4f3c-9ce0-a566b08fd5e6/linked_in_profile",
    iconPath: "/assets/aws_educate_cloud_101.png",
  },
  {
    id: "gsl-classroom",
    title: "GSL Classroom | Tecnologico de Monterrey & Duoc UC",
    issuer: "Canvas Credentials (Badgr)",
    issued: "dic. 2024",
    credentialId: "675883dadd2c6a536201725d",
    skills: [
      "Aprendizaje colaborativo",
      "Comunicacion efectiva",
      "Trabajo en equipo",
    ],
    credentialUrl:
      "https://badges.parchment.com/public/assertions/9o43pIQzQ3uj3u3trsKFzg",
    iconPath: "/assets/gsl_classroom.png",
  },
  {
    id: "meta-backend",
    title: "Introduccion al desarrollo de back-end",
    issuer: "Meta",
    issued: "jun. 2024",
    credentialId: "RZWDDXBH8G72",
    skills: ["APIs REST", "Arquitectura backend", "Java"],
    credentialUrl:
      "https://coursera.org/share/d5241ca8a0a548192560c0da03a12e33",
    iconPath: "/assets/meta_backend.png",
  },
];

const Certifications = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCert = useMemo(
    () => CERTIFICATIONS.find((cert) => cert.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <section className="certs-app">
      <header className="certs-header">
        <p className="certs-title">Carpeta: Certificaciones</p>
        <p className="certs-meta">{CERTIFICATIONS.length} elementos</p>
      </header>

      <div className="certs-body">
        {CERTIFICATIONS.map((cert) => (
          <button
            key={cert.id}
            type="button"
            className="certs-file"
            onClick={() => setSelectedId(cert.id)}
            title={cert.title}
          >
            <img src={cert.iconPath} alt={`${cert.title} icon`} />
            <span className="certs-file-title">{cert.title}</span>
            <span className="certs-file-issuer">{cert.issuer}</span>
          </button>
        ))}
      </div>

      {selectedCert && (
        <div
          className="certs-modal-backdrop"
          onClick={() => setSelectedId(null)}
        >
          <article
            className="certs-modal"
            onClick={(e) => e.stopPropagation()}
            aria-modal="true"
            role="dialog"
          >
            <header className="certs-modal-header">
              <p>Detalle de certificacion</p>
              <button
                type="button"
                className="certs-close"
                onClick={() => setSelectedId(null)}
              >
                x
              </button>
            </header>

            <div className="certs-modal-content">
              <div className="certs-modal-info">
                <h3>{selectedCert.title}</h3>
                <p>
                  <strong>Entidad:</strong> {selectedCert.issuer}
                </p>
                <p>
                  <strong>Expedicion:</strong> {selectedCert.issued}
                </p>
                <p>
                  <strong>ID credencial:</strong>{" "}
                  {selectedCert.credentialId ?? "No informado"}
                </p>
                <p>
                  <strong>Aptitudes:</strong>{" "}
                  {selectedCert.skills?.length
                    ? selectedCert.skills.join(", ")
                    : "No informadas"}
                </p>

                {selectedCert.credentialUrl ? (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certs-verify"
                  >
                    Mostrar credencial
                  </a>
                ) : (
                  <p className="certs-pending">
                    Mostrar credencial: pendiente de URL de validacion
                  </p>
                )}
              </div>

              <div className="certs-modal-preview">
                <img
                  src={selectedCert.iconPath}
                  alt={`${selectedCert.title} preview`}
                />
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Certifications;
