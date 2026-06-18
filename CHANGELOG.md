# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **Jerarquía y Layout del Footer**: Rediseño del pie de página a un layout de columna centrada. Se actualizó el texto de copyright a "Desarrollado por Valentín Gelsomino" con mayor peso visual y se reubicaron los enlaces sociales (GitHub, LinkedIn y Web) justo debajo del crédito de autor para una mejor jerarquía visual.

## [1.0.0] - 2026-06-18

### Added
- **Arquitectura de Componentes**: Separación lógica de la vista principal (`App.jsx`) en componentes funcionales individuales (`Header`, `CuilForm`, `ResultBox`, `Variants`, `Footer`).
- **Navegación Social**: Se agregaron enlaces al perfil de GitHub y portfolio personal en el pie de página, utilizando iconos de `lucide-react` con estilos de hover unificados.
- **Documentación**: Nuevo archivo `README.md` con instrucciones de instalación, uso local y detalle del stack tecnológico.
- **Git**: Se incluyó el archivo `.gitignore` estándar para proyectos React/Vite.

### Changed
- **Branding y Metadatos**: Se actualizaron los títulos en `index.html` y los textos del pie de página para reflejar la autoría directa (Valentín Gelsomino).
- **Refactor de Código**: Limpieza general del código base, eliminando comentarios de prototipado y aplicando buenas prácticas de legibilidad en componentes y estilos.
- **UI/UX del Footer**: Se reemplazó el diseño apilado del pie de página por un layout horizontal con flexbox para mejorar la distribución visual.

### Removed
- Eliminación de archivos temporales y de backup generados durante el desarrollo inicial (`index.html.bak`).
