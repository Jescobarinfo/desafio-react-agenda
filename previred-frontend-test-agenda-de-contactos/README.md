 # 📇 Agenda de Contactos Previred

  Aplicación web para gestionar contactos laborales con capacidades de búsqueda, paginación y operaciones CRUD completas.

  ## 🚀 Características Principales

  - ✅ Lista paginada de contactos con diseño responsive
  - ✅ Búsqueda en tiempo real con debounce optimizado
  - ✅ Agregar nuevos contactos mediante drawer lateral
  - ✅ Eliminar contactos con confirmación de seguridad
  - ✅ Manejo robusto de errores con mensajes específicos
  - ✅ Estados de carga visuales en todas las operaciones
  - ✅ Validación completa de formularios

  ## 🛠️ Tecnologías Utilizadas

  - **React 18.3.1** - Librería UI moderna y eficiente
  - **Vite 7** - Build tool ultrarrápido para desarrollo
  - **Ant Design 5** - Librería de componentes UI empresariales
  - **Axios 1.7** - Cliente HTTP para llamadas a la API
  - **Context API** - Gestión de estado global de React

  ## 📦 Instalación y Ejecución

  ### Requisitos Previos
  - Node.js >= 4.0.0
  - npm >= 6.0.0

  ### Backend (API y Base de Datos)

  Desde la raíz del proyecto:

  ```bash
  # Instalar dependencias del servidor
  npm install

  # Iniciar servidor backend en puerto 9000
  node server.js

  El servidor estará disponible en: http://localhost:9000

  Frontend (React + Vite)

  En una terminal separada:

  # Navegar a la carpeta del cliente
  cd previred-frontend-test-agenda-de-contactos

  # Instalar dependencias
  npm install

  # Iniciar servidor de desarrollo (puerto 5173)
  npm run dev

  La aplicación estará disponible en: http://localhost:5173

  🏗️ Arquitectura del Proyecto

  src/
  ├── components/          # Componentes React
  │   ├── UserList.jsx    # Componente principal con lista
  │   ├── UserCard.jsx    # Tarjeta individual de usuario
  │   └── AddUserDrawer.jsx # Formulario drawer
  ├── hooks/              # Custom Hooks reutilizables
  │   ├── useUsers.js     # Lógica CRUD de usuarios
  │   ├── usePagination.js # Lógica de paginación
  │   └── useSearch.js    # Búsqueda con debounce
  ├── context/            # Context API para estado global
  │   └── UserContext.jsx # Provider y hook de contexto
  ├── services/           # Servicios de API
  │   └── api.js         # Cliente HTTP con manejo de errores
  └── constants/          # Constantes de configuración
      └── index.js       # Variables globales

  🎨 Patrones y Buenas Prácticas Implementadas

  1. Custom Hooks

  Encapsulación de lógica reutilizable:
  - useUsers: Gestiona operaciones CRUD de usuarios
  - usePagination: Maneja estado de paginación
  - useSearch: Implementa búsqueda con debounce

  2. Context API

  - Centraliza el estado global de la aplicación
  - Evita prop drilling entre componentes
  - Facilita acceso al estado desde cualquier nivel

  3. Separation of Concerns

  - Componentes separados por responsabilidad única
  - Servicios dedicados para llamadas API
  - Hooks personalizados para lógica de negocio

  4. Manejo de Errores

  - Try-catch en todas las operaciones asíncronas
  - Mensajes de error específicos por tipo de fallo
  - Validación de datos antes de enviar al servidor
  - Control de errores de red y servidor

  5. Documentación

  - JSDoc en todas las funciones y componentes
  - Comentarios explicativos en lógica compleja
  - README detallado con instrucciones claras

  📡 API Endpoints

  La aplicación consume los siguientes endpoints:

  | Método | Endpoint       | Descripción                | Parámetros                       |
  |--------|----------------|----------------------------|----------------------------------|
  | GET    | /api/users     | Listar usuarios            | _page, _limit, q (opcional)      |
  | GET    | /api/users/:id | Obtener usuario específico | id                               |
  | POST   | /api/users     | Crear nuevo usuario        | Body: {name, description, photo} |
  | DELETE | /api/users/:id | Eliminar usuario           | id                               |

  Ejemplo de uso:

  // Listar usuarios paginados
  GET /api/users?_page=1&_limit=10

  // Buscar usuarios
  GET /api/users?q=Juan&_page=1&_limit=10

  // Crear usuario
  POST /api/users
  Content-Type: application/json
  {
    "name": "Juan Pérez",
    "description": "Desarrollador Frontend",
    "photo": "https://example.com/photo.jpg"
  }

  // Eliminar usuario
  DELETE /api/users/1

  ✨ Características Técnicas Destacadas

  Optimización de Rendimiento

  - Debounce en búsqueda: Reduce llamadas innecesarias a la API
  - useCallback: Previene re-renderizados innecesarios
  - Lazy loading: Carga bajo demanda de componentes

  Experiencia de Usuario

  - Loading states: Feedback visual durante operaciones
  - Mensajes claros: Notificaciones de éxito y error
  - Confirmaciones: Popconfirm antes de eliminar
  - Validación en tiempo real: Feedback inmediato en formularios

  Seguridad y Validación

  - Validación de campos obligatorios
  - Validación de formato de URL para imágenes
  - Sanitización de datos antes de enviar
  - Manejo seguro de errores sin exponer información sensible

  🧪 Testing Manual

  Checklist de funcionalidades probadas:

  - Visualización de lista de usuarios
  - Paginación funcional (anterior/siguiente)
  - Búsqueda de usuarios en tiempo real
  - Apertura del drawer para agregar contacto
  - Creación de usuario con validación
  - Eliminación de usuario con confirmación
  - Manejo de errores de red
  - Estados de carga visibles
  - Diseño responsive

  👨‍💻 Información del Desarrollador

  Nombre: Johan Escobar
  Email: [tu-email@example.com]
  Cargo al que postula: Frontend Developer
  Fecha de entrega: Diciembre 2025

