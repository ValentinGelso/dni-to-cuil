# Calculador de CUIL/CUIT

Calculadora web para obtener el Código Único de Identificación Laboral (CUIL) y la Clave Única de Identificación Tributaria (CUIT) de Argentina a partir del DNI.

## Características

- **Cálculo local:** Todo el cálculo del dígito verificador se realiza en el frontend (navegador), garantizando que los números de DNI no viajen a ningún servidor.
- **Múltiples prefijos:** Soporta la generación del CUIL con los prefijos tradicionales (20 y 27) y el automático/sin género (23).
- **Copiar al portapapeles:** Permite copiar el resultado rápidamente con un clic.
- **Variantes:** Muestra todas las variantes posibles de CUIL para un mismo DNI.

## Stack Tecnológico

- **React 18**
- **Vite**
- **Framer Motion** (Animaciones de UI)
- **Lucide React** (Iconos)
- **CSS Vanilla** (Estilos globales y diseño *glassmorphism*)

## Estructura del Proyecto

```text
src/
├── components/       
│   ├── Header.jsx
│   ├── CuilForm.jsx  # Formulario y validación
│   ├── ResultBox.jsx # Tarjeta de resultado
│   ├── Variants.jsx  # Lista de prefijos alternativos
│   └── Footer.jsx
├── lib/
│   └── cuil.js       # Lógica matemática del módulo 11
├── App.jsx           # Componente principal
├── main.jsx          # Punto de entrada de React
└── index.css         # Estilos globales y variables CSS
```

## Desarrollo Local

Pasos para correr el proyecto en tu computadora:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ValentinGelso/dni-to-cuil.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor local:
   ```bash
   npm run dev
   ```
