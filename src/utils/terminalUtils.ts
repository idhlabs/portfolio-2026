// src/utils/terminalUtils.ts

import { FileSystemNode, DirectoryNode, FileNode } from "../types/filesystem";

/**
 * Navega por el sistema de archivos siguiendo una ruta
 * @param fs - Sistema de archivos
 * @param path - Array con la ruta, ej: ['ivan', 'proyectos']
 * @returns El nodo encontrado o null
 */
export const navigateToPath = (
  fs: FileSystemNode,
  path: string[],
): FileSystemNode | null => {
  let current: FileSystemNode = fs;

  for (const segment of path) {
    if (segment === "" || segment === ".") {
      continue; // Ignora segmentos vacíos o "."
    }

    if (segment === "..") {
      // Navegar hacia atrás: no se puede en navigateToPath porque necesitamos
      // el contexto del estado completo. Esto se maneja en el comando cd directamente.
      // Aquí simplemente ignoramos ".." para evitar errores
      continue;
    }

    if (
      current.type === "directory" &&
      current.children &&
      current.children[segment]
    ) {
      current = current.children[segment];
    } else {
      return null; // No existe la ruta
    }
  }

  return current;
};

/**
 * Lista los contenidos de un directorio
 * @param directory - Nodo de tipo directorio
 * @returns Array con nombres de archivos/carpetas
 */
export const listDirectory = (directory: FileSystemNode): string[] => {
  if (directory.type !== "directory") {
    return [];
  }

  return Object.keys((directory as DirectoryNode).children || {});
};

/**
 * Obtiene el contenido de un archivo
 * @param file - Nodo de tipo archivo
 * @returns Contenido del archivo
 */
export const readFile = (file: FileSystemNode): string => {
  if (file.type !== "file") {
    return "Error: No es un archivo";
  }

  return (file as FileNode).content || "";
};
