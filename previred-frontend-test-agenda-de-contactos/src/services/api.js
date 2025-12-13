 import axios from 'axios';

  const API_URL = '/api/users';

  /**
   * Maneja errores de la API y retorna mensajes específicos
   * @param {Error} error - Error de axios
   * @param {string} operacion - Tipo de operación (crear, eliminar, etc)
   */
  const handleApiError = (error, operacion) => {
    // Error de red
    if (!error.response) {
      throw new Error(
        `No se pudo conectar con el servidor. Verifique su conexión a internet.`
      );
    }

    // Error del servidor
    const { status } = error.response;

    switch (status) {
      case 400:
        throw new Error(
          `Datos inválidos para ${operacion}. Verifique la información ingresada.`
        );
      case 404:
        throw new Error(
          `El usuario no fue encontrado. Es posible que haya sido eliminado.`
        );
      case 500:
        throw new Error(
          `Error interno del servidor al ${operacion}. Intente nuevamente más tarde.`
        );
      default:
        throw new Error(
          `Error al ${operacion} (código ${status}). Por favor, intente nuevamente.`
        );
    }
  };

  /**
   * Servicio para manejar todas las operaciones con la API de usuarios
   */
  export const userService = {
    /**
     * Obtiene la lista de usuarios con paginación y búsqueda
     * @param {number} page - Número de página
     * @param {number} limit - Cantidad de usuarios por página
     * @param {string} searchQuery - Texto de búsqueda
     */
    async getUsers(page = 1, limit = 10, searchQuery = '') {
      try {
         let url = `${API_URL}?_page=${page}&_limit=${limit}&_sort=id&_order=desc`;
        if (searchQuery.trim()) {
          url = `${API_URL}?q=${encodeURIComponent(searchQuery)}&_page=${page}&_limit=${limit}&_sort=id&_order=desc`;
        }

        const response = await axios.get(url);

        return {
          data: response.data,
          total: parseInt(response.headers['x-total-count'] || '0', 10)
        };
      } catch (error) {
        handleApiError(error, 'cargar los usuarios');
      }
    },

    /**
     * Crea un nuevo usuario con validaciones
     * @param {Object} user - Datos del usuario (name, description, photo)
     */
    async createUser(user) {
      // Validación de datos antes de enviar
      if (!user.name?.trim()) {
        throw new Error('El nombre es obligatorio');
      }
      if (!user.description?.trim()) {
        throw new Error('La descripción es obligatoria');
      }
      if (!user.photo?.trim()) {
        throw new Error('La URL de la foto es obligatoria');
      }

      // Validar formato de URL básico
      try {
        new URL(user.photo);
      } catch {
        throw new Error('La URL de la foto no es válida');
      }

      try {
        const response = await axios.post(API_URL, {
          name: user.name.trim(),
          description: user.description.trim(),
          photo: user.photo.trim()
        }, {
          headers: { 'Content-Type': 'application/json' }
        });

        return response.data;
      } catch (error) {
        handleApiError(error, 'crear el usuario');
      }
    },

    /**
     * Elimina un usuario por ID
     * @param {string} id - ID del usuario a eliminar
     */
    async deleteUser(id) {
      if (!id) {
        throw new Error('ID de usuario inválido');
      }

      try {
        await axios.delete(`${API_URL}/${id}`);
      } catch (error) {
        handleApiError(error, 'eliminar el usuario');
      }
    }
  };
