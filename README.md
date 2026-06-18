# Calculador de CUIL/CUIT

Una aplicación web rápida, segura y estéticamente atractiva para calcular el Código Único de Identificación Laboral (CUIL) y la Clave Única de Identificación Tributaria (CUIT) de Argentina.

## Características

- **Cálculo Local y Seguro:** Todo el procesamiento del algoritmo se realiza del lado del cliente, garantizando total privacidad de los datos ingresados.
- **Soporte de Múltiples Variantes:** Genera automáticamente prefijos tradicionales (20/27) y el prefijo sin asignación de género (23), recomendando la opción óptima para evitar conflictos.
- **Portapapeles Ágil:** Copiado del resultado con 1 clic para un flujo de trabajo fluido.
- **Arquitectura Escalable:** Totalmente componentizado siguiendo patrones de diseño y mejores prácticas en React.

## Stack Tecnológico

- **React 18** (Librería UI)
- **Vite** (Empaquetador y entorno de desarrollo)
- **Framer Motion** (Animaciones y micro-interacciones)
- **Lucide React** (Iconografía limpia y minimalista)
- **Vanilla CSS** (Sistema de diseño usando variables nativas CSS)

## Estructura del Proyecto

El código fuente está rigurosamente organizado por responsabilidades:

```text
src/
├── components/       # Componentes modulares y reutilizables
│   ├── Header.jsx
│   ├── CuilForm.jsx  # Gestión del formulario y validaciones
│   ├── ResultBox.jsx # Despliegue dinámico del CUIL principal
│   ├── Variants.jsx  # Lista expandible de variantes
│   └── Footer.jsx
├── lib/
│   └── cuil.js       # Utilidades puras: Algoritmo de cálculo del módulo 11
├── App.jsx           # Contenedor padre, control de estado y orquestación
├── main.jsx          # Punto de entrada (React Root)
└── index.css         # Tokens de diseño y estilos globales Glassmorphism
```

## Ejecución Local

Para correr el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone <URL-DEL-REPOSITORIO>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Enfoque de Diseño
Se diseñó una interfaz *Premium* basada en **Glassmorphism**, fusionando un tema oscuro elegante con acentos institucionales dorados. El uso de desenfoques de fondo (backdrop filters) y animaciones de entrada logran una experiencia de usuario altamente responsiva y moderna.
