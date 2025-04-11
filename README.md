# Descripción
Aplicación web para gestionar contratos de reaseguro con:
✔️ Listado de contratos
✔️ Registro de nuevos contratos
✔️ Arquitectura Hexagonal
✔️ Frontend en Vanilla JS
✔️ Backend Node.js/Express
✔️ Datos en memoria (sin base de datos externa)

# Tecnologías
Capa	Tecnologías
Frontend	HTML5, CSS3, JavaScript Vanilla
Backend	Node.js, Express
Persistencia	Almacenamiento en memoria (Array)
Arquitectura	Hexagonal

# Configuración
Prerrequisitos
Node.js v16+
NPM/Yarn

# Instalación
bash
Copy

# Clonar repositorio
git clone https://github.com/KingMortem/reaseguro-app

# Backend
cd backend
npm install
npm start

# Frontend (en otra terminal)
cd frontend
npm install -g live-server
live-server src --port=5500

# Ejecución
Entorno	Comando	URL
Backend	npm start	http://localhost:3000
Frontend	live-server src --port=5500	http://localhost:5500

# Estructura del Proyecto
Copy
/reinsurance-app
  /backend
    /src
      /domain          # Lógica de negocio (Contract, Repository)
      /infrastructure # Adaptadores (InMemoryRepository)
      /application    # Casos de uso (Service)
      server.js       # Punto de entrada
  /frontend
    /src
      index.html      # Interfaz
      app.js         # Lógica frontend
      styles.css     # Estilos

# Endpoints API
Método	Ruta	Descripción
GET	/api/contracts	Obtener todos los contratos
POST	/api/contracts	Crear nuevo contrato
Ejemplo POST:

json
Copy
{
  "name": "Contrato XYZ",
  "premium": 85000
}

# Características Clave
Datos iniciales: 3 contratos de ejemplo precargados

Validaciones:

Nombre obligatorio

Prima debe ser mayor a 0

Persistencia: Los datos se mantienen mientras el servidor esté activo