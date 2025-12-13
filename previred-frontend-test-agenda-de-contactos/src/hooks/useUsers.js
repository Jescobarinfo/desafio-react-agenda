 import { useState, useCallback } from 'react';
  import { userService } from '../services/api';
  import { message } from 'antd';

  /**
   * Hook personalizado para manejar operaciones de usuarios
   * @returns {Object} Estado y funciones para gestión de usuarios
   */
  export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    /**
     * Carga la lista de usuarios con paginación y búsqueda
     */
    const fetchUsers = useCallback(async (page, limit, searchQuery) => {
      setLoading(true);
      try {
        const result = await userService.getUsers(page, limit, searchQuery);
        setUsers(result.data);
        setTotal(result.total);
      } catch (error) {
        message.error({
          content: error.message,
          duration: 5,
        });
        // En caso de error, mantener usuarios anteriores si existen
        if (users.length === 0) {
          setUsers([]);
        }
      } finally {
        setLoading(false);
      }
    }, []);

    /**
     * Crea un nuevo usuario
     */
    const createUser = useCallback(async (userData) => {
      setLoading(true);
      try {
        //await userService.createUser(userData);
        const newUser = await userService.createUser(userData);

      // Agregar el nuevo usuario AL INICIO del estado actual
      setUsers(prevUsers => [newUser, ...prevUsers]);
        message.success({
          content: 'Usuario creado exitosamente',
          duration: 3,
        });
        return true;
      } catch (error) {
        message.error({
          content: error.message,
          duration: 5,
        });
        return false;
      } finally {
        setLoading(false);
      }
    }, []);


    

    /**
     * Elimina un usuario
     */
    const deleteUser = useCallback(async (userId) => {
      setLoading(true);
      try {
        await userService.deleteUser(userId);
        message.success({
          content: 'Usuario eliminado exitosamente',
          duration: 3,
        });
        return true;
      } catch (error) {
        message.error({
          content: error.message,
          duration: 5,
        });
        return false;
      } finally {
        setLoading(false);
      }
    }, []);

    return {
      users,
      loading,
      total,
      fetchUsers,
      createUser,
      deleteUser
    };
  };