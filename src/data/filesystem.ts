// src/data/filesystem.ts
import { DirectoryNode } from "../types/filesystem";

export const fileSystem: DirectoryNode = {
  type: "directory",
  name: "home",
  children: {
    ivan: {
      type: "directory",
      name: "ivan",
      children: {
        "sobre-mi.txt": {
          type: "file",
          name: "sobre-mi.txt",
          content: `Hola! Soy Iván Duarte Herrera 

Desarrollador Full Stack apasionado por crear soluciones y llevarlas hasta la etapa de despliegue y entrega continua integrando el ciclo y prácticas DevOps.

Si estas aquí es porque te debe apasionar tanto la terminal y los sistemas Linux tanto como a mí :D, espero que te lleves una buena experiencia con este pequeño recorrido, puede que encuentres cosas divertidas ~

En este apartado intento hablar un poco más libre acerca de lo que me gusta, por ejemplo el crear sistemas y desplegarlos, cuando ocurren errores, me gusta leerlos y re leerlos, tomarme el tiempo para pensar que podría ser lo que ocurre y buscar su solución... Como a todo quien ofrece soluciones informáticas, sabemos que no hay mejor sensación como la de "Solucioné este error ! Sí ! sentirte el rey del mundo, y luego bajar de zopetón a la realidad para resolver el error número 2 jaja.

Actualmente estoy trabajando en mi proyecto más grande que es crear una infraestructura DevOps, donde combine la entrega y despliegue continuo, el testing, la creación de una infraestructura on-premise propia y observabilidad `,
        },
        "contacto.txt": {
          type: "file",
          name: "contacto.txt",
          content: `📧 Email: ivanduarteherrera@gmail.com
🔗 LinkedIn: /in/ivanduarte
💻 GitHub: github.com/reaien
🌐 Portfolio: ivanduarte.dev`,
        },
        proyectos: {
          type: "directory",
          name: "proyectos",
          children: {
            "proyecto1.md": {
              type: "file",
              name: "proyecto1.md",
              content: `# 🚀 E-commerce Platform

Stack: React, Node.js, MongoDB
Descripción: Plataforma de comercio electrónico completa
Link: https://proyecto1.com`,
            },
            "proyecto2.md": {
              type: "file",
              name: "proyecto2.md",
              content: `# 🎮 Game Portfolio

Stack: Three.js, React, WebGL
Descripción: Portfolio interactivo 3D
Link: https://proyecto2.com`,
            },
          },
        },
        skills: {
          type: "directory",
          name: "skills",
          children: {
            "frontend.txt": {
              type: "file",
              name: "frontend.txt",
              content: `Frontend Skills:
- React / Next.js ⚛️
- TypeScript 📘
- Tailwind CSS 🎨
- HTML5 / CSS3 🌐`,
            },
            "backend.txt": {
              type: "file",
              name: "backend.txt",
              content: `Backend Skills:
- Node.js / Express 🟢
- Python / Django 🐍
- PostgreSQL / MongoDB 🗄️
- REST APIs 🔌`,
            },
          },
        },
      },
    },
  },
};
