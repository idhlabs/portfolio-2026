/// <reference types="vite/client" />

// Declaración de módulos para archivos SVG
declare module "*.svg" {
  const content: string;
  export default content;
}

// También puedes importar SVG como React components
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Declaración para importar SVG como URL
declare module "*.svg?url" {
  const content: string;
  export default content;
}
