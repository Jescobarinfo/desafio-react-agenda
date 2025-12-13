 # Previred Frontend Test - Agenda de Contactos

  Solución completa del desafío técnico de Frontend React para Previred.

  ## 👨‍💻 Información del Candidato

  - **Nombre:** Johan Sebastian Escobar Acosta
  - **Email:** jescobar.acosta@outlook.com
  - **Cargo:** Desarrollador React
  - **Fecha de entrega:** Diciembre 2025

  ---

  ## 📋 Descripción del Proyecto

  Aplicación web para gestionar una agenda de contactos laborales con las siguientes funcionalidades:

  ### ✅ Funcionalidades Implementadas

  1. **Lista de Usuarios Paginada**
     - Visualización de 10 usuarios por página
     - Navegación entre páginas con controles
     - Diseño en grid con avatar, nombre y descripción

  2. **Buscador en Tiempo Real**
     - Búsqueda por nombre de usuario
     - Debounce optimizado (500ms)
     - Filtrado automático de resultados

  3. **Agregar Contactos**
     - Drawer lateral para formulario
     - Validación de campos obligatorios
     - Validación de formato de URL para fotos
     - Envío por AJAX a la API

  4. **Eliminar Contactos**
     - Confirmación antes de eliminar
     - Actualización automática de la lista

  5. **Manejo de Errores**
     - Mensajes específicos por tipo de error
     - Control de excepciones en todas las operaciones
     - Feedback visual al usuario

  ---

  ## 🛠️ Stack Tecnológico

  ### Frontend
  - **React 18.3.1** - Librería UI (cumple requisito React 17+)
  - **Vite 7** - Build tool moderno y rápido
  - **Ant Design 5** - Librería de componentes UI
  - **Axios 1.7** - Cliente HTTP
  - **Context API** - Gestión de estado global (valor adicional)

  ### Backend (Incluido)
  - **JSON Server** - API REST simulada
  - **Node.js** - Entorno de ejecución

  ---

  ## 🏗️ Arquitectura y Patrones

  ### Estructura del Proyecto

  desafio-react-agenda/
  ├── previred-frontend-test-agenda-de-contactos/    # Aplicación React
  │   ├── src/
  │   │   ├── components/          # Componentes React
  │   │   │   ├── UserList.jsx    # Lista principal
  │   │   │   ├── UserCard.jsx    # Tarjeta de usuario
  │   │   │   └── AddUserDrawer.jsx # Drawer formulario
  │   │   ├── hooks/              # Custom Hooks
  │   │   │   ├── useUsers.js     # Lógica CRUD usuarios
  │   │   │   ├── usePagination.js # Lógica paginación
  │   │   │   └── useSearch.js    # Búsqueda con debounce
  │   │   ├── context/            # Context API
  │   │   │   └── UserContext.jsx # Estado global
  │   │   ├── services/           # Servicios API
  │   │   │   └── api.js         # Cliente HTTP
  │   │   ├── App.jsx
  │   │   └── main.jsx
  │   ├── package.json
  │   └── vite.config.js
  ├── db.json              # Base de datos JSON
  ├── server.js           # Servidor API
  └── package.json

  ### Patrones Implementados

  1. **Custom Hooks** (3 implementados)
     - `useUsers`: Encapsula toda la lógica CRUD
     - `usePagination`: Maneja estado de paginación
     - `useSearch`: Implementa debounce en búsqueda

  2. **Context API** (Valor Adicional)
     - Centraliza el estado global
     - Evita prop drilling
     - Combina múltiples hooks

  3. **Separation of Concerns**
     - Componentes solo para UI
     - Hooks para lógica de negocio
     - Servicios para llamadas API

  4. **Error Handling**
     - Try-catch en operaciones async
     - Mensajes específicos por tipo
     - Validaciones robustas

  ---

  ## 🚀 Instalación y Ejecución

  ### Requisitos Previos
  - Node.js >= 4.0.0
  - npm >= 6.0.0

  ### 1. Clonar el repositorio

  ```bash
  git clone https://github.com/Jescobarinfo/desafio-react-agenda.git
  cd desafio-react-agenda

  2. Ejecutar Backend (API)

  En una terminal:

  # Instalar dependencias
  npm install

  # Iniciar servidor en puerto 9000
  node server.js

  Servidor disponible en: http://localhost:9000

  3. Ejecutar Frontend (React)

  En otra terminal:

  # Navegar a la carpeta del cliente
  cd previred-frontend-test-agenda-de-contactos

  # Instalar dependencias
  npm install

  # Iniciar servidor de desarrollo
  npm run dev

  Aplicación disponible en: http://localhost:5173

  ---
  📡 API Endpoints

  | Método | Ruta           | Descripción              | Parámetros                       |
  |--------|----------------|--------------------------|----------------------------------|
  | GET    | /api/users     | Lista todos los usuarios | _page, _limit, q (búsqueda)      |
  | GET    | /api/users/:id | Obtiene un usuario       | id                               |
  | POST   | /api/users     | Crea un usuario          | Body: {name, description, photo} |
  | DELETE | /api/users/:id | Elimina un usuario       | id                               |

  Ejemplos de uso:

  # Listar usuarios paginados
  GET /api/users?_page=1&_limit=10

  # Buscar usuarios
  GET /api/users?q=Juan

  # Crear usuario
  POST /api/users
  Content-Type: application/json
  {
    "name": "Juan Pérez",
    "description": "Desarrollador Frontend",
    "photo": "https://example.com/photo.jpg"
  }

  # Eliminar usuario
  DELETE /api/users/1

  ---
  ✨ Características Técnicas Destacadas

  Buenas Prácticas

  - ✅ Código documentado con JSDoc
  - ✅ Componentes reutilizables
  - ✅ Nombres descriptivos
  - ✅ Organización clara de carpetas
  - ✅ Separación de responsabilidades

  Optimizaciones UX/UI

  - ✅ Debounce en búsqueda (evita llamadas excesivas)
  - ✅ Loading states visuales
  - ✅ Scroll al top al cambiar página
  - ✅ Deshabilitar botones durante loading
  - ✅ Mensajes de éxito/error claros
  - ✅ Confirmación antes de eliminar
  - ✅ Ordenamiento de usuarios (nuevos primero)

  Validaciones

  - ✅ Campos obligatorios en formulario
  - ✅ Validación de formato URL
  - ✅ Sanitización de datos
  - ✅ Manejo de casos edge

