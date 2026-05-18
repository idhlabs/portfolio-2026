import "./MyProjects.css";

type WindowId =
  | "about-window"
  | "projects-window"
  | "terminal-window"
  | "mail-window"
  | "certifications-window"
  | "infra-window";

type ProjectItem = {
  id: WindowId;
  label: string;
  icon: string;
};

const projects: ProjectItem[] = [
  {
    id: "infra-window",
    label: "Infraestructura Homelab",
    icon: "/assets/folderIcon.svg",
  },
];

interface MyProjectsProps {
  onOpenProject: (id: WindowId) => void;
}

const MyProjects: React.FC<MyProjectsProps> = ({ onOpenProject }) => {
  return (
    <div className="my-projects-folder">
      <div className="my-projects-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            className="my-projects-item"
            onClick={() => onOpenProject(project.id)}
          >
            <img
              className="my-projects-item-icon"
              src={project.icon}
              alt={project.label}
            />
            <p className="my-projects-item-label">{project.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;