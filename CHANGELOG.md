# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Arquitectura Modular**: Separación de responsabilidades de la UI principal (`App.jsx`) extrayéndola en múltiples componentes independientes (`Header.jsx`, `CuilForm.jsx`, `ResultBox.jsx`, `Variants.jsx`, `Footer.jsx`).
- **Enlaces Sociales**: Integración de iconos oficiales (`lucide-react`) para GitHub y página web personal en el pie de página, incluyendo estilos CSS `.social-link` con micro-interacciones visuales.
- **Documentación Técnica**: Inclusión de un `README.md` riguroso detallando el algoritmo de ejecución local, la arquitectura orientada a componentes, el stack tecnológico y las instrucciones de setup del proyecto.
- **Control de Versiones**: Agregado de un archivo `.gitignore` estandarizado para entornos de Node/React/Vite (garantizando la exclusión segura de carpetas como `node_modules` y `dist`).

### Changed
- **Re-Branding de la Aplicación**: Actualización de la firma y metadatos del proyecto. Se removió la insignia visual "Barroco Deco apps", se limpió la etiqueta `<title>` del archivo base `index.html`, y se actualizó el copyright del pie de página a nombre del desarrollador (Valentín Gelsomino).
- **Refactorización (Clean Code)**: Purga profunda de comentarios innecesarios, anotaciones y separadores a lo largo de todos los archivos del árbol de código (`JSX`, `CSS`, y `JS`), estandarizando el proyecto bajo convenciones de código limpio y profesional.

### Removed
- **Archivos Obsoletos**: Eliminación de copias de seguridad residuales y archivos estáticos no utilizados (como `index.html.bak`).
